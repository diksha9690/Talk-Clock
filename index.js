// get the current time and settin am pm
let waketime = 19;
let lunch = 2;
let dinner = 8;

function currentTime(){
   
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
   
   
   
   

  
let merdian = "Am"
if(hours < 12){
    merdian = "Pm"
}else if(hours >12){
    merdian = "Am"
}else{
    merdian = "Pm"
}


let time = `${hours}:${minutes}:${seconds}${merdian}`;

let fulltime = document.querySelector("#full-time")
fulltime.innerHTML = time;
console.log(time);



  

};


// adding eventlistner on select
document.querySelector("#wakeUptimeSelector").addEventListener("change", ()=>{
  
    var arr = document.querySelectorAll("#wakeUptimeSelector");
    arr.forEach(element => {
        console.log(element.value)

        waketime = element.value
    });
});
document.querySelector("#lunchtimeSelector").addEventListener("change", ()=>{
  
    var arr = document.querySelectorAll("#lunchtimeSelector");
    arr.forEach(element => {
        console.log(element.value)

       lunchtime = element.value
    });
});
document.querySelector("#naptimeSelector").addEventListener("change", ()=>{
  
    var arr = document.querySelectorAll("#naptimeSelector");
    arr.forEach(element => {
        console.log(element.value)

        dinnertime = element.value
    });
});

// update the current time and on that basis changing mood an images
let mood = document.querySelector(".mood")
function updatetime(){
    let hours =new Date().getHours();
    console.log(hours)
   
    let images = document.querySelector(".img")
    console.log(hours)

    if(hours >12){
        mood.innerHTML = "good Morning"
          images.src = "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
    }else if(hours > 1  && hours < 4 ){
        mood.innerHTML = "Good Afternoon"
        images.src = "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"

    }else if(hours >= 4 && hours <= 7){
mood.innerHTML = "Good evening"
images.src = "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww"
    }else if(hours > 7 ){
        mood.innerHTML = "Good Night"
        images.src = "https://media.istockphoto.com/id/1289885861/photo/cute-ginger-cat.webp?b=1&s=170667a&w=0&k=20&c=VROn95np-rA35XMOGjL73Jwr8wKZ1z4bK_x5JDahQ7w="

    }else{
        images.src = "https://media.istockphoto.com/id/1289885861/photo/cute-ginger-cat.webp?b=1&s=170667a&w=0&k=20&c=VROn95np-rA35XMOGjL73Jwr8wKZ1z4bK_x5JDahQ7w="
    }

    if(hours == waketime){
        mood.innerHTML = "wake Up Now"
    }
    if(hours == lunch){
        mood.innerHTML = "Did you have your lunch?"
    }
    if(hours == dinner){
        mood.innerHTML = "Have you eaten yet"
    }
    
     currentTime();

}

// updating the time in every 1 sec
setInterval(updatetime,1000);

document.querySelector(".change").addEventListener("click",()=>{
   var a = document.querySelector("#party");
  a.style.display = "block"
    
})
document.addEventListener("keypress", function(event) {
    if (event.key) {
        var a = document.querySelector("#party");
        a.style.display = "none"
    }
  });

