// Website link objects

export interface Links {
  name: string;
  category: number[];
  url: string;
  image: string;
}

export interface Categories {
  id: number;
  name: string;
}

export const CATEGORIES: Categories[] = [
  {
    id: 1,
    name: 'Recepció'
  },
  {
    id: 2,
    name: 'Adminisztráció'
  },
  {
    id: 3,
    name: 'Vezetőség'
  },
  {
    id: 4,
    name: 'Call Center'
  },
  {
    id: 5,
    name: 'IT'
  },
]

export const LINKS: Links[] = [
  { 
    name: 'E-rendelő', 
    category: [1, 2, 3, 4, 5],
    url: 'https://lddsystems.eu/rendelo/', 
    image: 'assets/images/thumbnails/e_rendelo.png' 
  },
  { 
    name: 'ERP', 
    category: [1, 2, 4, 5],
    url: 'http://erp.lddsystems.eu/web/login', 
    image: 'assets/images/thumbnails/erp.png' 
  },
  { 
    name: 'Slack', 
    category: [1], 
    url: 'http://aranyklinika.slack.com', 
    image: 'assets/images/thumbnails/slack.jpg' 
  },
  { 
    name: 'Beosztás', 
    category: [1], 
    url: 'https://tinyurl.com/ak-beosztas', 
    image: 'assets/images/thumbnails/beosztas.png' 
  },
  { 
    name: 'Aranyklinika', 
    category: [1, 4],
    url: 'https://aranyklinika.hu/', 
    image: 'assets/images/thumbnails/aranyklinika.png' 
  },
  { 
    name: 'Komplexlabor', 
    category: [1, 4],
    url: 'https://komplexlabor.hu/', 
    image: 'assets/images/thumbnails/komplexlabor.png' 
  },
  { 
    name: 'GitHub', 
    category: [2, 3, 5],
    url: 'https://github.com/aranyklinika', 
    image: 'assets/images/thumbnails/github.png' 
  },
  { 
    name: 'IP Portál', 
    category: [2],
    url: 'https://aranyklinika.ip-telefon.hu/ipportal/', 
    image: 'assets/images/thumbnails/ip_portal.png' 
  },
  { 
    name: 'Rextra', 
    category: [2],
    url: 'https://rextra.hu/', 
    image: 'assets/images/thumbnails/rextra.png' 
  },
  { 
    name: 'Fordító', 
    category: [2, 4],
    url: 'https://translate.google.com/', 
    image: 'assets/images/thumbnails/fordito.png' 
  },
  { 
    name: 'Paracelsus Humán Medicina', 
    category: [2],
    url: 'https://www.paracelsusmedicina.hu/', 
    image: 'assets/images/thumbnails/paracelus.png' 
  },
  { 
    name: 'Simple Pay', 
    category: [2, 3],
    url: 'https://simplepay.hu/', 
    image: 'assets/images/thumbnails/simplepay.png' 
  },
  { 
    name: 'NAV', 
    category: [2],
    url: 'https://www.nav.gov.hu/', 
    image: 'assets/images/thumbnails/nav.png' 
  },
  { 
    name: 'Számlázz', 
    category: [2, 3],
    url: 'https://www.szamlazz.hu/', 
    image: 'assets/images/thumbnails/szamlazz.png' 
  },
  { 
    name: 'YNAB', 
    category: [2, 3],
    url: 'https://www.youneedabudget.com', 
    image: 'assets/images/thumbnails/ynab.png' 
  },
  { 
    name: 'ÁNTSZ', 
    category: [3],
    url: 'https://www.antsz.hu/', 
    image: 'assets/images/thumbnails/antsz.png' 
  },
  { 
    name: 'MEDITOR', 
    category: [4],
    url: 'http://www.kopifo.hu/', 
    image: 'assets/images/thumbnails/meditor.png' 
  },
  { 
    name: 'GMAIL', 
    category: [1, 2, 3, 4, 5],
    url: 'https://mail.google.com/', 
    image: 'assets/images/thumbnails/gmail.png' 
  },
  { 
    name: 'LastPass', 
    category: [5],
    url: 'https://www.lastpass.com/', 
    image: 'assets/images/thumbnails/lastpass.png' 
  },
  { 
    name: 'Státusz', 
    category: [5],
    url: 'https://status.aranyklinika.hu/', 
    image: 'assets/images/thumbnails/statusz.png' 
  },
];

// Sorting the LINKS and CATEGORIES array by name
LINKS.sort(compareNames);
CATEGORIES.sort(compareNames);

// Function for comparing values
function compareNames(a: any, b: any) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}
