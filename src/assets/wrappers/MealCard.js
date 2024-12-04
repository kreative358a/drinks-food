import styled from "styled-components";
const Wrapper = styled.article`
  /* background: var(--backgroundColor);
  color: var(--textColor);
  transition: var(--darkModeTransition); */
  transition: var(--transition); 
  box-shadow: var(--shadow-2);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  border: 1px solid var(--grey-500);
  max-width: 420px;
  :hover {
    box-shadow: var(--boxShadow);
  }
  img {
    height: auto;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    border-bottom: 1px solid var(--grey-600);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }

  @media (max-width: 774px) {
    /* width: 480px;
    max-width: 90%; */
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    max-width: 90%;
  }
`;

export default Wrapper;
