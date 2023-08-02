// const geocode = require("../../src/tools/geocode")

let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const geocodeF =document .getElementById('geocode')

let weatherFunction = async() =>{
  try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weathe?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            geocodeF.innerHTML =""
        }
        else {
            locationF.innerText = data.location
       const   myTimeout=setTimeout(myGreeting,1000);
       function myGreeting(){forecastF.innerText = data.forecast}
         
          const myTimeout1=setTimeout (myGreeting2,500);
          function myGreeting2(){
            geocodeF.innerText = "this is latitude ,"+data.latitude1+"this is longitude ,  "+data.longtitude1}
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e);
    }
}
