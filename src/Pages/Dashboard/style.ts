import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    background-color: rgb(20, 20, 20);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 5px;

    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
    margin-bottom: 80px;
  }
  header img {
    margin-left: 5em;
    width: 60px;
    height: 50px;
  }
  header figure {
    background-color: red;
    border-radius: 50px;
    border: solid black;

    display: flex;
    align-items: center;

    width: 70px;
    height: 70px;

    margin-right: 5em;
  }

  header figure img {
    border-radius: 50px;
    margin: 0;
    width: auto;
    height: auto;
  }

  main {
    width: 90%;
  }
`;

export const MainHeader = styled.div`
  width: 100%;
  background-color: rgb(20, 20, 20);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-bottom: solid rgba(0, 0, 0, 0.2) 2px;

  h2 {
    font-size: 32px;
    color: white;
  }
`;

export const containerApp = styled.div`
  /* width: ; */
`;
