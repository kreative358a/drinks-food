import { useLoaderData } from "react-router-dom";
import axios from "axios";
import MealsList from "../components/MealsList";
import SearchFormMeals from "../components/SearchFormMeals";
const mealSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";


const searchMealsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "chicken"],
    queryFn: async () => {
      // searchTerm = searchTerm || 'a'; 
      searchTerm = searchTerm || 'chicken';        
      const response = await axios.get(`${mealSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

// ?search=all
// loader po prostu zwraca wyszukiwany termin.
export const loader = (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    
    const searchTerm = url.searchParams.get("search") || "chicken";
    // const searchTerm = url.searchParams.get("search") || "all";
    await queryClient.ensureQueryData(searchMealsQuery(searchTerm));
    // return { searchTerm }  || "all";
    return { searchTerm };
  };

const Meals = () => {
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchMealsQuery(searchTerm));

  return (
    <>
      <SearchFormMeals searchTerm={searchTerm} />
      <MealsList meals={meals} />
    </>
  );
};
export default Meals;
