<?php
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
          
        function get_data() {
            $datae = array();
            $datae[] = array(
                'PLAYER_NAME' => $_POST['name'],
                'TEAM_ID' => $_POST['teamID'],
                'PLAYER_ID' => $_POST['playerID'],
                'SEASON' => $_POST['season'],
            );
            return json_encode($datae);
        }
          
        $name = "ghg";
        $file_name = $name . '.json';
       
        if(file_put_contents(
            "$file_name", get_data())) {
                echo $file_name .' file created';
            }
        else {
            echo 'There is some error';
        }
    }
?>