const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45ecde5b24msh86a23c7d178bd4ap1d71cbjsn5a3b3d2108cf',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);	
		let confirmed = document.getElementById('confirmed');
		let deaths = document.getElementById('deaths');
		let date = document.getElementById('date');
		deaths.innerHTML = `Deaths: ${response.data.deaths}`;
		confirmed.innerHTML = `Confirmed: ${response.data.confirmed}`;
		date.innerHTML = `Last checked: ${response.data.lastChecked}`;
	})
	.catch(err => console.error(err));