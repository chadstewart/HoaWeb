var apiURL = 'http://localhost/task-manager-api/public/';
if(location.search.split('id=')[1]){
	var myParam = '/' + location.search.split('id=')[1];
}

$('#add').on('submit', function() {
	var that = $(this),
	apiFunctionURL = that.find('input[name="apiFunction"]').val(),
	contents = that.serialize();

	$.ajax({
		url: apiURL + apiFunctionURL,
		type: 'post',
		data: contents,
		success: function(data) {
			window.location.replace('home.php');
		}
	});

	return false;
});
/*
if($('#update') {
	$window.load(function() {
		url: apiURL + apiFunctionURL,
		dataType: 'json',
		type: 'get',
		data: contents,
		success: function(data) {
			window.location.replace('home.php');
		}
	}
}
*/
$('#update').on('submit', function() {
	var that = $(this),
	apiFunctionURL = that.find('input[name="apiFunction"]').val(),
	contents = that.serialize();

	$.ajax({
		url: apiURL + apiFunctionURL + myParam,
		type: 'patch',
		data: contents,
		success: function(data) {
			window.location.replace('home.php');
		}
	});

	return false;
});

if($('#delete')){
	$(window).load(function() {
		apiFunctionURL = $('#delete').find('input[name="apiFunction"]').val(),
		$.ajax({
			url: apiURL + apiFunctionURL,
			dataType: 'json',
			type: 'get',
			success: function(data) {
				$.each(data, function() {
					$.each(this, function() {
							var json = this;
							var outputHTML = '<option value="' + json.id + '">' + json.name + '</option>';
							$('#delete-selector').append(outputHTML);
					});
				});
			}
		});
	});
}

$('#delete').on('submit', function() {
	var that = $(this),
	apiFunctionURL = that.find('input[name="apiFunction"]').val(),
	deleteID = '/' + $('#delete-selector').val(),
	contents = that.serialize();

	$.ajax({
		url: apiURL + apiFunctionURL + deleteID,
		type: 'delete',
		data: contents,
		success: function(data) {
			window.location.replace('home.php');
		}
	});

	return false;
});
