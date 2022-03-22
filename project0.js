fetch("https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "ecfbe9aaa0msh8e19ac6901a7502p183f54jsn7401a10341d9"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

try {
	fetch("https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "ecfbe9aaa0msh8e19ac6901a7502p183f54jsn7401a10341d9"
	}
} catch (error) {
	
}
