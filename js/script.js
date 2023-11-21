const button = document.querySelector(".btn-send");

button.addEventListener("click", function() {
    let user = document.getElementById("user").value;
    let distance_km = document.getElementById("distance_km").value;
    let age = document.getElementById("age").value;
    
    let price_new = distance_km * 0.21;
    
    console.log(user);
    console.log(distance_km);
    console.log(age);
    
})
