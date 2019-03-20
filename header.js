(function includeHTML() {
	console.log("tried to do theader thing");
	$('#headerDiv').html(
		'<header id="header">\
			<a href="index.html" class="logo"><img src="images/HMCEWBlogo.png" class="ewblogo"></a>\
			<ul class="icons">\
				<li><a href="https://www.facebook.com/hmcEWB/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>\
			</ul>\
		</header>'
	);
})();