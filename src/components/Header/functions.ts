import { ITitleName } from 'interfaces/header';

export function changeTitleOfPage(title: ITitleName) {
  document.title = `${title.title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;
}

//function to change style of header when scrolling
export function scrollPosition(setColorHeader: any) {
  document.addEventListener('scroll', function () {
    const targetPosition = 280;
    const position = window.scrollY;
    position >= targetPosition
      ? setColorHeader({ color: 'black' })
      : setColorHeader({ color: 'transparent' });
  });
  return () => {
    /*eslint-disable-next-line*/
    document.removeEventListener('scroll', function () {});
  };
}
