import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/MealCard";
import { nanoid } from "nanoid";
const MealCard = ({ image, name, id, category, area }) => {
  // Returns the context (if provided) for the child route at this level of the route hierarchy.
  // const data = useOutletContext();
  // console.log(data);
  return (
    <Wrapper className='wrapper' >
      <div className="img-container" >
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{area}</h5>
        <p>{category}</p>
        <Link to={`/meal/${id}`} className="btn">
          details meal
        </Link>
      </div>
    </Wrapper>
  );
};
export default MealCard;
