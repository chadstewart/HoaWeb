$('#add-activitybook').on('submit', function() {
	var that = $(this),
		contents = that.serialize();

	$.ajax({
		url: 'http://localhost/task-manager-api/public/activitybooks',
		type: 'post',
		data: contents,
		success: function(data) {
			window.location.replace('home.php');
		}
	});

	return false;
});
