import { IColorProps } from 'interfaces/header';

export function changeTitleOfPage(title: string) {
  document.title = `${title} | Rodrigo Sobral Desenvolvedor Front end`;
}

export function handleScrollPosition(
  setColorHeader: (type: IColorProps) => void
) {
  document.addEventListener('scroll', () => {
    const targetPosition = 60;
    const position = window.scrollY;
    position >= targetPosition
      ? setColorHeader({ color: 'black' })
      : setColorHeader({ color: 'transparent' });
  });
  return () => {
    /*eslint-disable-next-line*/
    document.removeEventListener('scroll', () => {});
  };
}
