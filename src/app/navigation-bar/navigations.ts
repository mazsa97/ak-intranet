// Telephone extensions 

// Extensions interface
export interface Navigations {
  name: string;
  path: string;
  icon: string;
  order: number;
}

// Extensions array
export const NAVIGATIONS: Navigations[] = [
  { 
  name: 'Főoldal',
  path: '',
  icon: 'fa fa-lg fa-home',
  order: 1
  },
  { 
  name: 'Linkek',
  path: 'websites',
  icon: 'fa fa-lg fa-link',
  order: 2
  },
  { 
  name: 'Mellékek',
  path: 'extensions',
  icon: 'fa fa-lg fa-phone',
  order: 3
  },
  { 
  name: 'Naptár',
  path: 'calendar',
  icon: 'fa fa-lg fa-calendar',
  order: 4
  },
  { 
  name: 'Státusz',
  path: 'status',
  icon: 'fa fa-lg fa-signal',
  order: 5
  },
];

// Sort array by nr.
NAVIGATIONS.sort(CompareOrder);

// Function for comparing orders
function CompareOrder(a: any, b: any) {
  if ( a.order < b.order ){
    return -1;
  }
  if ( a.order > b.order ){
    return 1;
  }
  return 0;
}