<?php
// header('Access-Control-Allow-Origin: *');

$data = json_decode(key($_POST), true);

if (isset($data['email'])){
  $answers = array();
  // echo var_dump($data['answers']);
  foreach ($questions as $key => $value) {
    $answers[] = $data['answers'][$key];
    $answers[$key] = $data['answers'][$key];
  }
  // echo var_dump($answers);
  // echo $answers[25];

  $name = $data['name'];
  $email = $data['email'];
  $dev = $data['dev'];
  echo var_dump($dev);

  /* 
    Dots and spaces are being replaced by underscores probably due
    to the data being received as a key in the $_POST array.
  
    echo var_dump($email);
    echo $email;

    fix later, now hack the shit.
  */
  // $at = strpos($email, '@');
  // $part1=substr($email, 0, $at);
  // $part2=substr($email, $at, strlen($email));
  // $part2=str_replace('_', '.', $part2);
  // echo $part1 . $part2;
  // $email = $part1 . $part2;
  // ^^^ hack for mails with legit underscores before the @ 

  $name = str_replace('_', ' ', $name);
  $email = str_replace('_', '.', $email);
  
  // $email_patron = '/^[a-zA-Z0-9\._-]{3,}@[a-zA-Z0-9\.]{3,}\.{1,}[a-zA-Z]{2,4}$/';
  // $email_is_valid = preg_match($email_patron, $email);
  // echo var_dump($email_is_valid);

  /*
    @TODO: Guardar en la DB
      //Variables for connecting to the database.
    $hostname = "actusmbti.db.11260540.hostedresource.com";
    $username = "actusmbti";
    $password = "actusMBTI1!";
    $dbname = "actusmbti";

    if (@mysql_connect($hostname, $username, $password)) {
      if (@mysql_select_db($dbname)) {
        $query = "INSERT INTO tests VALUES(";
        $query .= "NULL, '{$_POST['name']}', '$email', NOW()";
        foreach ($questions as $key => $value) {
          $query .= ", '{$_POST[$key]}'";
        }
        $query .= ");";
        @mysql_query($query);
      }
    }
  */

  $origen = 'Actus <marubuteler@gmail.com>';
  // $origen = 'contacto@actus.com.ar;
  if ($dev) {
    $actus_recipients = 'abuteler@enneagonstudios.com';
    $asunto = 'CACTUS :: Resultados Perfil estilo MBTI';
  } else {
    $actus_recipients = 'marubuteler@gmail.com, abuteler@enneagonstudios.com';
    $asunto = 'ACTUS :: Resultados Perfil estilo MBTI';
  }


  ob_start();						// start capturing output
  include('mbti_email.php');		// execute the file
  $content = ob_get_contents();	// get the contents from the buffer
  ob_end_clean();					// stop buffering and discard contents

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= "From: $origen \r\n";

  // if ($email_is_valid) {
    $headers .= "To: $email \r\n";
    $headers .= "Bcc: $actus_recipients \r\n";
    mail($email, $asunto, $content, $headers);
  // } else {
    // $headers .= "To: $actus_recipients \r\n";
    // mail($actus_recipients, $asunto, $content, $headers);
  // }
  // echo 'I dud itz!';
}
?>
