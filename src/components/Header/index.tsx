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
      id: 'inicio',
      ariaText: 'Direciona para o inicio do site'
    },
    {
      name: 'Sobre',
      id: 'sobre',
      ariaText: 'Direciona para a área que fala sobre mim do site'
    },
    {
      name: 'Habilidades',
      id: 'habilidades',
      ariaText: 'Direciona para a área que exibe habilidades do site'
    },
    {
      name: 'Portfólio',
      id: 'portfolio',
      ariaText: 'Direciona para a área que exibe portfólios do site'
    },
    {
      name: 'Contato',
      id: 'contato',
      ariaText: 'Direciona para a área de contato do site'
    }
  ];

  return (
    <S.Wrapper color={colorHeader.color}>
      <Link
        href="#"
        aria-label={Links[0].ariaText}
        to={Links[0].id}
        spy={true}
        smooth={true}
        onClick={() => {
          setTitle({ name: Links[0].name }), changeTitleOfPage(Links[0].name);
        }}
      >
        <S.ImgProfile
          loading="lazy"
          src={FotoProfile}
          alt="Minha foto para perfil"
        />
      </Link>
      <S.NavWrapper>
        {Links.map((link) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link
                href="#"
                aria-label={link.ariaText}
                to={link.id}
                spy={true}
                smooth={true}
              >
                <S.LinkText
                  onClick={() => {
                    setTitle({ name: link.name }), changeTitleOfPage(link.name);
                  }}
                  activeLink={title.name === link.name}
                >
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
