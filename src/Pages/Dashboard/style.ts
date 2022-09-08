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

  p {
    color: black;
    font-size: large;
    font-weight: 700;
  }

  @media (min-width: 400px) {
    p {
      width: 15rem;
      font-size: 20px;
    }
  }

  @media (min-width: 760px) {
    height: 6rem;

    p {
      width: 20rem;
      font-size: 20px;
    }
  }

  @media (min-width: 760px) {
    p {
      width: 70%;
      font-size: 28px;
    }
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardsContainer = styled.div`
  gap: 15px;
  display: -webkit-box;
  flex-direction: row;
  overflow-x: scroll;
  width: 90%;
  margin: 0;
  margin-top: 20px;

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
