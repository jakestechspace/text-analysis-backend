// this is just to demonstrate the api
! function () {
  var form = document.querySelector("#form")
  var resHolder = document.querySelector("#resHolder")
  var formInput = document.querySelector("#input")

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json')

  form.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch("http://localhost:3000/sentiment", {
      method: "POST",
      body: JSON.stringify({ text: formInput.value }),
      headers: myHeaders
    }).then(function(response) {
      if(response.status !== 200) {
        resHolder.innerHTML += "<br /><h2 style='color: red'>" + response.statusText + " - Wait a minute</h2>"
      }
      return response.json()
    }).then(function(data) {
      if(data) {
        resHolder.innerHTML += "<br /><span style='font-weight: bold'>" + formInput.value + "</span>"
        resHolder.innerHTML += " - <span>" + data.documents[0].sentiment + "<span><br />"
      }
    })
  })
}()