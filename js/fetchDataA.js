var apiURL = 'http://45.55.241.20/';
var apiFunctionURL = 'activitybooks'
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
				$.each(this.activities, function(value) {
					json = this;
					console.log(json);
					outputHTML += '<tr><td>' + '<a class="api-link" href="tasklist.php?id=' +
					json.id  + '"  style="cursor: pointer;">'  + json.name +
					'</a></td><td>' + json.active + '</td><td>' + json.updated_at + '</td></tr>';
					$('#api-data').append(outputHTML);
				});
			});
		}
	});
});
