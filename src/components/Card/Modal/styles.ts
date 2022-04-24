import styled, { css } from 'styled-components';

export const BoxShadow = styled.div`
  inset: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BoxModal = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: red;
`;
