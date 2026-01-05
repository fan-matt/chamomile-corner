export function setZLevels(win: HTMLElement) {
  const windows = [...document.getElementsByClassName('window') as HTMLCollectionOf<HTMLElement>];
  const openWindows = windows.filter((w) => w.style.display === 'block');

  win.style.zIndex = '10';
  openWindows.sort((left, right) => parseInt(left.style.zIndex) - parseInt(right.style.zIndex));

  openWindows[0].style.zIndex = '3';
  for(let i = 1; i < openWindows.length; i ++) {
    openWindows[i].style.zIndex = `${i + 3}`;
  }
}