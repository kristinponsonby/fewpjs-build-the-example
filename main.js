// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartBttn = document.querySelectorAll(".like-glyph")

const colorStates = {
  "red" : "",
  "": "red"
};


  heartBttn.forEach(heart => {
    //  heart =!heart
    heart.addEventListener("click", function() {
      mimicServerCall()
      .then(resp => {
        heart.innerHTML = FULL_HEART
        heart.style.color = colorStates[heart.style.color];
       })
      .catch(resp => {
        heart.innerHTML = EMPTY_HEART
        const showError = document.getElementById("modal")
        showError.className = ""
        showError.innerText = resp
        setTimeout(() =>  modal.className = "hidden", 3000);
  })})})
  
  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
