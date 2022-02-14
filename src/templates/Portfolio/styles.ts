import styled from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 180px);
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  border: 1px solid white;

  > h1 {
    background-color: red;
  }
`;

export const Polaroid = styled.div`
  left: 40rem;
  width: 200px;
  position: relative;
  margin-bottom: 25px;
  background-color: white;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Container = styled.div`
  text-align: center;
  padding: 10px 20px;
  border: 1px solid white;

  > p {
    color: black;
  }
`;
