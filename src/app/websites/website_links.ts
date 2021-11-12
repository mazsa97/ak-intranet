export interface Links {
  name: string;
  category: string;
  url: string;
  image: string;
}

export const LINKS: Links[] = [
  { 
    name: 'E-rendelő', 
    category: 'reception', 
    url: 'https://lddsystems.eu/rendelo/', 
    image: 'e_rendelo.png' 
  },
  { 
    name: 'ERP', 
    category: 'reception', 
    url: 'http://erp.lddsystems.eu/web/login', 
    image: 'erp.png' 
  },
  { 
    name: 'Slack', 
    category: 'reception', 
    url: 'http://aranyklinika.slack.com', 
    image: 'slack.jpg' 
  },
  { 
    name: 'Beosztás', 
    category: 'reception', 
    url: 'https://docs.google.com/spreadsheets/d/1ATxiMKIhZFsU8usnHZ8wEDmCk9UTBh3Hwn_ZM21s-Fo/edit#gid=1583717264', 
    image: 'beosztas.png' 
  },
  { 
    name: 'Aranyklinika', 
    category: 'reception', 
    url: 'https://aranyklinika.hu/', 
    image: 'aranyklinika.png' 
  },
  { 
    name: 'Komplexlabor', 
    category: 'reception', 
    url: 'https://komplexlabor.hu/', 
    image: 'komplexlabor.png' 
  },
  { 
    name: 'GitHub', 
    category: 'administration', 
    url: 'https://github.com/aranyklinika', 
    image: 'github.png' 
  },
  { 
    name: 'IP Portál', 
    category: 'administration', 
    url: 'https://aranyklinika.ip-telefon.hu/ipportal/', 
    image: 'ip_portal.png' 
  },
  { 
    name: 'Rextra', 
    category: 'administration', 
    url: 'https://rextra.hu/', 
    image: 'rextra.png' 
  },
  { 
    name: 'Fordító', 
    category: 'administration', 
    url: 'https://translate.google.com/', 
    image: 'fordito.png' 
  },
];