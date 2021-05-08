import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
const NewDisney = () => {
  const setOriginal = useSelector(selectNewDisney);
  return (
    <Containers>
      <h2>New to Disney plus</h2>
      <Content>
        {setOriginal &&
          setOriginal.map((action, key) => (
            <Wrap key={key}>
              {action.id}
              <Link to={"/detail/" + action.id}>
                <img src={action.cardImg} alt={action.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Containers>
  );
};
const Containers = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid: 25px;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.2%;
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms;
  border: 3px solid rgb(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default NewDisney;
