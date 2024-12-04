import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const DrinksList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper className='wrapper'>
      {formattedDrinks.map((item) => {
        return <DrinkCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default DrinksList;
