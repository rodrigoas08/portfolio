import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  position: relative;
  height: calc(100vh - 180px);
  grid-template-columns: 0.4fr 1fr;
`;

export const Profile = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${({ theme }) => theme.spacings.large};

  > ul > li {
    font-size: 1.9rem;
    list-style: none;
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.font.family.josefin};

    :last-child {
      margin-bottom: 2rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageProfile = styled.div`
  width: 13rem;
  height: 13rem;
  cursor: pointer;
  animation: inherit;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${process.env.PUBLIC_URL}/img/eu.jpg);
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  align-self: center;
  margin-bottom: 1rem;
  letter-spacing: 0.5rem;
  text-transform: capitalize;

  :first-letter {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Paragraph = styled.p`
  font-size: 1.9rem;
  line-height: 2.4rem;
  font-family: ${({ theme }) => theme.font.family.josefin};
`;

export const Experience = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: ${({ theme }) => theme.spacings.large};

  > ul > li {
    font-size: 1.9rem;
    list-style: none;
    margin: 2.5rem 0;
    font-family: ${({ theme }) => theme.font.family.josefin};

    > a {
        text-decoration: none;
        color: white;
      }

    :last-child {
      padding-bottom: 2rem;

      
    }
  }
`;
