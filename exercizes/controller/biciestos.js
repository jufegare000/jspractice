
export class biciestos {
    constructor(){
        document.getElementById("btnBiciesto")
        .addEventListener("click", this.calcularBiciesto);   
    }

    calcularBiciesto(){
        console.log('calcularbicio');
    }
}

let biciestosEje = new biciestos();