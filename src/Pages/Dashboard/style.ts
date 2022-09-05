import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
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

    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
    margin-bottom: 5px;
  }
  header img {
    margin-left: 1em;
    width: 60px;
    height: 50px;
  }
  header figure {
    background-color: grey;
    border-radius: 50px;
    border: solid black;

    display: flex;
    align-items: center;

    width: 70px;
    height: 70px;

    margin-right: 1em;
    cursor: pointer;
  }

  header figure img {
    border-radius: 50px;
    margin: 0;
    width: auto;
    height: auto;
    cursor: pointer;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 500px) {
    header figure {
      margin-right: 3em;
    }
    header img {
      margin-left: 4em;
    }
  }
`;

export const MainHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-bottom: solid rgba(0, 0, 0, 0.2) 2px;

  h2 {
    font-size: 1rem;
    color: black;
    font-weight: boldw;
    margin-left: 1rem;
    margin-bottom: 0;
  }
  @media (min-width: 500px) {
    h2 {
      font-size: 1rem;
      color: black;
      font-weight: boldw;
      margin-left: 4rem;
      margin-bottom: 0;
    }
  }
`;

export const containerApp = styled.div`
  /* width: ; */
`;
