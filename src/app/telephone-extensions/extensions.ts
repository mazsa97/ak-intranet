// Telephone extensions 

export interface Extensions {
  name: string;
  number: number;
}

export const EXTENSIONS: Extensions[] = [
  { 
    name: 'Rendelő 1',
    number: 201
  },
  { 
    name: 'Rendelő 2',
    number: 202
  },
  { 
    name: 'Rendelő 3',
    number: 203
  },
  { 
    name: 'Rendelő 4',
    number: 204
  },
  { 
    name: 'Rendelő 5',
    number: 205
  },
  { 
    name: 'Rendelő 6',
    number: 206
  },
  { 
    name: 'Rendelő 7',
    number: 207
  },
  { 
    name: 'Rendelő 8',
    number: 208
  },
  { 
    name: 'Rendelő 9',
    number: 209
  },
  { 
    name: 'Rendelő 11',
    number: 211
  },
  { 
    name: 'Rendelő 12',
    number: 212
  },
  { 
    name: 'Rendelő 13',
    number: 213
  },
  { 
    name: 'Recepció Csoport',
    number: 300
  },
  { 
    name: 'Recepció 1',
    number: 220
  },
  { 
    name: 'Recepció 2',
    number: 221
  },
  { 
    name: 'Kis Recepció Csoport',
    number: 301
  },
  { 
    name: 'Kis Recepció 1',
    number: 222
  },
  { 
    name: 'Kis Recepció 2',
    number: 223
  },
  { 
    name: 'Labor',
    number: 230
  },
  { 
    name: 'Call Center Csoport',
    number: 240
  },
  { 
    name: 'Call Center 1',
    number: 240
  },
  { 
    name: 'Call Center 2',
    number: 241
  },
  { 
    name: 'Call Center 3',
    number: 242
  },
  { 
    name: 'Call Center 4',
    number: 243
  },
  { 
    name: 'Titkárság Csoport',
    number: 310
  },
  { 
    name: 'Titkárság',
    number: 250
  },
  { 
    name: 'Titkárság 2',
    number: 251
  },
  { 
    name: 'Halász-Gyurik Tímea Csoport',
    number: 311
  },
  { 
    name: 'Halász-Gyurik Tímea Iroda',
    number: 255
  },
  { 
    name: 'Halász-Gyurik Tímea Mobil',
    number: 256
  },
  { 
    name: 'Dr. Palotás Zoltán Csoport',
    number: 312
  },
  { 
    name: 'Dr. Palotás Zoltán Iroda',
    number: 257
  },
  { 
    name: 'Dr. Palotás Zoltán Mobil',
    number: 258
  },
  { 
    name: 'IT csoport',
    number: 320
  },
  { 
    name: 'IT',
    number: 261
  },
  { 
    name: 'Fődi Eliza Iroda',
    number: 261
  },
  { 
    name: 'Dobó László Csoport',
    number: 321
  },
  { 
    name: 'Dobó László Iroda',
    number: 265
  },
  { 
    name: 'Dobó László MacBook',
    number: 266
  },
  { 
    name: 'Dobó László Mobil',
    number: 267
  },
  { 
    name: 'Lakás Nappali',
    number: 290
  },
  { 
    name: 'Lakás Konyha',
    number: 291
  }
];

// Sort array by nr.
EXTENSIONS.sort(compareNames);

// Function for comparing numbers
function compareNames(a: any, b: any) {
  if ( a.number < b.number ){
    return -1;
  }
  if ( a.number > b.number ){
    return 1;
  }
  return 0;
}