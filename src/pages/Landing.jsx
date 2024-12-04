import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import MealsList from "../components/MealsList";
// import SearchForm from "../components/SearchForm";
import WrapperAbout from '../assets/wrappers/HomePage';
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const mealSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";

const searchMealsQuery = (searchTerm) => {
  return {
    queryKey: ["meals"],
    queryFn: async () => {
      // searchTerm = searchTerm || 'a'; 
      searchTerm =  'all';        
      const response = await axios.get(`${mealSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const loaderMeals = (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    
    const searchTerm =  "all";
    // const searchTerm = url.searchParams.get("search") || "all";
    await queryClient.ensureQueryData(searchMealsQuery("all"));
    // return { searchTerm }  || "all";
    return { searchTerm };
  };


const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["drinks"],
    queryFn: async () => {
      // searchTerm = searchTerm || 'a'; 
      searchTerm =  'all';        
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loaderDrinks = (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    
    const searchTerm =  "all";
    // const searchTerm = url.searchParams.get("search") || "all";
    await queryClient.ensureQueryData(searchCocktailsQuery("all"));
    // return { searchTerm }  || "all";
    return { searchTerm };
  };


const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  const { data: meals } = useQuery(searchMealsQuery(searchTerm));

  return (
    <>
    <WrapperAbout className='wrapper' style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h3 className="about_h3">About Us</h3>
      <h4 className='about_h4'>
      Introducing "MixMaster", the ultimate party or casual meal companion app that pulls
cocktails from a fun cocktail database API and a food database API. With just a swipe of your finger, you'll unlock a treasure trove of enchanting drink recipes and unique food recipes that will make your taste buds dance and your friends jump for joy. Get ready to shake up your mixology game, one awesome cocktail or one awesome dish at a time, or maybe both, and let the laughter and contentment take over!
      </h4>
    </WrapperAbout>    
      {/* <SearchForm searchTerm={searchTerm} /> */}
      <div> 
        <h2 className='random-h2'>Random Meals</h2>
      <MealsList meals={meals} />
      <h2 className='random-h2'>Random Coctails</h2>
      <CocktailList drinks={drinks} />
      </div>
    </>
  );
};
export default Landing;
