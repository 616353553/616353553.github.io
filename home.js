$(document).ready(function(){
    var url = "https://raw.githubusercontent.com/parkland-CSC175/Fa17-AlexBai/master/final_project/monitor.json?token=ASdNDT1i5O9-_FlYHXyr1vX_5Os_if0sks5aLyTmwA%3D%3D";
    $.get(url, function(data) {
        var items = JSON.parse(data)["items"];
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
                addToCart();
            });
            $("#buttons" + index).append($("<input>", {"type": "button", "name": "View detail", "id": "detail" + index, "value": "View detail"}));
            $("#detail" + index).click(function() {
                viewDetail();
            });
        });

    });
});

function viewDetail() {

}

function addToCart() {

}