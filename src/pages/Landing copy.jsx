import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";

// // ?search=all
// // without React Query
// export const loader_ = async ({ request }) => {
//   const url = new URL(request.url);
//   // const searchTerm = url.searchParams.get('search') || '';
//   const searchTerm = url.searchParams.get("search") || "all";
//   const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
//   return { drinks: response.data.drinks, searchTerm };
// };

// // without React Query
// const Landing = () => {
//   const { drinks, searchTerm } = useLoaderData();
//   const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

//   return (
//     <>
//       <SearchForm searchTerm={searchTerm} />
//       <CocktailList drinks={drinks} />
//     </>
//   );
// };
// export default Landing;

// with React Query
// Mamy funkcję z dwóch powodów.
// Po pierwsze, ponieważ przeanalizujemy termin wyszukiwania
// Po drugie, ponieważ będziemy go wywoływać w wielu miejscach.
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      // searchTerm = searchTerm || 'a';
      searchTerm = searchTerm || "all";
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// ?search=all
// loader po prostu zwraca wyszukiwany termin.
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";
    // const searchTerm = url.searchParams.get("search") || "all";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm } || "all";
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
