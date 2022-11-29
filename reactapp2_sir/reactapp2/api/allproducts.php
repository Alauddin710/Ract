<?php
include('db_connection.php');

$sql = "SELECT * FROM products";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id']; // bam paser data base theke asbe
    $products['name'] = $row['name']; // bam paser data base theke asbe
    $products['details'] = $row['details']; // bam paser data base theke asbe
    $products['image'] = $row['image']; // bam paser data base theke asbe
    $products['price'] = $row['price']; // bam paser data base theke asbe

    $myproducts['pr'][] = $products;
}
echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
