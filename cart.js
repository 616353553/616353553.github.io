$(document).ready(function(){
    // click logo to return to home
    $("img").bind("click", function() {
        window.location.href = "https://616353553.github.io/index.html";
    });

    var cart = JSON.parse(localStorage.getItem("cart"));
    var i = 0;
    var total = 0;
    $.each(cart, function(key, value) {
        $("#cart").append($("<div>", {"class": "post-container", "id": "container" + i}));
        $("#container" + i).click(function() {
            viewDetail(value["data"]);
        });
        $("#container" + i).append($("<div>", {"class": "post-thumb", "id": "thumb" + i}));
        $("#thumb" + i).append($("<img>", {"id": "image" + i, "src": value["data"]["images"][0]}));
        $("#container" + i).append($("<div>", {"class": "post-title", "id": "title" + i, "text": key}));
        $("#container" + i).append($("<div>", {"class": "post-content", "id": "content" + i, "text": value["data"]["price"] + " * " + value["count"]}));
        total += parseFloat(value["data"]["price"]) * value["count"];
        i++;
    });
    $("#cart").append($("<div>", {"class": "post-container", "id": "total-container"}));
    $("#total-container").append($("<h3>", {"text": "", "id": "total-content"}));
    if (i === 0) {
        $("#total-content").text("Your cart is empty");
    } else {
        $("#total-content").text("Your total is " + total.toFixed(2));
    }
});

function viewDetail(item_data) {
    localStorage.setItem("item_data", JSON.stringify(item_data));
    window.location.href = "https://616353553.github.io/detail.html";
}