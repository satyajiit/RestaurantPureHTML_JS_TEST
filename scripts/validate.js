function runValidation(){

   let title = document.querySelector('#title').value;
   let occupancy = document.querySelector('#occupancy').value;
   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let phone = document.querySelector('#number').value;
   let people = document.querySelector('#people').value;
   let rooms = document.querySelector('#rooms').value;
   let resultDiv = document.querySelector('#responseDiv');

   if(!validateEmail(email)){
        resultDiv.innerText  = "Invalid Email Entered";
        alert("Invalid Email Entered");
   }
   else if(people < 1){
    resultDiv.innerText  = "Number of People Cannot be less than 1";
    alert("Number of People Cannot be less than 1.");
   }
   else if(rooms < 1){
    resultDiv.innerText  = "Number of rooms Cannot be less than 1";
    alert("Number of rooms Cannot be less than 1.");
   }
   else if(title == 0){
    resultDiv.innerText  = "You forgot to select title.";
    alert("Select title.");
   }
   else if(occupancy == 0){
    resultDiv.innerText  = "Not entered occupancy.";
    alert("Select Occupancy.");
   }
   else if(name.length < 2){
    resultDiv.innerText  = "Enter your name.";
    alert("No name entered.");
   }
   else if(!validatePhone(phone)){
    resultDiv.innerText  = "Invalid Phone.";
    alert("Invalid Phone Number.");
   }
   else {
    alert("Book Done.");
    resultDiv.innerText  = "Booking Success.";
   }


   resultDiv.style.display = "block";

}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(number)
{
  var regx = /^[6-9]\d{9}$/ ;
  return regx.test(number);
}


document.querySelector('#book-hotel').addEventListener("submit", function(event){
    event.preventDefault();
    runValidation();
  });