var fullName, phoneNum, addL1, addL2, addL3, services = [],
    currentDay, currentDate, currentMonth, currentTime, pickupDaysArray = [], datesArray = [], pickupTime = [], deliveryTime = [],
    //pickup section veriables
    pickupDateArr, pickupDate = "", pickupDay, pickupMonth,
    //delivery section veriables
    deliveryDaysArray = [], deliveryDate = "",
    smsTemplate

$(document).ready(function () {
    //Pickup Section
    currentDate = new Date().getDate()
    currentDay = new Date().getDay();
    currentMonth = new Date().getMonth();
    currentTime = new Date().getHours();

    //switch days array according to current day
    switch (currentDay) {
        case 0:
            pickupDaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu"]
            break;
        case 1:
            pickupDaysArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
            break;
        case 2:
            pickupDaysArray = ["Tue", "Wed", "Thu", "Fri", "Sat"];
            break;
        case 3:
            pickupDaysArray = ["Wed", "Thu", "Fri", "Sat", "Sun"];
            break;
        case 4:
            pickupDaysArray = ["Thu", "Fri", "Sat", "Sun", "Mon"];
            break;
        case 5:
            pickupDaysArray = ["Fri", "Sat", "Sun", "Mon", "Tue"];
            break;
        case 6:
            pickupDaysArray = ["Sat", "Sun", "Mon", "Tue", "Wed"];
            break;
    }
    //loop a element copy
    //create a date array
    for (var i = 0; i < 5; i++) {
        datesArray.push(currentDate);
        currentDate = currentDate + 1;
    }
    //switch days array according to current day
    switch (currentMonth) {
        case 0:
            currentMonth = "Jan"
            break;
        case 1:
            currentMonth = "Feb"
            break;
        case 2:
            currentMonth = "Mar"
            break;
        case 3:
            currentMonth = "Apr"
            break;
        case 4:
            currentMonth = "May"
            break;
        case 5:
            currentMonth = "Jun"
            break;
        case 6:
            currentMonth = "Jul"
            break;
        case 7:
            currentMonth = "Aug"
            break;
        case 8:
            currentMonth = "Sep"
            break;
        case 9:
            currentMonth = "Oct"
            break;
        case 10:
            currentMonth = "Nov"
            break;
        case 11:
            currentMonth = "Dec"
            break;
    }

    $(".pickupDate1").html(datesArray[0])
    $(".pickupDate2").html(datesArray[1])
    $(".pickupDate3").html(datesArray[2])
    $(".pickupDate4").html(datesArray[3])
    $(".pickupDate5").html(datesArray[4])

    $(".pickupDay1").html(pickupDaysArray[0])
    $(".pickupDay2").html(pickupDaysArray[1])
    $(".pickupDay3").html(pickupDaysArray[2])
    $(".pickupDay4").html(pickupDaysArray[3])
    $(".pickupDay5").html(pickupDaysArray[4])

    $(".pickupMonth").html(currentMonth);

    var date = new Date()
    date.setDate(new Date().getDate() + 2)
    var navDeliveryDateArr = (date.toString()).split(" ").slice(0, 4);
    var navDeliveryDate = Number(navDeliveryDateArr[2]);

    //switch days array according to current day
    switch (navDeliveryDateArr[0]) {
        case "Sun":
            deliveryDaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu"]
            break;
        case "Mon":
            deliveryDaysArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
            break;
        case "Tue":
            deliveryDaysArray = ["Tue", "Wed", "Thu", "Fri", "Sat"];
            break;
        case "Wed":
            deliveryDaysArray = ["Wed", "Thu", "Fri", "Sat", "Sun"];
            break;
        case "Thu":
            deliveryDaysArray = ["Thu", "Fri", "Sat", "Sun", "Mon"];
            break;
        case "Fri":
            deliveryDaysArray = ["Fri", "Sat", "Sun", "Mon", "Tue"];
            break;
        case "Sat":
            deliveryDaysArray = ["Sat", "Sun", "Mon", "Tue", "Wed"];
            break;
    }
    //switch days array according to current day
    $(".deliveryDate1").html(navDeliveryDate);
    $(".deliveryDate2").html(navDeliveryDate + 1);
    $(".deliveryDate3").html(navDeliveryDate + 2);
    $(".deliveryDate4").html(navDeliveryDate + 3);
    $(".deliveryDate5").html(navDeliveryDate + 4);

    $(".deliveryDay1").html(deliveryDaysArray[0]);
    $(".deliveryDay2").html(deliveryDaysArray[1]);
    $(".deliveryDay3").html(deliveryDaysArray[2]);
    $(".deliveryDay4").html(deliveryDaysArray[3]);
    $(".deliveryDay5").html(deliveryDaysArray[4]);

    $(".deliveryMonth").html(navDeliveryDateArr[1]);

    //create a date array
    for (var i = 0; i < 5; i++) {
        datesArray.push(currentDate);
        currentDate = currentDate + 1;
    }

    //gone time
    if (currentTime >= 08) {
        $(".2").addClass("disableElement");
        $(".2").attr("disabled", "disabled").off('click');
    }
    if (currentTime >= 10) {
        $(".3").attr("disabled", "disabled").off('click');
        $(".3").addClass("disableElement");
    }
    if (currentTime >= 12) {
        $(".4").addClass("disableElement");
        $(".4").attr("disabled", "disabled").off('click');
    }
    if (currentTime >= 13) {
        $(".5").addClass("disableElement");
        $(".5").attr("disabled", "disabled").off('click');
    }
    if (currentTime >= 15) {
        $(".6").addClass("disableElement");
        $(".6").attr("disabled", "disabled").off('click');
    }
    if (currentTime >= 17) {
        $(".7").addClass("disableElement");
        $(".7").attr("disabled", "disabled").off('click');
    }
});

////////////////////////// Fetched data from element when user click on element///////////////////

//pickup Date
$(".pickupDateContainer").click(function () {
    pickupDate = ($(this).children().text()).split("").join("");
    nonClickdelivery(pickupDate);
});

//delivery Date
$(".deliveryDateContainer").click(function () {
    deliveryDate = ($(this).children().text()).split("").join("");
});
function pickupAndDeliveryTime() {
    //pickup time
    $(".pickupTime").click(function () {
        $(this).toggleClass("toggleClass");
        ($(this).hasClass("toggleClass")) ? pickupTime = $(this).children().html() : pickupTime = "";
    });
    //delivery Time
    $(".deliveryTime").click(function () {
        $(this).toggleClass("toggleClass");
        ($(this).hasClass("toggleClass")) ? deliveryTime = $(this).children().html() : deliveryTime = "";
    });
}

//services
$.each($("input[name='service']:checked"), function () {
    services.push($(this).val());
    services.join(", ");
});


$("form").submit(function (event) {

    event.preventDefault();
    //fetching values from user input
    fullName = $("#fullName").val();
    phoneNum = $("#pNum").val();
    addL1 = $("#addL1").val();
    addL2 = $("#addL2").val();
    addL3 = $("#addL3").val();

    //services
    $.each($("input[name='service']:checked"), function () {
        services.push($(this).val());
        services.join(", ");
    });

    //store values into local storage
    localStorage.setItem("name", fullName);
    localStorage.setItem("num", phoneNum);
    localStorage.setItem("add1", addL1);
    localStorage.setItem("add2", addL2);
    localStorage.setItem("add3", addL3);
    localStorage.setItem("pickupTime", pickupDate + " " + pickupTime);
    localStorage.setItem("deliveryTime", deliveryDate + " " + deliveryTime);
    localStorage.setItem("services", services);

    //create a data object we use this object in request body.
    var data = {
        "sender": "drycln",
        "route": "4",
        "country": "91",
        "sms": [
            {
                "message": fullName + ", You choose " + services + " services." + " Contect no:" + phoneNum
                    + ". Address: " + addL1 + ' ' + addL2 + ' ' + addL3 + ". Pickup time: " + pickupDate + " " + pickupTime +
                    ". Delivery time: " + deliveryDate + " " + deliveryTime + ".",
                "to": [
                    phoneNum,
                ]
            },
        ]
    }
    //converty data object into json file
    smsTemplate = JSON.stringify(data)
    //sending data to index.php file
    jQuery.post("../index.php", { myKey: smsTemplate }, function (data) {
        document.location.href = "../pages/orderDetails.html"
    }).fail(function () {
        alert("Damn, something broke");
    });

})

function nonClickdelivery(pickupDate) {
    let pDate = pickupDate.split("").slice(3, 5).join("")
    pDate = (Number(pDate) + 1);

    for (var i = 0; i <= 4; i++) {
        let some = $('.deliveryDateContainer')[i].children[1].innerHTML;
        let parent = $('.deliveryDateContainer')[i];
        if (some <= pDate) {
            parent.parentElement.style.borderColor = "white";
            parent.hidden = true;
        } else if (some >= pDate) {
            parent.parentElement.style.backgroundColor = "";
            parent.hidden = false;
        }
    }
}

pickupAndDeliveryTime();
