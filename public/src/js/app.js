let eventPrompt;


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("Service worker registered!");
    window.addEventListener("beforeinstallprompt", function(event){
       e.preventDefault()
       console.log("object");
       eventPrompt=event
       return false
    })
  })
  .catch(function(error){
     console.log(error);
  })
}
