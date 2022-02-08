// Telephone extensions 

// Extensions interface
export interface Extensions {
  name: string;
  extension: number;
}

// Extensions array
export const EXTENSIONS: Extensions[] = [
  { 
    name: 'Rendelő 1',
    extension: 201
  },
  { 
    name: 'Rendelő 2',
    extension: 202
  },
  { 
    name: 'Rendelő 3',
    extension: 203
  },
  { 
    name: 'Rendelő 4',
    extension: 204
  },
  { 
    name: 'Rendelő 5',
    extension: 205
  },
  { 
    name: 'Rendelő 6',
    extension: 206
  },
  { 
    name: 'Rendelő 7',
    extension: 207
  },
  { 
    name: 'Rendelő 8',
    extension: 208
  },
  { 
    name: 'Rendelő 9',
    extension: 209
  },
  { 
    name: 'Rendelő 11',
    extension: 211
  },
  { 
    name: 'Rendelő 12',
    extension: 212
  },
  { 
    name: 'Rendelő 13',
    extension: 213
  },
  { 
    name: 'Recepció Csoport',
    extension: 300
  },
  { 
    name: 'Recepció 1',
    extension: 220
  },
  { 
    name: 'Recepció 2',
    extension: 221
  },
  { 
    name: 'Kis Recepció Csoport',
    extension: 301
  },
  { 
    name: 'Kis Recepció 1',
    extension: 222
  },
  { 
    name: 'Kis Recepció 2',
    extension: 223
  },
  { 
    name: 'Labor',
    extension: 230
  },
  { 
    name: 'Call Center Csoport',
    extension: 240
  },
  { 
    name: 'Call Center 1',
    extension: 240
  },
  { 
    name: 'Call Center 2',
    extension: 241
  },
  { 
    name: 'Call Center 3',
    extension: 242
  },
  { 
    name: 'Call Center 4',
    extension: 243
  },
  { 
    name: 'Titkárság Csoport',
    extension: 310
  },
  { 
    name: 'Titkárság',
    extension: 250
  },
  { 
    name: 'Titkárság 2',
    extension: 251
  },
  { 
    name: 'Halász-Gyurik Tímea Csoport',
    extension: 311
  },
  { 
    name: 'Halász-Gyurik Tímea Iroda',
    extension: 255
  },
  { 
    name: 'Halász-Gyurik Tímea Mobil',
    extension: 256
  },
  { 
    name: 'Dr. Palotás Zoltán Csoport',
    extension: 312
  },
  { 
    name: 'Dr. Palotás Zoltán Iroda',
    extension: 257
  },
  { 
    name: 'Dr. Palotás Zoltán Mobil',
    extension: 258
  },
  { 
    name: 'IT csoport',
    extension: 320
  },
  { 
    name: 'IT',
    extension: 261
  },
  { 
    name: 'Fődi Eliza Iroda',
    extension: 261
  },
  { 
    name: 'Dobó László Csoport',
    extension: 321
  },
  { 
    name: 'Dobó László Iroda',
    extension: 265
  },
  { 
    name: 'Dobó László MacBook',
    extension: 266
  },
  { 
    name: 'Dobó László Mobil',
    extension: 267
  },
  { 
    name: 'Lakás Nappali',
    extension: 290
  },
  { 
    name: 'Lakás Konyha',
    extension: 291
  }
];

// Sort array by nr.
EXTENSIONS.sort(compareExtensions);

// Function for comparing extension numbers
function compareExtensions(a: Extensions, b: Extensions) {
  if ( a.extension < b.extension ){
    return -1;
  }
  if ( a.extension > b.extension ){
    return 1;
  }
  return 0;
}