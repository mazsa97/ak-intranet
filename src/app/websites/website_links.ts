// Website link objects

export interface Links {
  name: string;
  category: string;
  url: string;
  image: string;
}

export const LINKS: Links[] = [
  { 
    name: 'E-rendelő', 
    category: 'reception, administration, management, callcenter, it', 
    url: 'https://lddsystems.eu/rendelo/', 
    image: 'assets/images/thumbnails/e_rendelo.png' 
  },
  { 
    name: 'ERP', 
    category: 'reception, administration, callcenter, it', 
    url: 'http://erp.lddsystems.eu/web/login', 
    image: 'assets/images/thumbnails/erp.png' 
  },
  { 
    name: 'Slack', 
    category: 'reception', 
    url: 'http://aranyklinika.slack.com', 
    image: 'assets/images/thumbnails/slack.jpg' 
  },
  { 
    name: 'Beosztás', 
    category: 'reception', 
    url: 'https://tinyurl.com/ak-beosztas', 
    image: 'assets/images/thumbnails/beosztas.png' 
  },
  { 
    name: 'Aranyklinika', 
    category: 'reception, callcenter', 
    url: 'https://aranyklinika.hu/', 
    image: 'assets/images/thumbnails/aranyklinika.png' 
  },
  { 
    name: 'Komplexlabor', 
    category: 'reception, callcenter', 
    url: 'https://komplexlabor.hu/', 
    image: 'assets/images/thumbnails/komplexlabor.png' 
  },
  { 
    name: 'GitHub', 
    category: 'administration, management, it', 
    url: 'https://github.com/aranyklinika', 
    image: 'assets/images/thumbnails/github.png' 
  },
  { 
    name: 'IP Portál', 
    category: 'administration', 
    url: 'https://aranyklinika.ip-telefon.hu/ipportal/', 
    image: 'assets/images/thumbnails/ip_portal.png' 
  },
  { 
    name: 'Rextra', 
    category: 'administration', 
    url: 'https://rextra.hu/', 
    image: 'assets/images/thumbnails/rextra.png' 
  },
  { 
    name: 'Fordító', 
    category: 'administration, callcenter', 
    url: 'https://translate.google.com/', 
    image: 'assets/images/thumbnails/fordito.png' 
  },
  { 
    name: 'Paracelsus Humán Medicina', 
    category: 'administration', 
    url: 'https://www.paracelsusmedicina.hu/', 
    image: 'assets/images/thumbnails/paracelus.png' 
  },
  { 
    name: 'Simple Pay', 
    category: 'administration, management', 
    url: 'https://simplepay.hu/', 
    image: 'assets/images/thumbnails/simplepay.png' 
  },
  { 
    name: 'NAV', 
    category: 'administration', 
    url: 'https://www.nav.gov.hu/', 
    image: 'assets/images/thumbnails/nav.png' 
  },
  { 
    name: 'Számlázz', 
    category: 'administration, management', 
    url: 'https://www.szamlazz.hu/', 
    image: 'assets/images/thumbnails/szamlazz.png' 
  },
  { 
    name: 'YNAB', 
    category: 'administration, management', 
    url: 'https://www.youneedabudget.com', 
    image: 'assets/images/thumbnails/ynab.png' 
  },
  { 
    name: 'ÁNTSZ', 
    category: 'management', 
    url: 'https://www.antsz.hu/', 
    image: 'assets/images/thumbnails/antsz.png' 
  },
  { 
    name: 'MEDITOR', 
    category: 'callcenter', 
    url: 'http://www.kopifo.hu/', 
    image: 'assets/images/thumbnails/meditor.png' 
  },
  { 
    name: 'GMAIL', 
    category: 'callcenter, it, management, reception, administration', 
    url: 'https://mail.google.com/', 
    image: 'assets/images/thumbnails/gmail.png' 
  },
  { 
    name: 'LastPass', 
    category: 'it', 
    url: 'https://www.lastpass.com/', 
    image: 'assets/images/thumbnails/lastpass.png' 
  },
  { 
    name: 'Státusz', 
    category: 'it', 
    url: 'https://status.aranyklinika.hu/', 
    image: 'assets/images/thumbnails/statusz.png' 
  },
];

// Sorting the LINKS array
LINKS.sort(compareNames);

// Function for comparing names
function compareNames(a: any, b: any) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}