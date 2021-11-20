<!-- 
Copyright © 2021 Ennio Marke
 ____    ____  ____  ____   ______   _________  
|_   \  /   _||_  _||_  _|.' ____ \ |  _   _  | 
  |   \/   |    \ \  / /  | (___ \_||_/ | | \_| 
  | |\  /| |     \ \/ /    _.____`.     | |     
 _| |_\/_| |_    _|  |_   | \____) |   _| |_    
|_____||_____|  |______|   \______.'  |_____|                                           
-->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <link rel="stylesheet" href="css/style.css?t=<?=time()?>">
    <script src="js/index.js?t=<?=time()?>"></script>
    <title>Mai</title>
</head>
<body>
  <div style="width: 75%; margin: 0; float: left; margin-bottom: 5px;">
    <h1 class="heading center" style="margin-left: 34%;">Mai Chat</h1>
  </div>
  <div style="width: 25%; float: left;">
    <nav>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
      </label>
      <em>Dark Mode</em>
      </div>
    </nav>
  </div>

  <div style="text-align: -webkit-center;">
    <ul id="output"></ul>
  </div>

  <div id="footer">
    <input type="range" min="-10000" max="10000" step="1"></input>
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