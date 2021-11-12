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
];