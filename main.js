import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";
import Galeria from "./Galeria.js";

//példányosítjuk a Kep osztályt
console.log(KEPEKLISTA);
let galeriaElem = document.getElementsByClassName("galeria")[0];
let nagykepElem = document.getElementsByClassName("kiemeltKep")[0];

new Galeria(KEPEKLISTA,galeriaElem)


const NAGYKEP = new Kep(KEPEKLISTA[0].kep,KEPEKLISTA[0].cim,nagykepElem);




