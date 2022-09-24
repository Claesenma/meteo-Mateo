const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
var dag = urlParams.get('dag')
if (dag == null) {
  var dag = 1;
}
var stad = urlParams.get('stad')
if (stad == null) {
  var stad = "Leuven";
}

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + stad + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"

fetch(url)
  .then(response => {
    // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    console.log(data.count)
    console.log(data.products)

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
    const days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

    const data2 = data.days[dag-1]

    for (i = 0; i < 24; i++) {
      const today = new Date()
      const day = new Date(today)
      day.setDate(day.getDate() + i)
      const weekday = day.getDay()
      const string = data2.hours[i].datetime
      const string2 = data2.hours[i].temp + "°C"
      const string3 = "Het voelt als " + data2.hours[i].feelslike + "°C";

      document.getElementById("hour" + numbers[i] + "-img1").src = "images/" + data2.hours[i].icon + ".png";
      document.getElementById("hour" + numbers[i] + "-img1").alt = data2.hours[i].icon;
      document.getElementById("hour" + numbers[i] + "-span1").innerHTML = string;
      document.getElementById("hour" + numbers[i] + "-span2").innerHTML = string2;
      document.getElementById("hour" + numbers[i] + "-span3").innerHTML = string3;}

    document.getElementById("p1").innerHTML = data.address;
    document.getElementById("p1-2").innerHTML = data2.datetime.slice(8, 10) + "/" + data2.datetime.slice(5, 7) + "/" + data2.datetime.slice(0, 4);
    document.getElementById("p2").innerHTML = data2.sunrise;
    document.getElementById("p3").innerHTML = data2.sunset;
    document.getElementById("p4").innerHTML = data2.uvindex;
    document.getElementById("home-btn1").href = "index.html?stad="+data.address;
    document.getElementById("today-btn1").href = "details.html?dag=1&stad="+data.address;
    document.getElementById("maps-btn1").href = "kaarten.html";

  })
  .catch(error => console.log(error))
