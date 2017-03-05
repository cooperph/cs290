var apiKey = 'a4mttk38ykqdj8ynjw6bzd3hab7sk46s';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
document.getElementById('urlSubmit').addEventListener('click', function(event){
  var req = new XMLHttpRequest();

  //var payload = {realm:null};
  //payload.realm = document.getElementById('realm').value;

  var opening = 'https://us.api.battle.net/wow/realm/status';
  var zip = '?realm=' + document.getElementById('realm').value;
  var apiPart = '&apikey=' + apiKey;
  var owmURL = opening + zip + apiPart;

  req.open('GET', owmURL, false);
  req.setRequestHeader('Content-Type', 'application/json');

 // var strObj = JSON.stringify(payload);
  req.send(null);

  var response = JSON.parse(req.response);

  document.getElementById('server').textContent = response.realms[0].name;
  document.getElementById('type').textContent = realmType(response.realms[0].type);
  document.getElementById('status').textContent = changeStatus(response.realms[0].status);
  document.getElementById('population').textContent = (response.realms[0].population).toUpperCase();

  event.preventDefault();
})
}

function changeStatus( status ) {
 if(status) {
     return 'UP';
 }
 else {
     return 'DOWN';
 }
}

function realmType( type ){
  if( type == 'pvp' ){
      return 'PvP';
  }
  else if( type == 'pve' ){
      return 'PvE';
  }
  else if( type == 'rp' ){
      return 'PvE-RP';
  }
  else if( type =='rppvp'){
      return 'PvP-RP';
  }
}
