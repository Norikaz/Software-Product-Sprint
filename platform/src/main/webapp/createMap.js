
const stateNames = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const latLong = [
  {
    "state":"Alaska",
    "latitude":61.3850,
    "longitude":-152.2683
  },
  {
    "state":"Alabama",
    "latitude":32.7990,
    "longitude":-86.8073
  },
  {
    "state":"Arkansas",
    "latitude":34.9513,
    "longitude":-92.3809
  },
  {
    "state":"Arizona",
    "latitude":33.7712,
    "longitude":-111.3877
  },
  {
    "state":"California",
    "latitude":36.1700,
    "longitude":-119.7462
  },
  {
    "state":"Colorado",
    "latitude":39.0646,
    "longitude":-105.3272
  },
  {
    "state":"Connecticut",
    "latitude":41.5834,
    "longitude":-72.7622
  },
  {
    "state":"Delaware",
    "latitude":39.3498,
    "longitude":-75.5148
  },
  {
    "state":"Florida",
    "latitude":27.8333,
    "longitude":-81.7170
  },
  {
    "state":"Georgia",
    "latitude":32.9866,
    "longitude":-83.6487
  },
  {
    "state":"Hawaii",
    "latitude":21.1098,
    "longitude":-157.5311
  },
  {
    "state":"Iowa",
    "latitude":42.0046,
    "longitude":-93.2140
  },
  {
    "state":"Idaho",
    "latitude":44.2394,
    "longitude":-114.5103
  },
  {
    "state":"Illinois",
    "latitude":40.3363,
    "longitude":-89.0022
  },
  {
    "state":"Indiana",
    "latitude":39.8647,
    "longitude":-86.2604
  },
  {
    "state":"Kansas",
    "latitude":38.5111,
    "longitude":-96.8005
  },
  {
    "state":"Kentucky",
    "latitude":37.6690,
    "longitude":-84.6514
  },
  {
    "state":"Louisiana",
    "latitude":31.1801,
    "longitude":-91.8749
  },
  {
    "state":"Massachusetts",
    "latitude":42.2373,
    "longitude":-71.5314
  },
  {
    "state":"Maryland",
    "latitude":39.0724,
    "longitude":-76.7902
  },
  {
    "state":"Maine",
    "latitude":44.6074,
    "longitude":-69.3977
  },
  {
    "state":"Michigan",
    "latitude":43.3504,
    "longitude":-84.5603
  },
  {
    "state":"Minnesota",
    "latitude":45.7326,
    "longitude":-93.9196
  },
  {
    "state":"Missouri",
    "latitude":38.4623,
    "longitude":-92.3020
  },
  {
    "state":"Mississippi",
    "latitude":32.7673,
    "longitude":-89.6812
  },
  {
    "state":"Montana",
    "latitude":46.9048,
    "longitude":-110.3261
  },
  {
    "state":"North Carolina",
    "latitude":35.6411,
    "longitude":-79.8431
  },
  {
    "state":"North Dakota",
    "latitude":47.5362,
    "longitude":-99.7930
  },
  {
    "state":"Nebraska",
    "latitude":41.1289,
    "longitude":-98.2883
  },
  {
    "state":"New Hampshire",
    "latitude":43.4108,
    "longitude":-71.5653
  },
  {
    "state":"New Jersey",
    "latitude":40.3140,
    "longitude":-74.5089
  },
  {
    "state":"New Mexico",
    "latitude":34.8375,
    "longitude":-106.2371
  },
  {
    "state":"Nevada",
    "latitude":38.4199,
    "longitude":-117.1219
  },
  {
    "state":"New York",
    "latitude":42.1497,
    "longitude":-74.9384
  },
  {
    "state":"Ohio",
    "latitude":40.3736,
    "longitude":-82.7755
  },
  {
    "state":"Oklahoma",
    "latitude":35.5376,
    "longitude":-96.9247
  },
  {
    "state":"Oregon",
    "latitude":44.5672,
    "longitude":-122.1269
  },
  {
    "state":"Pennsylvania",
    "latitude":40.5773,
    "longitude":-77.2640
  },
  {
    "state":"Rhode Island",
    "latitude":41.6772,
    "longitude":-71.5101
  },
  {
    "state":"South Carolina",
    "latitude":33.8191,
    "longitude":-80.9066
  },
  {
    "state":"South Dakota",
    "latitude":44.2853,
    "longitude":-99.4632
  },
  {
    "state":"Tennessee",
    "latitude":35.7449,
    "longitude":-86.7489
  },
  {
    "state":"Texas",
    "latitude":31.1060,
    "longitude":-97.6475
  },
  {
    "state":"Utah",
    "latitude":40.1135,
    "longitude":-111.8535
  },
  {
    "state":"Virginia",
    "latitude":37.7680,
    "longitude":-78.2057
  },
  {
    "state":"Vermont",
    "latitude":44.0407,
    "longitude":-72.7093
  },
  {
    "state":"Washington",
    "latitude":47.3917,
    "longitude":-121.5708
  },
  {
    "state":"Wisconsin",
    "latitude":44.2563,
    "longitude":-89.6385
  },
  {
    "state":"West Virginia",
    "latitude":38.4680,
    "longitude":-80.9696
  },
  {
    "state":"Wyoming",
    "latitude":42.7475,
    "longitude":-107.2085
  }
];


const chosen = [];
const displayLL = [];


for(var i = 0; i < 3; i++){
let chose = stateNames[Math.floor(Math.random() * stateNames.length)];
chosen.push(chose);
}

//corona.lmao.ninja
let dispData = [];

const nyCall = (i) => {
const infoFetch = fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=GrTkolGasHBWb7LDyC4CVGeQ6AYMs3wf&fq=glocations:("${chosen[i].toUpperCase()}")`)
.then(response => response.json())
.then(info => {
    return info;
});
 return infoFetch;
}

function createNewPost(postData){
var newPost = document.createElement('div');
newPost.className = 'feed-item';
var headline = document.createElement('h3');
var story = document.createElement('p')
var fullArticle = document.createElement('a');
fullArticle.target = '_blank';
fullArticle.href = `${postData.response.docs[0].web_url}`;



headline.innerText = postData.response.docs[0].headline.main;
story.innerText = postData.response.docs[0].lead_paragraph;
fullArticle.innerText = 'Read Article >';

newPost.appendChild(headline);
newPost.appendChild(story);
newPost.appendChild(fullArticle);
document.body.getElementsByTagName('main')[0].getElementsByTagName('div')[0].append(newPost)
//newBar.append(newPost);
}

const fCall = (i) => {
 const myResponse = fetch(`https://disease.sh/v3/covid-19/states/${chosen[i]}`)
  .then(response => response.json())
  .then(data => {
      return data;
  });
  return myResponse;
}



function latLongLookup(stateName){
    displayLL.push(latLong.filter(ob=>ob.state===stateName));      
}

for(var j = 0; j < 3; j++){
latLongLookup(chosen[j]);
}

let map;
async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8282, lng: -98.5795 },
    zoom: 4,
  });

for(var i = 0; i < 3; i++){
let myLatLng = { lat: displayLL[i][0].latitude, lng: displayLL[i][0].longitude};
var contentString = ""
let finalData;

let stateData = await fCall(i).then(res => {
    finalData = res;
});

let postData;
let postInfo = await nyCall(i).then(res => {
    console.log(res);
    postData = res;
})
createNewPost(postData);

contentString = `<p> <h3>${finalData.state}</h3><br/>    
                    <ul><li>
                    <h5>Population: ${finalData.population}</h5>
                    <h5>Disease: COVID-19</h5>
                    <h5>Cases: ${finalData.cases}</h5>
                    <h5>Recovered: ${finalData.recovered}</h5>
                    <h5>Tests: ${finalData.tests}</h5>
                    <h5>Deaths: ${finalData.deaths}</h5>  
                    <h5>Cases today: ${finalData.todayCases}</h5>
                    <h5>Deaths today: ${finalData.todayDeaths}</h5>                  
                    </li></ul>
                </p>`

const infowindow = new google.maps.InfoWindow({
    content: contentString,
});
 if(finalData.todayCases >= 1000){
    const circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: myLatLng,
        radius: Math.sqrt(finalData.todayCases) * 5500,
    });
 }
 else if(finalData.todayCases >= 500){
    const circle = new google.maps.Circle({
        strokeColor: "#F5853F",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#F5853F",
        fillOpacity: 0.35,
        map,
        center: myLatLng,
        radius: Math.sqrt(finalData.todayCases) * 5500,
    });
 }
 else{
    const circle = new google.maps.Circle({
        strokeColor: "#F5FF90",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#F5FF90",
        fillOpacity: 0.35,
        map,
        center: myLatLng,
        radius: Math.sqrt(finalData.todayCases) * 5500,
    });
 }
const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: displayLL[i][0].state,
});

marker.addListener("click", () => {
    infowindow.open(map, marker);
});   
}
}