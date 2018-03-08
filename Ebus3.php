<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>RECEIPT</title>
    </head>
    <body>
        <h4>RECEIPT</h4>
                
        <?php
        // Echo session variables that were set on previous page
        echo "Total is " . $_SESSION["subtotal"] . ".";
        ?>
         <?php
        // Echo session variables that were set on previous page
        echo "Name is " . $_SESSION["jack"] . ".";
        ?>
            <?php
        // Echo session variables that were set on previous page
        echo "Email is " . $_SESSION["jackmaher"] . ".";
        ?>
    </body>
</html>