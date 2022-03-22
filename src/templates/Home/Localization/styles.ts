import styled from 'styled-components';
import { Location } from '@styled-icons/ionicons-outline/Location';
import { LogoWhatsapp } from '@styled-icons/ionicons-solid/LogoWhatsapp';

export const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  > div {
    gap: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 15rem;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.font.bold};
  }
`;

export const Loc = styled(Location)`
  height: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Zap = styled(LogoWhatsapp)`
  height: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;
