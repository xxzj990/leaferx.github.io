$(document).ready(function() {
    $('#fullpage').fullpage({
        loopBottom: true,
        verticalCentered: false
    });
});

var app = new Vue({
    el: "#fullpage",
    data: {}
});