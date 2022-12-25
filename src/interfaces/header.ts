export interface ITitleName {
  name: TitleName;
}[];

export type TitleName = 'Início' | 'Sobre' | 'Serviços' | 'Contato';

export interface IColorProps {
  color: ColorProps;
}

export type ColorProps = 'black' | 'transparent';
