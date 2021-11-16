<!--
Copyright © 2021 Ennio Marke
 ____    ____  ____  ____   ______   _________  
|_   \  /   _||_  _||_  _|.' ____ \ |  _   _  | 
  |   \/   |    \ \  / /  | (___ \_||_/ | | \_| 
  | |\  /| |     \ \/ /    _.____`.     | |     
 _| |_\/_| |_    _|  |_   | \____) |   _| |_    
|_____||_____|  |______|   \______.'  |_____|                                           
-->
<?php 
	$Pages = file_get_contents('../na_Files/sites.json');
?>
<!DOCTYPE html>
<html>
<head>
  	<meta name="google-site-verification" content="jMVATxKEXLommEscb2TPWWJQhSO3rGQ7K3ZHuwJJSwg" />
  	<meta charset="utf-8">
   	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<meta property="og:type" content="website">
	<meta property="og:url" content="http://mystaredia.de/">
	<meta property="og:title" content="Mystaredia">
	<meta property="og:description" content="Home of Mystaredia">
	<meta property="og:image" content="http://mystaredia.de/assets/pictures/Mystaredia.png">
  	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
  	<link rel='stylesheet' href='css/style.css?t=<?=time()?>'>
  	<script src="js/index.js?t=<?=time()?>" type="text/javascript"></script>
  	<script type="text/javascript">var Pages = <?= $Pages ?></script>
</head>
<body>
    <div class="wrapper fade-in">
      	<div id="logo" class='center'></div>
      	<div id="input-wrapper">
        	<input type="password" name="password" id="psw-input" class="middle psw-input">
        </div>
    </div>
</body>
</html>
<!--                          
       :\     /;               _
      ;  \___/  ;             ; ;
     ,:-"'   `"-:.            / ;
    /,---.   ,---.\         _; /
   ((  |  ) (  |  ))    ,-""_,"
    \`````   `````/""""",-""
     '-.._ v _..-'      )
       / ___   ____,..  \
      / /   | |   | ( \. \
     / /    | |    | |  \ \
     `"     `"     `"    `"
-->