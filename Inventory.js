


var cartCount = 0,
	buy = $(".btn"),
	span = $(".number"),
	cart = $(".cart"),
	quickview = $(".quickviewContainer"),
	quickViewBtn = $(".quickview"),
	close = $(".quickviewContainer .close"),
	minicart = [],
	totalPrice = [],
	miniCartPrice;

buy.on("click", addToCart);
quickViewBtn.on("click", quickView);
cart.on("click", showMiniCart);
close.on("click", function () {
	quickview.removeClass("active");
});

function quickView() {
	var description = $(this).parent().find(".description").text(),
		header = $(this).parent().find(".header").text(),
		price = $(this).find(".price"),
		quickViewHeader = $(".quickviewContainer .headline"),
		quickViewDescription = $(".quickviewContainer .description");
	clearTimeout(timeQuick);
	if (quickview.hasClass("active")) {
		quickview.removeClass("active");
		var timeQuick = setTimeout(function () {
			quickview.addClass("active");
		}, 300);
	} else {
		quickview.addClass("active");
	}

	quickViewHeader.text(header);
	quickViewDescription.text(description);
}

function showMiniCart() {
	$(".mini").toggleClass("visible");
}

function addToCart() {
	var self = $(this),
		productName = $(this).parent().find(".header").text(),
		miniCartNames = $(".products"),
		names = $(".names"),
		price = $(this).parent().find(".price").text(),
		priceInt = parseInt(price);

	totalPrice.push(priceInt);
	miniCartPrice = totalPrice.reduce(function (a, b) {
		return a + b;
	});
	$(".miniprice").text("Total amount: " + miniCartPrice + ",-");
	minicart.push(productName);
	lastProduct = minicart[minicart.length - 1];
	miniCartNames.text("Your cart lines: ");
	names.append("<p>" + lastProduct + "</p>");

	cartCount++;
	span.text(cartCount);
	clearTimeout(time);
	if (span.hasClass("update")) {
		span.removeClass("update");
		span.addClass("updateQuantity");
		var time = setTimeout(function () {
			span.removeClass("updateQuantity");
			span.addClass("update");
		}, 700);
	} else {
		span.addClass("update");
	}
	if (cartCount == 1) {
		cart.toggleClass("icon-basket icon-basket-loaded");
	}

	$(this).addClass("ok");
	var timeOk = setTimeout(function () {
		self.removeClass("ok");
	}, 1000);
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}