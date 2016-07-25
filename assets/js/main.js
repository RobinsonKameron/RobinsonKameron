/*
FOR WHEN I FORGET HOW TO MERGE TO MASTER 😂
  git checkout updates
  git pull origin master
  git checkout master
  git merge updates
  git push

*/

(function() {
    'use strict';
    personalSite(json)
    document.getElementById('languageCradel').style.height = "300px"
}());



function personalSite(json) {
    var count = 0;
    var hellos = [];
    for (var i = 0; i < json.length; i++) {
        var str = json[i].Hello
        if (typeof(str) !== 'undefined') {
            str = str.charAt(0).toUpperCase().toString() + str.slice(1, str.length)
            hellos.push(str)
        } else {
            str = ""
        }
    }

    // OBJECTS
    var language = document.getElementById("language");
    var newHelloInterval = window.setInterval(pushNewHello, 1500);

    // hoverBox.addEventListener("hover", test());


    // FUNCTIONS
    function pushNewHello() {
        // get all hellos for JSON object
        var sayHello = hellos[count] + ","
        language.innerHTML = sayHello + " I'm Kam."
        language.className = "fadeIn"
        count++
        if (count === hellos.length) {
            count = 0
        }
    } // pushNewHello

}
