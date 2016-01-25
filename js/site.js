var menuOpen = false;
var docBody = document.documentElement || document.body;
getScrollPosition = function () {
	return docBody.scrollTop;
}
var previousScroll = getScrollPosition();
openNavigation = function (speed) {
	var menu = document.getElementById("navigation-menu");
	var menuItems = document.querySelectorAll(".page-link");
	if (!menuOpen) {
		fadeIn(menu, speed);
		Array.prototype.forEach.call(menuItems, function(el, i){
			el.classList.add("loaded");
		});
		document.body.style.overflow = "hidden";
		menuOpen = true;
	} else {
		fadeOut(menu, speed);
		Array.prototype.forEach.call(menuItems, function(el, i){
			el.classList.remove("loaded");
		});
		document.body.style.overflow = "auto";
		menuOpen = false;
	}
	// when menu is opened, add a class to each item in it
	// in css, we have a transition on that class that sets transform to its normal state
	// then on the element normally we have it in its (preloaded) state
}
pageScroll = function () {
	var currentScroll = getScrollPosition();
	if (previousScroll < currentScroll) {
		console.log("scroll down");
	} else if (previousScroll > currentScroll) {
		console.log("scroll up")
	} else {
		// console.log("no scroll")
	}
	previousScroll = currentScroll;
}


document.addEventListener('DOMContentLoaded',function(){
	document.getElementById("navigation-icon-open").addEventListener("click", openNavigation.bind(null, 300));
	document.getElementById("navigation-icon-close").addEventListener("click", openNavigation.bind(null, 200));
})
document.addEventListener("scroll", pageScroll);

function fadeIn(el, speed) { // courtesy of youmightnotneedjquery.com
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / speed;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function fadeOut(el, speed) { // reversed the function above
  el.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = el.style.opacity - (new Date() - last) / speed;
    last = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}