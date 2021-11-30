
 const display_artist = () => {  
     
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "20b74dadd4msh868d3bed084b2c9p1052e3jsn745d7ab10a9e"
	}
})
.then(response => response.json())
.then(music => {

    //DOM MANIPULATION
    console.log(music)

    const row = document.querySelector(".row")

    for (let i = 0; i < music.data.length; i++) {
        const artist_info = music.data[i]

        const col = document.createElement("div")
        col.className = "col-3"
        // col.addEventListener("click", () => alert("you clicked the element number " + (i + 1)))

        col.innerHTML = `
    <div class="card">
        <img src=${artist_info.album.cover} class="card-img-top" alt=${artist_info.title} image>
        <div class="card-body">
            <h5 class="card-title">${artist_info.title}</h5>
            <p class="card-text">${artist_info.title_version}</p>
            <a href="#" class="btn btn-primary">${artist_info.title_shorts}</a>
        </div>
    </div>
    `
        row.appendChild(col)
    }
})

.catch(err => {
	console.error(err);
});
}



 