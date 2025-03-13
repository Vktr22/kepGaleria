import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";
import Galeria from "./Galeria.js";
import KiemeltKep from "./KiemeltKep.js";
import NagyKep from "./NagyKep.js";

//példányosítjuk a Kep osztályt
console.log(KEPEKLISTA);
let galeriaElem = document.getElementsByClassName("galeria")[0];
let nagykepElem = document.getElementsByClassName("kiemeltKep")[0];



new Galeria(KEPEKLISTA,galeriaElem)     //osztály példányosítása






