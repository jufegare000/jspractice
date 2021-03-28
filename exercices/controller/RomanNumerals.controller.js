import {showResult, romanDigits, goToHome} from '../utils/PagesUtils.js'

export class RomanNumeralsController {
    constructor(){
        document.getElementById("btnRomanNumeral")
        .addEventListener("click", this.convertArabicToRomanNumeral);   

        document.getElementById("btnHome")
        .addEventListener("click", goToHome);   
    }

    convertArabicToRomanNumeral(){
        const imputValueRomanNumeral = document.getElementById("iptRomanNumberInputValue").value;
        let i = 3;
        let romanNumber = "";
        let arabicDigits = imputValueRomanNumeral.split("");
        let arrayOutput = [];
        while(i--){
            romanNumber = (romanDigits[+arabicDigits.pop() + (i * 10)] || "") + romanNumber;
            arrayOutput = Array(+arabicDigits.join("") + 1).join("M") + romanNumber;
        }
    
        let resultInnerHTML = document.getElementById("result");
        const messageResult = `Your Roman Number is: ${arrayOutput.toString()}`;

        console.log(messageResult);
        const htmlModuleForResult = showResult(messageResult);
        resultInnerHTML.innerHTML = htmlModuleForResult;
    }
}



let romanNumeralsInstance = new RomanNumeralsController();