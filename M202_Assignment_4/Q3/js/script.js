$(document).ready(function () {
    $("#btnLoad").click(function () { 
        alert("hello");
        $("#div1").load("test1.txt");
    });
});
