$(window).load(function () {
	$.ajax({
		url: 'http://localhost/task-manager-api/public/activitybooks',
		dataType: 'json',
		type: 'get',
		success: function(data) {
			$.each(data, function() {
				$.each(this, function(value) {
					$.each(this, function (name, value) {
						console.log(name + ': ' + value);
						});
					});
				});
		}
	});
});
