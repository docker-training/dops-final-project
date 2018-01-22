// A note about the license of this photos: 
// all photos are free for private and commercial use
// https://www.pexels.com/photo-license/

var baseURL = "https://static.pexels.com/photos/";

var listOfPets = [
    "51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg",
    "34809/loro-park-orca-fish.jpg",
    "406014/pexels-photo-406014.jpeg",
    "160846/french-bulldog-summer-smile-joy-160846.jpeg",
    "104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "96938/pexels-photo-96938.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "57416/cat-sweet-kitty-animals-57416.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "248306/pexels-photo-248306.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "46533/guinea-pig-smooth-hair-gold-agouti-young-animal-46533.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "372166/pexels-photo-372166.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "786273/pexels-photo-786273.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "234054/pexels-photo-234054.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "735640/pexels-photo-735640.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "236589/pexels-photo-236589.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
]

function displayPets(pets){
    var album = document.getElementById("album");
    pets.forEach(pet => {
        var item = document.createElement("img");
        item.className = "photo";
        item.src = baseURL + pet;
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