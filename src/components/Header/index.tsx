/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { Button } from 'components';
import { useState, memo, useEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';
import { changeTitleOfPage, scrollPosition } from './functions';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName>({ title: 'HOME' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useEffect(() => {
    changeTitleOfPage(title);
    scrollPosition(setColorHeader);
  }, [title]);

  return (
    <S.Wrapper id="header" color={colorHeader.color}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        onClick={() => setTitle({ title: 'HOME' })}
      >
        <S.ImgLogo />
      </Link>
      <S.NavWrapper>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ title: 'SOBRE' })}
        >
          <Button navMenuHeader>Sobre</Button>
        </Link>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ title: 'SERVIÇOS' })}
        >
          <Button navMenuHeader>Serviços</Button>
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ title: 'CONTATO' })}
        >
          <Button navMenuHeader>Contato</Button>
        </Link>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
