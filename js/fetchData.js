var apiURL = 'http://45.55.241.20/';
var apiFunctionURL = 'activitybooks'
$(window).load(function () {
	$.ajax({
		url: apiURL + apiFunctionURL,
		dataType: 'json',
		type: 'get',
		success: function(data) {
			var outputHTML = '';
			$.each(data, function() {
				var json = [];
				$.each(this, function(value) {
					json = this;
					outputHTML += '<tr><td>' + '<a class="api-link" href="activities.php?id=' + json.id  +
					'"  style="cursor: pointer;">'  + json.name + '</a></td><td>' + json.active +
					'</td><td>' + json.updated_at + '</td></tr>';
					$('#api-data').append(outputHTML);
				});
			});
		}
	});
});
