
export const showResult = (message) => {
    return `<p class="card-text id="generatedPResult">${message}</p>`;
}

export const removePastResult = () => {
    const oldResultChild = document.getElementById("result");
    if(oldResultChild){
        oldResultChild.remove();
    }
}