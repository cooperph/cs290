var apiKey = 'a4mttk38ykqdj8ynjw6bzd3hab7sk46s';

document.addEventListener('DOMContentLoaded', characterDetails);

function characterDetails(){
document.getElementById('urlSubmit').addEventListener('click', function(event){
  var req = new XMLHttpRequest();

  var payload = {realm:null, name:null};
  payload.realm = document.getElementById('realm').value;
  payload.name = document.getElementById('charname').value;
   

//https://us.api.battle.net/wow/character/Sargeras/Maiella?fields=professions&locale=en_US&apikey=a4mttk38ykqdj8ynjw6bzd3hab7sk46s    
  var opening = 'https://us.api.battle.net/wow/character/';
  var serv = document.getElementById('server') + '/' + document.getElementById('charname');
  var fields ='?fields=professions&locale=en_US';
  var apiPart = '&apikey=' + apiKey;
  var owmURL = opening + serv + fields + apiPart;

  req.open('GET', owmURL, false);
  req.setRequestHeader('Content-Type', 'application/json');

  var strObj = JSON.stringify(payload);
  req.send(null);

  var response = JSON.parse(req.response);

  document.getElementById('cname').textContent = response.name;
  document.getElementById('myimage').src = response.thumbnail;

  event.preventDefault();
})
}