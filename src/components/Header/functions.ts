import { ITitleName } from 'interfaces/header';

export function changeTitleOfPage(title: ITitleName) {
  document.title = `${title.title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;
}

//function to change style of header when scrolling
export function scrollPosition(setColorHeader: any) {
  document.addEventListener('scroll', function () {
    const position = window.scrollY;
    position >= 280
      ? setColorHeader({ color: 'black' })
      : setColorHeader({ color: 'transparent' });
    console.log(position);
  });
  return () => {
    /*eslint-disable-next-line*/
    document.removeEventListener('scroll', function () {});
  };
}
