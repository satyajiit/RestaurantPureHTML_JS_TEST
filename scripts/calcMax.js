document.querySelector('#book-hotel').addEventListener("submit", function(event){
    event.preventDefault();
    runFinder();
  });

  function runFinder(){

    let num1 = document.querySelector('#one').value;
    let num2 = document.querySelector('#two').value;
    let num3 = document.querySelector('#three').value;
    let resultDiv = document.querySelector('#responseDiv');

    resultDiv.style.display = "block";

    if(!num1 || !num2 || !num3){
        resultDiv.innerText = "Please enter all three numbers";
        alert("Please enter all three numbers");
    }
    else {
        let max_num = Math.max(num1, num2, num3);
        resultDiv.innerText = `Greatest number is ${max_num} out of three.`;
        alert(`Greatest number is ${max_num} out of three.`);
    }




  }