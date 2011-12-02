<?
$action = $_SERVER['REQUEST_METHOD'];

if($action == 'GET') {

  print '{
    "children":[
      {
          "id":"6162315674",
          "owner":"Noel",
          "secret":"d94d1629f4",
          "server":"6161",
          "farm":7,
          "title":"Night Sky"
      }
    ]
  }';

} else if($action == 'PUT') {

} else if($action == 'POST') {

} else if($action == 'DELETE') {

}

/*<img src="http://farm7.static.flickr.com/6161/6162315674_d94d1629f4_s.jpg" height="75" width="75">*/
?>

