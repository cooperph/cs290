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
  var serv = document.getElementById('realm').value + '/' + document.getElementById('charname').value;
  var fields ='?fields=reputation&locale=en_US';
  var apiPart = '&apikey=' + apiKey;
  var owmURL = opening + serv + fields + apiPart;
  
  req.open('GET', owmURL, false);
  req.setRequestHeader('Content-Type', 'application/json');

  var strObj = JSON.stringify(payload);
  req.send(null);

  var response = JSON.parse(req.response);

  document.getElementById('cname').textContent = response.name;
  document.getElementById('myimage').src = ' https://render-api-us.worldofwarcraft.com/static-render/us/' + response.thumbnail;
  //document.getElementById('repName').textContent = response.reputation[20].name;
  //document.getElementById('repStanding').textContent = repName(response.reputation[20].standing);
  //document.getElementById('repValue').textContent = (response.reputation[20].value / response.reputation[20].max * 100).toFixed(2) +'%';
  
  // https://render-api-us.worldofwarcraft.com/static-render/us/sargeras/87/137909847-avatar.jpg

  event.preventDefault();
})
}

function repName(x){
	if(x == 0){
		return 'Hated';
	}
	else if(x == 1){
		return 'Hostile';
	}
	else if(x == 2){
		return 'Unfriendly';
	}
	else if(x == 3){
		return 'Neutral';
	}
	else if(x == 4){
		return 'Friendly';
	}
	else if(x == 5){
		return 'Honored';
	}
	else if(x == 6){
		return 'Revered';
	}
	else if(x == 7){
		return 'Exalted';
	}
}