import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";

//példányosítjuk a Kep osztályt
console.log(KEPEKLISTA);
let galeriaElem = document.getElementsByClassName("galeria")[0];
const KEP = new Kep(KEPEKLISTA[0].kep,KEPEKLISTA[0].cim,galeriaElem);




