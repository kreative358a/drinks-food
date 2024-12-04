import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 4rem;
  color: var(--textColor);
  
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    /* background: var(--backgroundColor); */
    border: 1px solid var(--grey-500);
  }

  .form:hover {
    box-shadow: var(--boxShadow);
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: var(--textColor);
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default Wrapper;
