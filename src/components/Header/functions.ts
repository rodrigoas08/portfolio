import { ITitleName, IColorProps } from 'interfaces/header';

export function changeTitleOfPage(title: ITitleName) {
  document.title = `${title.name} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;
}

export function scrollPosition(setColorHeader: (type: IColorProps) => void) {
  document.addEventListener('scroll', () => {
    const targetPosition = 280;
    const position = window.scrollY;
    console.log(position);
    position >= targetPosition
      ? setColorHeader({ color: 'black' })
      : setColorHeader({ color: 'transparent' });
  });
  return () => {
    /*eslint-disable-next-line*/
    document.removeEventListener('scroll', () => {});
  };
}
