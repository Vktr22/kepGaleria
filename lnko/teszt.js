import { lnko } from "./main.js";
export function lnkoTeszt(){

    let tesztLista = [
        {
            a: 8,
            b:
            vart:
            txt:
        }
    ]

    /*
    console.log("1. teszteset a és b relatív prímek")
    let a= 9;
    let b=8;
    let vart=1;
    let kapott=lnko(a,b);
    //console.log(`a: ${a}, b: ${b}, várt: ${vart}, kapott: ${kapott}, jó? ${vart===kapott}`)
    console.assert(vart===kapott,`1. teszteset a: ${a}, b: ${b}, várt: ${vart}, kapott: ${kapott}, jó? ${vart===kapott}`)
                // ha vart===kapott true, akk nem fut le, csak, ha false!!!
    */
   for(let i = 0; i<tesztLista.length; i++){
    let a = tesztLista[0].a;
    let b = tesztLista[0].b;
    let vart = tesztLista[0].vart;
    let txt = tesztLista[0].txt;
    console.assert(
        vart===kapott,`1. teszteset a: ${a}, b: ${b}, várt: ${vart}, kapott: ${kapott}, jó? ${vart===kapott}`)
   }
}