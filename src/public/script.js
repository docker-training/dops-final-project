function displayPets(pets){
    var album = document.getElementById("album");
    pets.forEach(pet => {
        var item = document.createElement("img");
        item.className = "photo";
        item.src = pet;
        album.appendChild(item);
    })
}

function loadPets(){
    fetch('/pets')
        .then(function(response){
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function(data){
                displayPets(data);
            })
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

loadPets();