// useLoaderData zwraca dane loadera do najbliższego rodzica trasy loadera
import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/MealPage";
const singleMealUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
import { useQuery } from "@tanstack/react-query";

const singleMealQuery = (id) => {
  return {
    queryKey: ["dish", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleMealUrl}${id}`);
      return data;
    },
  };
};


export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleMealQuery(id));
    return { id };
  };

const Meal = () => {

  const { id } = useLoaderData();
  const navigate = useNavigate();
  
  const { data } = useQuery(singleMealQuery(id));
  if (!data) return <Navigate to="/" />;

  const singleMeal = data.meals[0];
console.log('singleMeal: ', singleMeal)
  const {
    idMeal: idMeal,
    strMeal: strMeal,
    strMealThumb: strMealThumb,
    strCategory: strCategory,
    strArea: strArea,
    strInstructions: instructions,
  } = singleMeal;

  const validIngredients = Object.keys(singleMeal)
    .filter(
      (key) => key.startsWith("strIngredient") && singleMeal[key] !== null || ""
    )
    .map((key) => singleMeal[key]);

  const validstrMeasures = Object.keys(singleMeal)
    .filter((key) => key.startsWith("strMeasure") && singleMeal[key] !== null || "")
    .map((key) => singleMeal[key]);

  // console.log("validstrMeasures: ", validstrMeasures);
  return (
    <Wrapper className='wrapper'>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{strMeal}</h3>
      </header>
      <div className="meal" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} className="img" />
        <div className="meal-info">
          <p>
            <span className="meal-data">name :</span>
            {strMeal}
          </p>
          <p>
            <span className="meal-data">category :</span>
            {strCategory}
          </p>

          <p>
            <span className="meal-data">area :</span>
            {strArea}
          </p>
          <p>
            <span className="meal-data">ingredients :</span>
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
            <span className="meal-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Meal;
