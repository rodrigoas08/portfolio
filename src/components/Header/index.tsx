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
      icon: <FaHome title="Início" />
    },
    {
      name: 'Sobre',
      id: 'sobre',
      icon: <FaIdCard title="Sobre" />
    },
    {
      name: 'Habilidades',
      id: 'habilidades',
      icon: <FaList title="Habilidades" />
    },
    {
      name: 'Projetos',
      id: 'projetos',
      icon: <FaLaptopCode title="Projetos" />
    },
    {
      name: 'Contato',
      id: 'contato',
      icon: <FaEnvelope title="Contato" />
    }
  ];

  return (
    <S.Wrapper>
      <ProgressiveBar />
      <Link href={Links[0].id} to={Links[0].id} spy={true} smooth={true}>
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
                role="link"
                href={link.id}
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
