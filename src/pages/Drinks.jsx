import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchFormDrinks from "../components/SearchFormDrinks";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";


const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "gin"],
    queryFn: async () => {
      // searchTerm = searchTerm || 'a'; 
      searchTerm = searchTerm || 'gin';        
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// ?search=all
// loader po prostu zwraca wyszukiwany termin.
export const loader = (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    
    const searchTerm = url.searchParams.get("search") || "";
    // const searchTerm = url.searchParams.get("search") || "all";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // return { searchTerm }  || "all";
    return { searchTerm };
  };

const Drinks = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchFormDrinks searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Drinks;
