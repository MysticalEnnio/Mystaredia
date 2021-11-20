/*******************************************************************************
Copyright © 2021 Ennio Marke
*******************************************************************************/

document.addEventListener("DOMContentLoaded", () => {

  //#region darkmode
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme == 'dark') {
        toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
  }



  toggleSwitch.addEventListener('change', switchTheme, false);
  //#endregion

  //#region elements
  var output = document.getElementById("output")
  var input = document.getElementById("input")
  var slider = document.getElementById("speedSlider")
  //#endregion

  var readSpeed = slider.value;

  var setReadSpeed = setInterval(() => {
    readSpeed = slider.value
  }, 250);

  var forever = setInterval(() => {
    setTimeout(() => {
      logOutput(readSpeed)
    }, 50 + readSpeed);
  }, 50)

  function reqMai(msg) {
    $.ajax({
      url: `https://url-req.glitch.me/http://api.brainshop.ai/get?bid=156779&key=0ErJYSb1ZlZmOcel&uid=mai&msg=${msg}`,
        type: "GET",
        withCredentials: true,
        success: function (data) {
          console.log(data)
          return data
        },
        error: function (xhr, status) {
          alert("error");
        }
    });
  }

    output.scrollTop = output.scrollHeight;


  //#region functions
    function logOutput(text, cN) {
      var ul = document.getElementById("output");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(text));
      cN?li.classList.add("pink"):""
      ul.appendChild(li);
      output.scrollTop = output.scrollHeight;
    }
  //#endregion


})
