/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { changeTitleOfPage, handleScrollPosition } from './functions';
import { useState, memo, useLayoutEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName[]>([{ name: 'Início' }]);
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useLayoutEffect(() => {
    handleScrollPosition(setColorHeader);
  }, []);

  return (
    <S.Wrapper color={colorHeader.color}>
      <Link to="inicio" spy={true} smooth={true}>
        <S.ImgProfile />
      </Link>
      <S.NavWrapper>
        {title.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.name}
                spy={true}
                smooth={true}
                onSetActive={() => {
                  setTitle([{ name: link.name }]);
                  changeTitleOfPage({ name: link.name });
                }}
              >
                <S.LinkMenu
                  activeLink={link.name === 'Início'}
                  onClick={() => {
                    setTitle([{ name: link.name }]);
                    changeTitleOfPage({ name: 'Início' });
                  }}
                >
                  {link.name}
                </S.LinkMenu>
              </Link>
            </li>
          );
        })}
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
