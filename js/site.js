openNavigation = function () {
	var menu = document.getElementById("navigation-menu");
	if (menu.style.display === "none" || menu.style.display === "") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}
document.addEventListener('DOMContentLoaded',function(){
	document.getElementById("navigation-icon-open").addEventListener("click", openNavigation);
	document.getElementById("navigation-icon-close").addEventListener("click", openNavigation);
})