import styled from 'styled-components';

export const BoxShadow = styled.div`
  inset: 0;
  z-index: 2;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BoxModal = styled.div`
  width: 40rem;
  height: 40rem;
  overflow: scroll;
  box-sizing: border-box;
  background-color: red;
`;
