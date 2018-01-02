
$(document).ready(function () {

    $(function () {
        $(".typed").typed({
            strings: [" \" We pick up, wash and deliver within 48 hours.\"", " \"Free Pickup and Delivery.\""],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-header>a>img").css("height", "0");
            $(".navbar").css("background-color", "#04A2E1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-header>a>img").css("height", "150");
            $(".navbar-fixed-top").css("background-color", ""); // if not, change it back to transparent
            $(".navbar-default .navbar-nav>li>a").css("background-color", "#04A2E1");
            $(".navbar-default .navbar-nav>li>a").css("color", "white");
        }
    });
});

$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $(".navbar-default .navbar-nav>li>a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});