import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edfafd;

  header {
    width: 100%;
    background-color: rgb(20, 20, 20);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 4em;
    padding-right: 4em;

    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
    margin-bottom: 5px;
  }
  header img {
    margin-left: 1em;
    width: 60px;
    height: 50px;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 500px) {
    header figure {
      margin-right: 0;
    }
    header img {
      margin-left: 0;
    }
  }
`;

export const MainHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  padding-left: 5%;
  padding-right: 5%;

  border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  h2 {
    font-size: 1rem;
    color: black;
    font-weight: bold;

    margin-bottom: 0;
  }
  @media (min-width: 500px) {
    h2 {
      font-size: 1rem;
      color: black;
      font-weight: boldw;

      margin-bottom: 0;
    }
  }
`;

export const CardsContainer = styled.div`
  gap: 15px;
  display: -webkit-box;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-color: #0077b6;
  width: 90%;
  margin: 0;
  margin-top: 20px;
  height: 70vh;

  display: flex;
  justify-content: space-between;

  ul {
    display: flex;

    width: 500px;
    background-color: #0077b6;
    border-radius: 8px;
    margin-bottom: 5px;
    color: white;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
