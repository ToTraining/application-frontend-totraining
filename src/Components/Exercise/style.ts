import styled from "styled-components";

export const ContainerWorkout = styled.li`
    width: 95%;
    height: 5rem;
    background-color: white;
    border-radius: 8px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 2rem;
    padding-left: 0.6rem;

    button{
        appearance: none;
        border: none;
        background-color: transparent;
    }

    h4{
        margin: 0;
        height: 1.6rem;
    }

    p{
        font-size: small;
    }
`

export const ContainerInfoWorkout = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    width: 70%;
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.7rem;
    height: 100%;
`
export const ButtonDelet = styled.button`
    svg{
        color: #EE7373;
    }
`