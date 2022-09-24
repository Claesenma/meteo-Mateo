locaties = ["Brugge", "Brussel", "Wideumont", "Liege", "Helchteren"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
const days = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
const days2 = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function getData1() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[0] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
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
      console.log(data)
      window.data1 = data
    })
    .catch(error => console.log(error))
}
function getData2() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[1] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
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
      console.log(data)
      window.data2 = data
    })
    .catch(error => console.log(error))
}
function getData3() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[2] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
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
      console.log(data)
      window.data3 = data
    })
    .catch(error => console.log(error))
}
function getData4() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[3] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
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
      console.log(data)
      window.data4 = data
    })
    .catch(error => console.log(error))
}
function getData5() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[4] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
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
      console.log(data)
      window.data5 = data
    })
    .catch(error => console.log(error))
}


function show_day_data(day_num) {
  const today = new Date()
  const day = new Date(today)
  day.setDate(day.getDate() + i)
  const weekday = day.getDay()
  const string = days2[weekday] + " " + data1.days[day_num].datetime.slice(8, 10) + "/" + data1.days[day_num].datetime.slice(5, 7) + "/" + data1.days[day_num].datetime.slice(0, 4)

  const temp1 = data1.days[day_num].tempmax + "°C"
  const temp2 = data2.days[day_num].tempmax + "°C"
  const temp3 = data3.days[day_num].tempmax + "°C"
  const temp4 = data4.days[day_num].tempmax + "°C"
  const temp5 = data5.days[day_num].tempmax + "°C"

  const img1_1 = data1.days[day_num].icon
  const img1_2 = "images/" + img1_1 + ".png"
  const img2_1 = data2.days[day_num].icon
  const img2_2 = "images/" + img2_1 + ".png"
  const img3_1 = data3.days[day_num].icon
  const img3_2 = "images/" + img3_1 + ".png"
  const img4_1 = data4.days[day_num].icon
  const img4_2 = "images/" + img4_1 + ".png"
  const img5_1 = data5.days[day_num].icon
  const img5_2 = "images/" + img5_1 + ".png"

  document.getElementById("title1").innerHTML = string;

  document.getElementById("img1").src = img1_2;
  document.getElementById("img2").src = img2_2;
  document.getElementById("img3").src = img3_2;
  document.getElementById("img4").src = img4_2;
  document.getElementById("img5").src = img5_2;
  document.getElementById("img1").alt = img1_1;
  document.getElementById("img2").alt = img2_1;
  document.getElementById("img3").alt = img3_1;
  document.getElementById("img4").alt = img4_1;
  document.getElementById("img5").alt = img5_1;

  document.getElementById("span1").innerHTML = temp1;
  document.getElementById("span2").innerHTML = temp2;
  document.getElementById("span3").innerHTML = temp3;
  document.getElementById("span4").innerHTML = temp4;
  document.getElementById("span5").innerHTML = temp5;
}

myFunction(0)

async function myFunction(num) {
  getData1();
  getData2();
  getData3();
  getData4();
  getData5();
  await delay(1000);

  document.getElementById("home-btn1").href = "index.html";
  document.getElementById("today-btn1").href = "details.html?dag=1";
  document.getElementById("maps-btn1").href = "kaarten.html";

  for (i = 0; i < 15; i++) {
    const today = new Date()
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    const weekday = day.getDay()
    const date = days[weekday] + " " + data1.days[i].datetime.slice(8, 10) + "/" + data1.days[i].datetime.slice(5, 7) + "/" + data1.days[i].datetime.slice(0, 4)

    document.getElementById("btn" + numbers[i]).innerHTML = date;
    document.getElementById("btn" + numbers[i]).href = "#";
  }

  show_day_data(num);
}
