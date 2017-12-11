$(document).ready(function(){
    updateCartCount();

    // create items and retrieve items data
    var url = "https://616353553.github.io/monitor.json";
    var items = null;
    $.get(url, function(data) {
        console.log(data);
        var items = data["items"];
    });
    console.log(items);

    // change html base on items data
    $.each(items, function(index, value){
        // create <li> for each item
        $("#items").append($("<li>", {"id": "item" + index}));

        // add item's tile
        $("#item" + index).append($("<h3>", {"text": "Title: " + value["title"]}));
        // add item's first image
        $("#item" + index).append($("<img>", {"id": "itemImage" + index, "src": value["images"][0], "width": 500}));
        // add item's price
        $("#item" + index).append($("<h3>", {"text": "Price: " + value["price"]}));

        // add two buttons for item
        $("#item" + index).append($("<section>", {"id": "buttons" + index}));

        // add to cart button
        $("#buttons" + index).append($("<input>", {"type": "button", "name": "Add to cart", "id": "add" + index, "value": "Add to cart"}));
        $("#add" + index).click(function(){
            addToCart(value);
        });
        // view detail button
        $("#buttons" + index).append($("<input>", {"type": "button", "name": "View detail", "id": "detail" + index, "value": "View detail"}));
        $("#detail" + index).click(function() {
            viewDetail(value);
        });
    });

    // make cart button clickable
    $("#cart").click(function() {
        viewCart();
    });
});

function viewDetail(item_data) {
    localStorage.setItem("item_data", JSON.stringify(item_data));
    window.location.href = "https://616353553.github.io/detail.html";
}

function addToCart(item_data) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
        cart = {};
        cart[item_data['title']] = {"data": item_data, "count": 1};
    } else {
        if (cart[item_data["title"]] === undefined) {
            cart[item_data["title"]] = {"data": item_data, "count": 1};
        } else {
            cart[item_data["title"]]["count"] += 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    // retrieve cart data
    var cart = {}
    if (localStorage.getItem("cart") !== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    // update "in cart" count
    var count = 0;
    $.each(cart, function(key, value) {
        count += cart[key]["count"];
    });
    $("#cart").text('In Cart(' + count + ')');
}

function viewCart() {
    // retrieve cart data
    var cart = {}
    if (localStorage.getItem("cart") !== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    window.location.href = "https://616353553.github.io/cart.html";
}