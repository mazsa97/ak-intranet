// Telephone extensions 

// Extensions interface
export interface Helpers {
  id: string,
  title: string,
  content: string
}

// Extensions array
export const HELPERS: Helpers[] = [
  {
    id: '1',
    title: 'Linkek',
    content: `Az aranyklinika alkalmazottainak hasznos weboldalak elérhetőségei, 
    kategóriákba sorolva, keresési és szűrési lehetőségekkel.`
  },
  {
    id: '2',
    title: 'Mellékek',
    content: `A klinikán belült használt telefonos mellékek táblázatba szedve, 
    melyek között lehetőség van keresésre.`
  },
  {
    id: '3',
    title: 'Naptár',
    content: `Egy egyszerű naptár amelyet gyorsan el lehet érni minden oldalról. Lehetőség van a hónapok között előre/hátra lépni.`
  },
  {
    id: '4',
    title: 'Képernyőzár',
    content: `3 perc inaktivitás után a képernyő automatikusan zárolásra kerül addig, ameddig a felhasználó nem nyom meg egy gombot, vagy mozgatja meg a kurzort a képernyőn.`
  },
  {
    id: '5',
    title: 'Telepítés (PWA)',
    content: `Az alkalmazásnál lehetőség van annak telepítésére. Erre mind számítógépen, mind telefonon/tableten lehetőség van a megfelelő felugró ablak segítségével.`
  },
];

// Sort array by nr.
HELPERS.sort(CompareOrder);

// Function for comparing orders
function CompareOrder(a: any, b: any) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}