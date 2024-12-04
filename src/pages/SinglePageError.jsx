import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  // return <h2>{error.message}</h2>;
  return (
    <>
      <h2>there was an error:</h2>
      <h6 style={{ textTransform: "none" }}>{error.message}</h6>
    </>
  );
};
export default SinglePageError;
