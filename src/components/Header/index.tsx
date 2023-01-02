/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import FotoProfile from 'img/profile.jpeg';
import { IColorProps } from 'interfaces/header';
import { useState, memo, useLayoutEffect } from 'react';
import { changeTitleOfPage, handleScrollPosition } from './functions';

const Header = () => {
  const [title, setTitle] = useState({ name: 'Início' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useLayoutEffect(() => {
    handleScrollPosition(setColorHeader);
  }, []);

  const Links = [
    {
      name: 'Início',
      id: 'inicio'
    },
    {
      name: 'Sobre',
      id: 'sobre'
    },
    {
      name: 'Portfólio',
      id: 'portfolio'
    },
    {
      name: 'Contato',
      id: 'contato'
    }
  ];

  return (
    <S.Wrapper color={colorHeader.color}>
      <Link to={Links[0].id} spy={true} smooth={true}>
        <S.ImgProfile src={FotoProfile} alt="Minha foto para perfil" />
      </Link>
      <S.NavWrapper>
        {Links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                onSetActive={() => {
                  setTitle({ name: link.name });
                  changeTitleOfPage(link.name);
                }}
              >
                <S.LinkText activeLink={title.name === link.name}>
                  {link.name}
                </S.LinkText>
              </Link>
            </li>
          );
        })}
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
