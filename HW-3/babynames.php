<?php
	$year = $_GET['year'];
	$gender = $_GET['gender'];
	$con = mysqli_connect('localhost','root','root','hw3',3310);
	if(!$con){
		die('Unable to connect to database:'.mysqli_error($con));
	}
	$query = "SELECT * FROM babynames where year like '%".$year."%' and gender like '%".$gender."%' order by year,gender,ranking;";
	$result = mysqli_query($con,$query);

	echo "<table>
	<tr><th>Ranking</th><th>Name</th>
	<th>Year</th><th>Gender</th></tr>";

	while($row = mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td>".$row['ranking']."</td>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['year']."</td>";
		echo "<td>".$row['gender']."</td>";
		echo "</tr>";
	}
	echo "</table>";

	mysqli_close($con);


?>