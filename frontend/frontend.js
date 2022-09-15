async function initUI () {
  const port =  await window.constants.getWebServerPort()
  const location = `http://localhost:${port}/pages/op-module-valorant-pregame/gfx`

  const apiKey =  await window.constants.getApiKey()

  document.querySelector('#loading-embed').value = `${location}/loading/index.html${apiKey !== null ? '?apikey=' + apiKey: ''}`
  document.querySelector('#loading-gfx').value = `${location}/loading/index.html${apiKey !== null ? '?apikey=' + apiKey: ''}`

  document.querySelector('#pregame-embed').value = `${location}/pregame/index.html${apiKey !== null ? '?apikey=' + apiKey: ''}`
  document.querySelector('#pregame-gfx').src = `${location}/pregame/index.html${apiKey !== null ? '?apikey=' + apiKey: ''}`
}
initUI()