//alert("Yo");
//Characters i used: (717)-Planetina, (329)-Snuffles, (5)-Jerry, (1)-Rick
//VARIBLE----------------------------------------------------------
const URL = "https://rickandmortyapi.com/api/character/1";

// //ELEMENT-----------------------------------------------------------
const $name = $('#name');
const $origin = $('#origin');
const $species = $('#species');
const $image = $('#img');

//RICKS BUTTON
const modal = document.querySelector(".popUp");
const Pop = document.querySelector(".Pop");
const extBtn = document.querySelector(".exitBtn");

function toggleModal() {
    modal.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL).then(function(data){
        $name.text(data.name)
        $image.image(data.image)
        $origin.text(data.origin)
        $species.text(data.species)
    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

Pop.addEventListener("click", toggleModal); //Shows the content
extBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);