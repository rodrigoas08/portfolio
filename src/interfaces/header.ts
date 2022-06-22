export interface ITitleName {
  name: TitleName;
}[];

export type TitleName = 'HOME' | 'SOBRE' | 'SERVIÇOS' | 'CONTATO';

export interface IColorProps {
  color: ColorProps;
}

export type ColorProps = 'black' | 'transparent';
