let k = 1;
$(document).ready(function () {
    $("#btnAdd").click(function () { 
        let title = $("#title").val();
        let rating = $("#rating").val();
        let str = "<tr id='tr"+k+"'><td >"+title+"</td><td>"+rating+"</td><td><button type='submit' class='btn btn-danger' onclick='onDelete(tr"+k+")'>Delete</button></td></tr>";
        tableBody = $("table tbody");
        tableBody.append(str);
        k = k + 1;
        $("#title").val("");
        $("#rating").val("");
        
    });
});

var onDelete = function(tid){
    $(tid).remove();
}