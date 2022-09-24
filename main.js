const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
var stad = urlParams.get('stad')
if (stad == null) {
  var stad = "Leuven";
}


function search(city) {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
  // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)

      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
      const days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

      for (i = 0; i < 15; i++) {
        const today = new Date()
        const day = new Date(today)
        day.setDate(day.getDate() + i)
        const weekday = day.getDay()
        const string = days[weekday] + " " + data.days[i].datetime.slice(8, 10) + "/" + data.days[i].datetime.slice(5, 7) + "/" + data.days[i].datetime.slice(0, 4)

        const string2 = data.days[i].tempmax + "°C/" + data.days[i].tempmin + "°C"

        document.getElementById("day" + numbers[i] + "-img1").src = "images/" + data.days[i].icon + ".png";
        document.getElementById("day" + numbers[i] + "-img1").alt = data.days[i].icon;
        document.getElementById("p1").innerHTML = data.address;
        document.getElementById("home-btn1").href = "index.html?stad="+data.address;
        document.getElementById("today-btn1").href = "details.html?dag=1&stad="+data.address;
        document.getElementById("maps-btn1").href = "kaarten.html?";
        document.getElementById("day" + numbers[i] + "-span1").innerHTML = string;
        document.getElementById("day" + numbers[i] + "-span2").innerHTML = string2;
        document.getElementById("day" + numbers[i] + "-btn1").href = "details.html?dag="+numbers[i]+"&stad="+data.address;}

      })
  .catch(error => console.log(error))}

search(stad.slice(0,1).toUpperCase() + stad.slice(1,100).toLowerCase())

function myFunction() {
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.slice(0,1).toUpperCase() + input.value.slice(1,100).toLowerCase();
    console.log(filter);
    search(filter);
}
