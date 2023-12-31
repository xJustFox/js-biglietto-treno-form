const button = document.querySelector(".btn-send");

button.addEventListener("click", function () {
    let user = document.getElementById("user").value;
    let distance_km = document.getElementById("distance_km").value;
    let age = document.getElementById("age").value;

    let price_new = distance_km * 0.21;

    console.log(user,distance_km,age);

    // Sè l'utente avrà meno di 18 anni verra applicato il 20% di sconto
    if (age == "underage") {
        discount = (price_new * 20) / 100;
        price_new -= discount
    }
    // Sè l'utente avrà più di 18 anni ma meno di 65 verra applicato il 40% di sconto
    else if (age == "over65") {
        discount = (price_new * 40) / 100;
        price_new -= discount
    }
    
    document.getElementById("passenger").innerText = user;
    document.getElementById("price-ticket").innerText = price_new.toFixed(2);

    console.log(price_new.toFixed(2));   
})


const btn_reset = document.querySelector(".btn_reset");

btn_reset.addEventListener("click", function () {
    document.getElementById("user").value = "";
    document.getElementById("distance_km").value = "";
    document.getElementById("age").value = "";

    document.getElementById("passenger").innerText = "";
    document.getElementById("price-ticket").innerText = "";
})
