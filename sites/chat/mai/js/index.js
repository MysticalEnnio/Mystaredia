/*******************************************************************************
Copyright © 2021 Ennio Marke
*******************************************************************************/

document.addEventListener("DOMContentLoaded", () => {

  //#region elements
  var output = document.getElementById("output")
  var input = document.getElementById("input")
  //#endregion

  //#region utils

  function httpGet(url) {
    var http = new XMLHttpRequest();
    http.open( "GET", url ); // false for synchronous request
    http.send( null );
    http.onreadystatechange=(e)=>{
      return xmlHttp.responseText;
    }
  }

    function getFetch(url, response) {
        var xhttp;
        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
        } else {
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
      
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            response(this.responseText);
          }
        };
      
        xhttp.open("GET", url, true);
        xhttp.send();
      }
      
      function postFetch(url, params, response) {
        var xhttp;
        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
        } else {
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
      
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            response(this.responseText);
          }
        };
      
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);
      }
  //#endregion

  //#region functions
    function logOutput(Text) {
      if(typeof Text == "string") {
        output.innerHTML = output.innerHTML + Text + "<br>"
      } else {
        console.log("Typeof Text: " + typeof Text)
        return 101;
      }
    }
  //#endregion

  //#region eventlisteners
  document.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
      if(input == document.activeElement) {
        logOutput(httpGet('http://api.brainshop.ai/get?bid=156779&key=0ErJYSb1ZlZmOcel&uid=browser&msg=' + input.value));
        input.value = "";
      }
    }
  }, true)
  //#endregion  

})