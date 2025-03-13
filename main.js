import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";
import Galeria from "./Galeria.js";
import KiemeltKep from "./KiemeltKep.js";

//példányosítjuk a Kep osztályt
console.log(KEPEKLISTA);
let galeriaElem = document.getElementsByClassName("galeria")[0];
let nagykepElem = document.getElementsByClassName("kiemeltKep")[0];
let aktIndex = 0;


new Galeria(KEPEKLISTA,galeriaElem)     //osztály példányosítása


const NAGYKEP = new Kep(KEPEKLISTA[aktIndex].kep,KEPEKLISTA[aktIndex].cim,nagykepElem);



//a bal és a jobb gombbal léptessük a képet

/**
 * 1.   meg kell fogni a gombokat
 * 2.   hozzá adjuk az eseménykezelőket
 * 3.   A lista kövi elemével példányosítjuk a NAGYKEP-et.
 */

let balElem = document.getElementsByClassName("bal")[0];
let jobbElem = document.getElementsByClassName("jobb")[0];
balElem.addEventListener("click",function(){
    console.log("bal");
    aktIndex--;
    const NAGYKEP = new KiemeltKep(KEPEKLISTA[aktIndex].kep,KEPEKLISTA[aktIndex].cim,nagykepElem);

})
jobbElem.addEventListener("click",function(){
    console.log("jobb");
    aktIndex++;
    const NAGYKEP = new KiemeltKep(KEPEKLISTA[aktIndex].kep,KEPEKLISTA[aktIndex].cim,nagykepElem);

})



