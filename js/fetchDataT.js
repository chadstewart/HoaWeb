var apiURL = 'http://45.55.241.20/';
var apiFunctionURL = 'tasklists'
$(window).load(function () {
	var myParam = location.search.split('id=')[1]
	$.ajax({
		url: apiURL + apiFunctionURL + '/' + myParam,
		dataType: 'json',
		type: 'get',
		success: function(data) {
			var outputHTML = '';
			$.each(data, function() {
				var json = [];
				$.each(this.tasks, function(value) {
					json = this;
					outputHTML += '<tr><td>' + json.description +
					'</a></td><td>' + json.status + '</td><td>' + json.updated_at + '</td></tr>';
					$('#api-data').append(outputHTML);
				});
			});
		}
	});
});
