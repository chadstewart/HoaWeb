<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Hoamobile | Home</title>
        <link rel="stylesheet" href="fontawesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body class="body">
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <div class="mg-top-15">
                        <a href="#menu" class="menu-link"><i class="fa fa-navicon fa-3x white-text"></i></a>
                    </div>
                </div>
                <div class="col-xs-8">
                   <div class="navbar-right">
                       <h1 class="site-title white-text">HOA<span class="blue-text">Mobile</span></h1>
                   </div>
                </div>
                <div class="clearfix"></div>
                <div>
                    <nav id="menu" class="panel" role="navigation">
                        <ul>
                            <li><a href="#">View Open Tasks</a></li>
                            <li><a href="#">View Completed Tasks</a></li>
                            <li><a href="#">Create New Task</a></li>
                            <li><a href="#">Edit Task</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
	   <div class="row">
		<center>
                <table id="api-data" border='1' style="background: #FFFFFF; ">
			<tr>
				<th>Name</th>
				<th>Active</th>
				<th>Updated on</th>
			</tr>
		</table>
		</center>
            </div>
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="js/bigSlide.min.js"></script>
	<script src="js/fetchDataTL.js"></script>
        <script>
            $(document).ready(function() {
                $('.menu-link').bigSlide({
                    easyClose :'true'
                });
            });
        </script>
    </body>
</html>
