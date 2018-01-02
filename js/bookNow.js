var firstName, lastName, phoneNum, lastName, phoneNum, addL1, addL2, addL3;
var name, num, add1, add2;


function myFunction() {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    phoneNum = document.getElementById("pNum").value;
    addL1 = document.getElementById("addL1").value;
    addL2 = document.getElementById("addL2").value;
    addL3 = document.getElementById("addL3").value;

    window.location = '../pages/orderDetails.html';

    localStorage.setItem("name", firstName + ' ' + lastName);
    localStorage.setItem("num", phoneNum)
    localStorage.setItem("add1", addL1)
    localStorage.setItem("add2", addL2)
    localStorage.setItem("add3", addL3)
}

