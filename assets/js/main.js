(function() {
    'use strict';
    personalSite(json)
    document.getElementById('languageCradel').style.height = "300px"
}());

function personalSite(json) {
    var count = 0;
    var hellos = [];

    // get all hellos for JSON object
    console.log("JSON:", json);
    for (var i = 0; i < json.length; i++) {
        var str = json[i].Hello
        if (typeof(str) !== 'undefined') {
            str = str.charAt(0).toUpperCase().toString() + str.slice(1, str.length)
            hellos.push(str)
        } else {
            str = ""
        }
    }
    console.log("Hellos:", hellos);

    var intervalID = window.setInterval(myCallback, 1500);

    function myCallback() {
        var sayHello = hellos[count] + ","
        document.getElementById("language").innerHTML = sayHello + " I'm Kam."
        document.getElementById("language").className = "fadeIn`"
        count++
        if (count === hellos.length) {
            count = 0
        }
    }
}
