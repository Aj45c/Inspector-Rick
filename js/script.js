//alert("Yo");
//Characters i used: (717)-Planetina, (329)-Snuffles, (5)-Jerry, (1)-Rick
//VARIBLE----------------------------------------------------------
const URL = "";
const URL3 = "https://rickandmortyapi.com/api/character/717";
const URL4 = "https://rickandmortyapi.com/api/character/1";

// //ELEMENT-----------------------------------------------------------
const $name = $('#name');
const $origin = $('#origin');
const $species = $('#species');

//RICKS BUTTON-------------------------------------------------------------
const modal4 = document.querySelector(".popUp4");
const Pop4 = document.querySelector(".Pop4");
const extBtn4 = document.querySelector(".exitBtn4");
//CONDITION----------------------------------------------------------------


function toggleModal() {
    modal4.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL4).then(function(data){
        $name.text(data.name)
        $origin.text(data.origin['name'])
        $species.text(data.species)
        //$('.popContent').prepend(`<img src = "${data.image}"/>` )
        console.log(data);

    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });

}

function windowOnClick(event) {
    if (event.target === modal4) {
        toggleModal();
    }
}

Pop4.addEventListener("click", toggleModal); //Shows the content
extBtn4.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);