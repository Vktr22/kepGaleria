export default class NagyKep{
    #aktIndex = 0;
    #lista = [];
    constructor(lista){
        this.#lista = lista;
        const NAGYKEP = new Kep(this.#lista[this.#aktIndex].kep,this.#lista[this.#aktIndex].cim,nagykepElem);

    }


    

    
    
    
    
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

}