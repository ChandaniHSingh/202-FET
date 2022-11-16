$("#btnSubmit").on("click", function () {
    let x = $("#text").val();
    $("#list").append("<li>"+x+"</li>");
});