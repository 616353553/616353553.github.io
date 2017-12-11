$(window).on("load", function(){
    // click logo to return to home
    $("img").bind("click", function() {
        window.location.href = "https://616353553.github.io/index.html";
    });
    // enable cart button
    $("#cart").click(function() {
        console.log("cart pushed");
        viewCart();
    });

    // update cart count
    updateCartCount();

    // retrieve item data
    var item_data = JSON.parse(localStorage.getItem("item_data"));
    $.each(item_data, function(key, value){
        if(key === "images") {
            $.each(value, function(index, img_dir){
                var li_element = $("<li>").append($("<img>", {"id": "itemImage" + index, "src": img_dir, "width": 600}));
                $("#slider").append(li_element);
            });
        } else {
            var title = key.charAt(0).toUpperCase() + key.slice(1);
            $("#main").append($("<h3>", {"text": title + ": " + value}));
        }
    });
    $("#main").append($("<input>", {"type": "button", "name": "Add to cart", "id": "add", "value": "Add to cart"}));
    $("#add").click(function(){
        addToCart(item_data);
    });

    $("#slider").bxSlider({
        auto: false,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 600,
        slideMargin: 10,
        randomStart: false,
        pagerType: "short",
        infiniteLoop: false
    });
});

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
    console.log("navigate");
    window.location.href = "https://616353553.github.io/cart.html";
}
