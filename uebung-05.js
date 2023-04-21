//Die Übung ist in uebung-5.html eingebunden
//5.1.a
var style = $(".container01").attr("style");
$("#result").html(style);

//b
$("#remember").attr("checked", true);

//c
$("h1").css("color", "#ff6459");

//d
$("#image").show();

//e
$(".container02").empty();

//5.2.a
var first = $("#first");
var last = $("#last");
var table = $("#table");
var btn = $("#addName");

function addRow() {
    var addNewName =
        "<tr><th>" + first.val() + "</th><th>" + last.val() + "</th></tr>";
    table.append(addNewName);
    $(first).val("");
    $(last).val("");
};

$(btn).click(function () {
    addRow();
});

//5.2.b
$([first, last]).each(function() {
    $(this).keypress(function checkEnterAndAdd(e) {
        if (e.which == 13) {
            addRow();
        }
    })
});