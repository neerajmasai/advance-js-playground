
// make network request using fetch along with async / await
async function getData(url){
    const raw = await fetch(url);

    //return a Promise which will resolve to parsed JSON
    return raw.json();
}

// use the get data function to resolve Promise
// example -> getting movies data and appending to webpage
getData(`http://www.omdbapi.com/?i=tt3896198&apikey=2402b6d2`).then((movie) => {

    for(var i=0; i<3; i++){
        const div = document.createElement(`div`);
        div.style.width = "300px";
        div.style.height = "500px";
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        const h1 = document.createElement(`h1`);
        const img = document.createElement(`img`);
        img.style.width = "200px";
        h1.innerHTML = movie.Title;
        img.setAttribute("src", movie.Poster);

        div.append(h1);
        div.append(img);
        document.body.append(div);
    }

});