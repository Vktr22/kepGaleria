import { lnkoTeszt } from "./teszt.js";

export function lnko(a, b){
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

//console.log(lnko(8,15))
lnkoTeszt()