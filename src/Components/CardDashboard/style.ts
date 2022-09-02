import styled from "styled-components";

export const CardsContainer = styled.div`
  gap: 15px;
  display: -webkit-box;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-color: #0077b6;

  ul {
    display: flex;
    justify-content: center;
    height: 400px;
    width: 200px;
    background-color: #0077b6;
    border-radius: 8px;
    margin-bottom: 5px;
    color: white;
  }
`;

// export const UlDashboard = styled.ul`

// gap: 15px;
// display: -webkit-box;
// flex-direction: row;
// overflow-x: scroll;
// scrollbar-color: #0077B6;

// margin: 0;
// padding: 0;

// .cardDashboard{
//     height: 400px;
//     width: 200px;
//     background-color: #0077B6;
//     margin-bottom: 5px;
// }

// .titleCards{
//      display: flex;
//     justify-content: center;
//     color: white;
// }

// `
