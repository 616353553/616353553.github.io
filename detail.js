$(document).ready(function(){
    var item_data = localStorage.getItem("item_data");
    $.each(item_data, function(key, value){
        if(key === "images") {
            $.each(value, function(index, img_dir){
                var li_element = $("<li>").append($("<img>", {"id": "itemImage" + index, "src": img_dir}));
                $("#slider").append(li_element);
            });
        } else {
            var title = key.charAt(0).toUpperCase() + key.slice(1);
            $("#main").append($("<h3>", {"text": title + ": " + value}));
        }
    });
    $("#main").append($("<input>", {"type": "button", "name": "Add to cart", "id": "add", "value": "Add to cart"}));
    $("#add").click(function(){
        //addToCart(value);
    });

    $("#slider").bxSlider({
        auto: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 600,
        slideMargin: 10,
        randomStart: false,
        pagerType: "short"
    });
});