var options = {
    light: './public/light.css',
    dark: './public/dark.css',
  }
  var DarkMode = new DarkMode(options)
  
  // Function for `mode-toggler` button
  var ModeToggler = document.getElementById('mode-toggler')
  changeTogglerText()
  ModeToggler.onclick = function () {
    DarkMode.toggleMode()
    changeTogglerText()
  }
  
  // Changes `mode-toggler` text on mode changing
  function changeTogglerText() {
    getModeRemoverState()
    var currentMode = DarkMode.getMode()
    ModeToggler.textContent = currentMode === 'light' ? '🌝' : '🌚'
  }
  
  // Detects mode on LocalStorage, if `true` – display a button
  getModeRemoverState()
  function getModeRemoverState() {
    // No code related to `mode-remover` here
  }

