import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
  Drinks,
  Drink,
  Meal,
  Meals
} from './pages';

import { loaderDrinks as landingLoaderDrinks } from './pages/Landing';
import { loaderMeals as landingLoaderMeals } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { loader as drinksLoader } from './pages/Drinks';
import { loader as singleDrinkLoader } from './pages/Drink';
import { loader as mealsLoader } from './pages/Meals';
import { loader as singleMealLoader } from './pages/Meal';
import { action as newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
// /?search=all
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // path: '?search=all',
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoaderDrinks(queryClient) && landingLoaderMeals(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "drinks",
        errorElement: <SinglePageError />,
        loader: drinksLoader(queryClient),
        element: <Drinks/>,
      },        
      {
        path: "drink/:id",
        errorElement: <SinglePageError />,
        loader: singleDrinkLoader(queryClient),
        element: <Drink />,
      },          
      {
        path: "meals",
        errorElement: <SinglePageError />,
        loader: mealsLoader(queryClient),
        element: <Meals/>,
      },        
      {
        path: "meal/:id",
        errorElement: <SinglePageError />,
        loader: singleMealLoader(queryClient),
        element: <Meal />,
      },      
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Navigate replace to="/" /> 
      }      
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;