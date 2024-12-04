// useLoaderData zwraca dane loadera do najbliższego rodzica trasy loadera
import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import { useQuery } from "@tanstack/react-query";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["drink", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

// // without React Query
// export const loader_ = async ({ params }) => {
//     const { id } = params;
//     const response = await axios.get(`${singleCocktailUrl}${id}`)
//     return { id, data };
//   };

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Drink = () => {
  // without React Query
  // const { id, data } = useLoaderData();
  const { id } = useLoaderData();
  const navigate = useNavigate();
  // with React Query
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const validstrMeasures = Object.keys(singleDrink)
    .filter((key) => key.startsWith("strMeasure") && singleDrink[key] !== null)
    .map((key) => singleDrink[key]);

  // console.log("validstrMeasures: ", validstrMeasures);
  return (
    <Wrapper className='wrapper'>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink" key={id}>
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
               
                  <span className="ing" key={item}>
                    {`${item}: ${validstrMeasures[index]}` || "unknown"}
                    {index < validIngredients.length - 1 ? "," : ""}
                  </span>
               
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Drink;
