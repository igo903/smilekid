(function () {
	var
		config = {
			blankClose: true
		},

		loginDialog = boring.dialog('login-dialog', config);
		regDialog = boring.dialog('reg-dialog', config);

	document.addEventListener('click', function (e) {
		var t = e.target || event.srcElement,
			tCl = t.classList;

		if (tCl.contains('j-login')) {
			loginDialog.open();
		} else if (tCl.contains('j-reg')) {
			regDialog.open();
		}
	});
}());