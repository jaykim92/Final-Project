const students = [
  "Arpitaben Desai",
  "Brandon Humphry",
  "Carolyn Nguyen",
  "Chikeobi Njaka",
  "Chung Yi Nicole Chai",
  "Colton Jackson",
  "Dominador de la Cruz",
  "Evan Dobalian",
  "Jay Kim",
  "Jesus Delgado teran",
  "Kenny Nguyen",
  "Kyle Boland",
  "Lauren Garelick",
  "Leo Le",
  "Lonni Freeman",
  "Ralph Magbanua",
  "Rogelio Salgado",
  "Ryan O'Boyle",
  "Sapana Chaudhary",
  "Sederick Cowart",
  "Thomas Thai",
  "Tyra Rodriguez"
];

// function randomGroups(arr, g){
//     const groups = [ ...Array(g).keys() ].map(i => []);
//     return arr.sort(()=> Math.random() - 0.5).reduce((a,b,i)=>{
//         a[i%g].push(b);
//         return a
//     }, groups)
// }

// function randomGroups(arr, g) {
//   const groups = [...Array(g).keys()].map((i) => []);
//   arr.sort(() => Math.random() - 0.5).forEach((a, i) => groups[i % g].push(a));
//   return groups;
// }
const locations = [
  {
    name:"balboa beach"
  }, {
    name: "Irvine Spectrum"
  },
  {
    name: "Goodwills"
  }
]
const addDensity = (locations, range) => locations.map(a=> ({...a, density: ~~(Math.random()*range)}));
const locationsWithDensity = addDensity(locations, 10)
console.log(locationsWithDensity);
