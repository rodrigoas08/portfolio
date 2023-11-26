/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import FotoProfile from 'assets/profile.webp';
import { ProgressiveBar } from 'components';
import { memo, useLayoutEffect } from 'react';
import { updateProgressiveBar } from './functions';
import {
  FaEnvelope,
  FaHome,
  FaIdCard,
  FaLaptopCode,
  FaList
} from 'react-icons/fa';

const Header = () => {
  useLayoutEffect(() => {
    updateProgressiveBar();
  }, []);

  const Links = [
    {
      name: 'Início',
      id: 'inicio',
      icon: <FaHome title="Início" />,
      ariaText: 'Direciona para o inicio do site'
    },
    {
      name: 'Sobre',
      id: 'sobre',
      icon: <FaIdCard title="Sobre" />,
      ariaText: 'Direciona para a área que fala sobre mim do site'
    },
    {
      name: 'Habilidades',
      id: 'habilidades',
      icon: <FaList title="Habilidades" />,
      ariaText: 'Direciona para a área que exibe habilidades do site'
    },
    {
      name: 'Projetos',
      id: 'projetos',
      icon: <FaLaptopCode title="Projetos" />,
      ariaText: 'Direciona para a área que exibe portfólios do site'
    },
    {
      name: 'Contato',
      id: 'contato',
      icon: <FaEnvelope title="Contato" />,
      ariaText: 'Direciona para a área de contato do site'
    }
  ];

  return (
    <S.Wrapper>
      <ProgressiveBar />
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
          alt="Minha foto para perfil"
        />
      </Link>
      <S.NavWrapper>
        {Links.map((link) => {
          return (
            <S.Li key={crypto.randomUUID()}>
              <Link
                href={link.id}
                aria-label={link.ariaText}
                to={link.id}
                spy={true}
                smooth={true}
              >
                {link.icon}
                <p>{link.name}</p>
              </Link>
            </S.Li>
          );
        })}
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
