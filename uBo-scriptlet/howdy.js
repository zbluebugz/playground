/// howdy.js
if (document.readyState != "complete"){
        window.addEventListener('load', sayHowdy, false); 
}else{
        sayHowdy()
}
function sayHowdy() {
  console.info("howdy howdy!!! :-) I'm running via scriptlet injection.");
}
