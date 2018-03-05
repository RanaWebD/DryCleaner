$('document').ready(() => {
    let name = localStorage.getItem("name");
    let num = localStorage.getItem("num");
    let add1 = localStorage.getItem("add1");
    let add2 = localStorage.getItem("add2");
    let add3 = localStorage.getItem("add3");
    let pickupTime = localStorage.getItem("pickupTime");
    let deliveryTime = localStorage.getItem("deliveryTime");
    let services = localStorage.getItem("services");

    document.querySelector("#name").innerHTML = name;
    document.querySelector("#num").innerHTML = num;
    document.querySelector("#add1").innerHTML = add1;
    document.querySelector("#add2").innerHTML = add2;
    document.querySelector("#add3").innerHTML = add3;
    document.querySelector("#pickupTime").innerHTML = pickupTime;
    document.querySelector("#deliveryTime").innerHTML = deliveryTime;
    document.querySelector("#selectedServices").innerHTML = services;

});
