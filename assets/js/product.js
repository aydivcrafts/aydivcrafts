$(document).ready(function() {

    $.getJSON("/product/product.json",
        function(data) {

            var product_container = '';

            product_container += '<div class="row">'
            $.each(data, function(key, value) {
                product_container += '<div class="col-lg-4 col-md-6 col-sm-12">'
                product_container += '<div class="container-img">'
                product_container += '<a href="'+value.url+'"><img class="img-fluid image" src="'+value.img+'" alt="..." /></a>'
                product_container += '<div class="middle">'
                product_container += '<div class="text font-weight-bolder">' + value.product_name + '</div>'
                product_container += '</div>'
                product_container += '</div>'
                product_container += '</div>'
            });
            product_container += '</div>'
            $('#product-container').append(product_container);

        });


});