var apiURL = 'http://localhost/task-manager-api/public/';
var apiFunctionURL = ['activitybooks', 'activities', 'tasklists', 'tasks'];
var arrayPosition = 0;
$(window).load(function () {
	$.ajax({
		url: apiURL + apiFunctionURL[arrayPosition],
		dataType: 'json',
		type: 'get',
		success: function(data) {
			$.each(data, function() {
				//console.log(Object.keys(data[apiFunctionURL[arrayPosition]][0]));
				var titleHTML = '<tr><th>Name</th><th>Active</th><th>Updated On</th></tr>';
				$('#api-data').append(titleHTML);
				$.each(this, function() {
					var json = this;
					var outputHTML = '<tr><td> <a onclick="loadNewData('+ json.id + 
					')" style="cursor: pointer;">'  + json.name + '</a></td><td>' + json.active +
					'</td><td>' + json.updated_at + '</td></tr>';
					$('#api-data').append(outputHTML);
				});
			});
		}
	});
});
function loadNewData(id, tableName) {
	$.ajax({
		url: apiURL + apiFunctionURL[arrayPosition] + '/' + id,
		dataType: 'json',
		type: 'get',
		success: function(data) {
			arrayPosition++;
			$('#api-data').empty();
			var titleHTML = '<tr><th>Name</th>';
			$('#api-data').append(titleHTML);
			$.each(data, function() {
				$.each(this[apiFunctionURL[arrayPosition]], function() {
					var json = this;
					var outputHTML = '<tr><td> <a onclick="loadNewData('+ json.id + 
					')" style="cursor: pointer;">'  + json.name + '</a></td></tr>';
					$('#api-data').append(outputHTML);
				});
			});
		}
	});
}
