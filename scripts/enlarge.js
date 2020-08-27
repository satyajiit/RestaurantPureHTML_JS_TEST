let htmlCode = document.createTextNode(` <img src="/images/food.png" alt="ICON" id="imageTest" onmouseover="enlargeIcon();"
onmouseout="normaliseIcon();" height="80px" width="80px">`);

let jsCode = document.createTextNode(`function enlargeIcon(){
    document.querySelector('#imageTest').style.transform = ("scale(1.2)");
}

function normaliseIcon(){
    document.querySelector('#imageTest').style.transform = ("scale(1.0)");
}`);

let isCodeShown = false;

function enlargeIcon(){

    document.querySelector('#imageTest').style.transform = ("scale(1.2)");

}

function normaliseIcon(){
    document.querySelector('#imageTest').style.transform = ("scale(1.0)");
}

function viewCode(){

    if(isCodeShown){
        document.querySelector('#solutionCard').style.display = "none";
        isCodeShown = false;
        document.querySelector('#submitBtn').innerText = "View Code";
        return;
    }
    document.querySelector('#solutionCard').style.display = "block";
    document.querySelector('#htmlCode').appendChild(htmlCode);
    document.querySelector('#jsCode').appendChild(jsCode);
    document.querySelector('#submitBtn').innerText = "Hide Code";
    isCodeShown = true;

}

