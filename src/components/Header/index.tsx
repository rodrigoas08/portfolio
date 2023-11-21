/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import FotoProfile from 'assets/profile.webp';
import { ProgressiveBar } from 'components';
import { IColorProps } from 'interfaces/header';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, memo, useLayoutEffect, useEffect } from 'react';
import { handleScrollPosition, updateProgressiveBar } from './functions';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useEffect(() => {
    if (menuIsOpen) setMenuIsOpen(false);

    const handleEsc = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setMenuIsOpen(false);
    };
    document.addEventListener('keyup', handleEsc);

    return () => document.removeEventListener('keyup', handleEsc);
  }, []);

  useLayoutEffect(() => {
    handleScrollPosition(setColorHeader);
    updateProgressiveBar();
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
      name: 'Projetos',
      id: 'projetos',
      ariaText: 'Direciona para a área que exibe portfólios do site'
    },
    {
      name: 'Contato',
      id: 'contato',
      ariaText: 'Direciona para a área de contato do site'
    }
  ];

  return (
    <S.Wrapper isOpen={menuIsOpen} color={colorHeader.color}>
      <Link
        href={Links[0].id}
        aria-label={Links[0].ariaText}
        to={Links[0].id}
        spy={true}
        smooth={true}
      >
        <S.ImgProfile
          loading="lazy"
          src={FotoProfile}
          isOpen={menuIsOpen}
          alt="Minha foto para perfil"
        />
      </Link>
      <S.NavWrapper isOpen={menuIsOpen}>
        {Links.map((link) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link
                href={link.id}
                aria-label={link.ariaText}
                to={link.id}
                spy={true}
                smooth={true}
              >
                <S.LinkText
                  isOpen={menuIsOpen}
                  onClick={() => {
                    setMenuIsOpen(false);
                  }}
                >
                  {link.name}
                </S.LinkText>
              </Link>
            </li>
          );
        })}
      </S.NavWrapper>
      {menuIsOpen ? (
        <FaTimes size={25} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      ) : (
        <FaBars size={25} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      )}
      <ProgressiveBar />
    </S.Wrapper>
  );
};

export default memo(Header);
