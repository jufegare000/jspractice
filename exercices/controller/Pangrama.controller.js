import {showResult} from '../utils/PagesUtils.js'

export class PangramaController {
    constructor(){
        document.getElementById("btnPangrama")
        .addEventListener("click", this.computePangram);   
    }

    computePangram(){
        console.log('btnPangrama');
        const imputValueLeapYear = document.getElementById("txtInputPangrama").value;
        
        let resultInnerHTML = document.getElementById("result");
        const regex = /([a-z])(?!.*\1)/g;
        const isPangram = (imputValueLeapYear.match(regex) || []).length === 26;

        const messageResult = isPangram ? "It is a pangram!!!!" : "Not, is not :c";
        console.log(messageResult);
        const htmlModuleForResult = showResult(messageResult);
        resultInnerHTML.innerHTML = htmlModuleForResult;
    }
}



let pangramaInstance = new PangramaController();