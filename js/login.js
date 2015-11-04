$('#index-login-form').on('submit', function() {
	var that = $(this),
		contents = that.serialize();

	$.ajax({
		url: 'http://localhost/task-manager-api/public/authenticate',
		dataType: 'json',
		type: 'post',
		data: contents,
		success: function(data) {
			window.location.replace('home.php?token=' + data.token);
		}
	});

	return false;
});
