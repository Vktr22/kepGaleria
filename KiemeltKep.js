export default class KiemeltKep{       //azért használjuk a default-ot, mert 1file-ban 1 class van
    //privát adattagok:
    #eUt;   //=elérési út
    #cim;
    constructor(eUt, cim, szuloElem){
        //beállítja az adattagokat
        this.#eUt=eUt;
        this.#cim=cim;
        this.szuloElem=szuloElem; //publikus adattag!!!!!!!
        this.megjelenit();
    }
    //kell e getter és setter itt most?
    //MIVEL A GALÉRIÁBAN A KÉPEK ELÉRÉSI ÚTJÁT NEM AKAROM VÁLTOZTATNI, EZÉRT NEM KELL
    megjelenit(){
        //html kódban elhelyezzük a képet az adataival
        let html=`
                     <div class="kep">
                        <h3>${this.#cim}</h3>
                        <img src="${this.#eUt}" alt="${this.#eUt}">
                    </div>
                `;
        this.szuloElem.innerHTML = html;
    }

}