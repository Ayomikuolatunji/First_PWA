if("serviceWorker" in  navigator){
    navigator.serviceWorker.register("../../sw.js")
    .then(()=>{
        console.log("serviceWorker registered")
    })
    .catch(err=>{
        console.log(err)
    })
}