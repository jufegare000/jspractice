
export const showResult = (message) => {
    return `<p class="card-text id="generatedPResult">${message}</p>`;
}

export const removePastResult = () => {
    const oldResultChild = document.getElementById("result");
    if(oldResultChild){
        oldResultChild.remove();
    }
}

export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export const goToHome = () => {
    window.location.href = "/index.html"
}

export const romanDigits = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"];
