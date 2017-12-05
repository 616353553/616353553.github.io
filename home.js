$(document).ready(function(){
    var url = "https://616353553.github.io/monitor.json";
    $.get(url, function(data) {
        var items = data["items"];
        $("#main").append($("<ul>", {"id": "items"}));
        $.each(items, function(index, value){
            $("#items").append($("<li>", {"id": "item" + index}));
            $.each(value, function(key, value){
                if(key === "images") {
                    $("#item" + index).append($("<img>", {"id": "itemImage" + key, "src": value[0], "width": 500}));
                } else {
                    var title = key.charAt(0).toUpperCase() + key.slice(1);
                    $("#item" + index).append($("<h3>", {"text": title + ": " + value}));
                }
            });
            $("#item" + index).append($("<section>", {"id": "buttons" + index}));
            $("#buttons" + index).append($("<input>", {"type": "button", "name": "Add to cart", "id": "add" + index, "value": "Add to cart"}));
            $("#add" + index).click(function(){
                addToCart(value);
            });
            $("#buttons" + index).append($("<input>", {"type": "button", "name": "View detail", "id": "detail" + index, "value": "View detail"}));
            $("#detail" + index).click(function() {
                viewDetail(value);
            });
        });

    });
});

function viewDetail(item_data) {
    localStorage.setItem("item_data", JSON.stringify(item_data));
    window.location.replace("https://616353553.github.io/detail.html");
}

function addToCart(item_data) {
    
}