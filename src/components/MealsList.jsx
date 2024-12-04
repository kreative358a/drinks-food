import Wrapper from '../assets/wrappers/CocktailList';
import MealCard from './MealCard';
import { nanoid } from "nanoid";

const MealsList = ({ meals }) => {
  if (!meals) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  const formattedMeals = meals.map((item) => {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = item;
    return {
      id: idMeal,
      name: strMeal,
      image: strMealThumb,
      category: strCategory,
      area: strArea,
    };
  });
  return (
    <Wrapper className='wrapper'>
      {formattedMeals.map((item) => {
        return <MealCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default MealsList;
