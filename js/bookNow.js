var fullName, phoneNum, addL1, addL2, addL3, services = [],
    currentTime,
    //pickup Schedule veriables
    pickupSchedule = "", pickupTime = [],
    //delivery Schedule veriables
    deliverySchedule = "", deliveryTime = [],
    smsTemplate

$(document).ready(function () {
    _pickupTimeContainer();
    _deliverTimeContainer();
    _pickupAndDeliveryTime();
});


// Fetched data from element when user click on element
$(".pickupDateLi").click(function () {
    var pickupSelectedDay = $(this).children().children()[0].innerText;
    var pickupSelectedDate = $(this).children().children()[1].innerText;
    var pickupSelectedMonth = $(this).children().children()[2].innerText;

    pickupSchedule = `${pickupSelectedDay}/${pickupSelectedDate}/${pickupSelectedMonth}`;
});
$(".deliveryDateLi").click(function () {
    var deliverySelectedDay = $(this).children().children()[0].innerText;
    var deliverySelectedDate = $(this).children().children()[1].innerText;
    var deliverySelectedMonth = $(this).children().children()[2].innerText;

    deliverySchedule = `${deliverySelectedDay}/${deliverySelectedDate}/${deliverySelectedMonth}`;
});

function _addClassOnActiveElement(element, switchBtnPickupAndDeliveryTime) {
    if (switchBtnPickupAndDeliveryTime === 'pickup') {
        //remove activeTimeElement class from all Time Div Element
        /////////////////////////////figuer out below line code//////////////////////////////////////////////////
        element.parent().parent().parent().parent().children().children().children().children().removeClass("activeTimeElement");
        
        //only add activeTimeElement class on active time div element
        element.addClass("activeTimeElement");
        if (element.hasClass("activeTimeElement")) {
            pickupTime = element.children().html()
        }
    } else if (switchBtnPickupAndDeliveryTime === 'delivery') {
        //remove activeTimeElement class from all Time Div Element
        element.parent().parent().children().children().removeClass("activeTimeElement")
        //only add activeTimeElement class on active time div element
        element.addClass("activeTimeElement");
        if (element.hasClass("activeTimeElement")) {
            deliveryTime = element.children().html()
        }
    }
}

//toggle in pickup and delivery dates
function _pickupAndDeliveryTime() {
    //pickup time   
    $(".pickupTimeDiv").click(function () { _addClassOnActiveElement($(this), 'pickup') });

    //delivery Time 
    $(".deliveryTime").click(function () { _addClassOnActiveElement($(this), 'delivery'); });

}

function _pickupTimeContainer() {

    function _pickupCalendar() {
        var pickupDate1 = new Date()
        var pickupDate2 = new Date(new Date().setTime(new Date().getTime() + 1 * 86400000))
        var pickupDate3 = new Date(new Date().setTime(new Date().getTime() + 2 * 86400000))
        var pickupDate4 = new Date(new Date().setTime(new Date().getTime() + 3 * 86400000))
        var pickupDate5 = new Date(new Date().setTime(new Date().getTime() + 4 * 86400000))


        $(".pickupDate1").html(pickupDate1.getDate())
        $(".pickupDate2").html(pickupDate2.getDate())
        $(".pickupDate3").html(pickupDate3.getDate())
        $(".pickupDate4").html(pickupDate4.getDate())
        $(".pickupDate5").html(pickupDate5.getDate())

        $(".pickupDay1").html(pickupDate1.toString().split(' ')[0])
        $(".pickupDay2").html(pickupDate2.toString().split(' ')[0])
        $(".pickupDay3").html(pickupDate3.toString().split(' ')[0])
        $(".pickupDay4").html(pickupDate4.toString().split(' ')[0])
        $(".pickupDay5").html(pickupDate5.toString().split(' ')[0])

        $(".pickupMonth1").html(pickupDate1.toString().split(' ')[1]);
        $(".pickupMonth2").html(pickupDate2.toString().split(' ')[1]);
        $(".pickupMonth3").html(pickupDate3.toString().split(' ')[1]);
        $(".pickupMonth4").html(pickupDate4.toString().split(' ')[1]);
        $(".pickupMonth5").html(pickupDate5.toString().split(' ')[1]);

    }

    function _pickupTime() {
        //Pickup Section
        currentTime = new Date().getHours();

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
    }


    _pickupCalendar();
    _pickupTime();
}


function _deliverTimeContainer() {
    _hideDeliveryDateLi();

    var date1 = new Date(new Date().setTime(new Date().getTime() + 3 * 86400000))
    var date2 = new Date(new Date().setTime(new Date().getTime() + 4 * 86400000))
    var date3 = new Date(new Date().setTime(new Date().getTime() + 5 * 86400000))
    var date4 = new Date(new Date().setTime(new Date().getTime() + 6 * 86400000))
    var date5 = new Date(new Date().setTime(new Date().getTime() + 7 * 86400000))

    //switch days array according to current day
    $(".deliveryDate1").html(date1.getDate());
    $(".deliveryDate2").html(date2.getDate());
    $(".deliveryDate3").html(date3.getDate());
    $(".deliveryDate4").html(date4.getDate());
    $(".deliveryDate5").html(date5.getDate());

    $(".deliveryDay1").html(date1.toString().split(' ')[0]);
    $(".deliveryDay2").html(date2.toString().split(' ')[0]);
    $(".deliveryDay3").html(date3.toString().split(' ')[0]);
    $(".deliveryDay4").html(date4.toString().split(' ')[0]);
    $(".deliveryDay5").html(date5.toString().split(' ')[0]);

    $(".deliveryMonth1").html(date1.toString().split(' ')[1]);
    $(".deliveryMonth2").html(date2.toString().split(' ')[1]);
    $(".deliveryMonth3").html(date3.toString().split(' ')[1]);
    $(".deliveryMonth4").html(date4.toString().split(' ')[1]);
    $(".deliveryMonth5").html(date5.toString().split(' ')[1]);

    function _hideDeliveryDateLi() {
        document.getElementById("pickupDateLi1").onclick = function () {
            document.getElementById("deliveryDateLi1").style.display = 'block';
            document.getElementById("deliveryDateLi2").style.display = 'block';
            document.getElementById("deliveryDateLi3").style.display = 'block';
            document.getElementById("deliveryDateLi4").style.display = 'block';
            document.getElementById("deliveryDateLi5").style.display = 'block';
        }

        document.getElementById("pickupDateLi2").onclick = function () {
            document.getElementById("deliveryDateLi1").style.display = 'none';
            document.getElementById("deliveryDateLi2").style.display = 'block';
            document.getElementById("deliveryDateLi3").style.display = 'block';
            document.getElementById("deliveryDateLi4").style.display = 'block';
        }
        document.getElementById("pickupDateLi3").onclick = function () {
            document.getElementById("deliveryDateLi1").style.display = 'none';
            document.getElementById("deliveryDateLi2").style.display = 'none';
            document.getElementById("deliveryDateLi3").style.display = 'block';
            document.getElementById("deliveryDateLi4").style.display = 'block';
        }
        document.getElementById("pickupDateLi4").onclick = function () {
            document.getElementById("deliveryDateLi1").style.display = 'none';
            document.getElementById("deliveryDateLi2").style.display = 'none';
            document.getElementById("deliveryDateLi3").style.display = 'none';
            document.getElementById("deliveryDateLi4").style.display = 'block';
        }
        document.getElementById("pickupDateLi5").onclick = function () {
            document.getElementById("deliveryDateLi1").style.display = 'none';
            document.getElementById("deliveryDateLi2").style.display = 'none';
            document.getElementById("deliveryDateLi3").style.display = 'none';
            document.getElementById("deliveryDateLi4").style.display = 'none';
        }
    }

}

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

    let filteredDuplicateServices = [];
    $.each(services, function (i, el) {
        if ($.inArray(el, filteredDuplicateServices) === -1) filteredDuplicateServices.push(el);
    });

    //store values into local storage
    localStorage.setItem("name", fullName);
    localStorage.setItem("num", phoneNum);
    localStorage.setItem("add1", addL1);
    localStorage.setItem("add2", addL2);
    localStorage.setItem("add3", addL3);
    localStorage.setItem("pickupTime", pickupSchedule + " " + pickupTime);
    localStorage.setItem("deliveryTime", deliverySchedule + " " + deliveryTime);
    localStorage.setItem("services", filteredDuplicateServices);

    //create a data object we use this object in request body.
    var data = {
        "sender": "drycln",
        "route": "4",
        "country": "91",
        "sms": [
            {
                "message": fullName + ", You choose " + filteredDuplicateServices + " services." + " Contect no:" + phoneNum
                    + ". Address: " + addL1 + ' ' + addL2 + ' ' + addL3 + ". Pickup time: " + pickupSchedule + " " + pickupTime +
                    ". Delivery time: " + deliverySchedule + " " + deliveryTime + ".",
                "to": [
                 
                    phoneNum
                ]
            },
        ]
    }

    //converty data object into json file
    //smsTemplate = JSON.stringify(data)
    //sending data to index.php file
    jQuery.post("http://localhost:5000/sendSMS", data , function (res) {
        console.log(res)
        document.location.href = "../pages/orderDetails.html"
    }).fail(function (err) {
        console.log(err, "Damn, something broke");
    });
})

