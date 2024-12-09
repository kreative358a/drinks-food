import styled from 'styled-components';

const Wrapper = styled.div`
.wrapper {
  margin-top: 2rem;
  margin-bottom: 40px;
}
  p {
    line-height: 2;
    color: var(--grey-500);
    color: var(--textColor);
    margin-top: 2rem;
  }
  .about_h3 {
    text-align: center;
    font-size: 2.4rem;
    text-transform: none;
    font-weight: bold;
    margin-bottom: 0rem;
    background: linear-gradient(
    to right,
    rgb(121, 83, 205) 20%,
    rgb(20, 175, 50) 30%,
    rgb(1, 144, 205) 70%,
    rgb(218, 74, 118) 80%
  );       
    -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-fill-color: transparent; */
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate-reverse;      
  }

  .about_h4 {
    text-align: justify;
    font-size: 2rem;
    text-transform: none;
    background: linear-gradient(
    to right,
    rgb(121, 83, 205) 20%,
    rgb(20, 175, 50) 30%,
    rgb(1, 144, 205) 70%,
    rgb(218, 74, 118) 80%
  );   
 
  padding: 2rem;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-fill-color: transparent; */
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;  
  }

  @media (max-width: 1024px) {
    .about_h3 {
      font-size: 2rem;
    }    
    .about_h4 {
    font-size: 1.8rem;
  }
}  

  @media (max-width: 774px) {
    .about_h3 {
      font-size: 1.6rem;
    }        
    .about_h4 {
    font-size: 1.4rem;
    padding: 1rem;
  }
  }  


  @keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
`;

export default Wrapper;
