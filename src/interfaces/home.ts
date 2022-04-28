export interface ITitleName {
  title: TitleName;
}[];

export type TitleName = 'HOME' | 'SOBRE' | 'SERVIÇOS' | 'CONTATO';

export interface IColorProps {
  color: ColorProps;
}

export type ColorProps = 'black' | 'transparent';
