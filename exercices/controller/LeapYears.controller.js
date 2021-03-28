import {showResult, goToHome} from '../utils/PagesUtils.js'

export class LeapYearController {
    constructor(){
        document.getElementById("btnLeapYear")
        .addEventListener("click", this.calculateLeapYear);

        document.getElementById("btnHome")
        .addEventListener("click", goToHome);   
    }

    calculateLeapYear(){
        console.log('btnLeapYear');
        const imputValueLeapYear = parseInt(document.getElementById("iptLeapYearInputValue").value);
        
        let resultInnerHTML = document.getElementById("result");
        let messageResult = "";

        switch(imputValueLeapYear){
            case 400: case 4: case 100:
                messageResult = "Offcourse it is a Leap Year!";
                break;
            default:
                messageResult = "Is not a leap year :/!";
                break;
        }
        console.log(messageResult);
        const htmlModuleForResult = showResult(messageResult);
        resultInnerHTML.innerHTML = htmlModuleForResult;
    }
}



let leapYears = new LeapYearController();