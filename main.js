// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartBttn = document.querySelectorAll(".like-glyph")

function hideErrorMessage() {
document.getElementById("modal").hidden = true
};

  heartBttn.forEach(heart => {
    heart.addEventListener("click", function() {
      mimicServerCall()
      .then(resp => {
        heart.innerHTML = FULL_HEART
       
       })
      .catch(resp => heart.innerHTML = EMPTY_HEART)
  })})
  
  


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
