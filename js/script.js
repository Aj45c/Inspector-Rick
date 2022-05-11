//alert("Yo");
//Characters i used: (717)-Planetina, (329)-Snuffles, (5)-Jerry, (1)-Rick
//VARIBLE----------------------------------------------------------
const URL1 = "https://rickandmortyapi.com/api/character/5";
const URL2 = "https://rickandmortyapi.com/api/character/329";
const URL3 = "https://rickandmortyapi.com/api/character/717";
const URL4 = "https://rickandmortyapi.com/api/character/1";

// //ELEMENT-----------------------------------------------------------
const $name1 = $('#name1');
const $origin1 = $('#origin1');
const $species1 = $('#species1');

const $name2 = $('#name2');
const $origin2 = $('#origin2');
const $species2 = $('#species2');

const $name3 = $('#name3');
const $origin3 = $('#origin3');
const $species3 = $('#species3');

const $name4 = $('#name4');
const $origin4 = $('#origin4');
const $species4 = $('#species4');
//JERRYS BUTTON-------------------------------------------------------------
const modal1 = document.querySelector(".popUp1");
const Pop1 = document.querySelector(".Pop1");
const extBtn1 = document.querySelector(".exitBtn1");
//SNUFFLES BUTTON-------------------------------------------------------------
const modal2 = document.querySelector(".popUp2");
const Pop2 = document.querySelector(".Pop2");
const extBtn2 = document.querySelector(".exitBtn2");
//PLANETINAS BUTTON-------------------------------------------------------------
const modal3 = document.querySelector(".popUp3");
const Pop3 = document.querySelector(".Pop3");
const extBtn3 = document.querySelector(".exitBtn3");
//RICKS BUTTON-------------------------------------------------------------
const modal4 = document.querySelector(".popUp4");
const Pop4 = document.querySelector(".Pop4");
const extBtn4 = document.querySelector(".exitBtn4");
//CONDITION----------------------------------------------------------------
function toggleModal1() {
    modal1.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL1).then(function(data){
        $name1.text(data.name)
        $origin1.text(data.origin['name'])
        $species1.text(data.species)
        //$('.popContent').prepend(`<img src = "${data.image}"/>` )
        console.log(data);

    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });

}

function windowOnClick1(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
}
function toggleModal2() {
    modal2.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL2).then(function(data){
        $name2.text(data.name)
        $origin2.text(data.origin['name'])
        $species2.text(data.species)
        //$('.popContent').prepend(`<img src = "${data.image}"/>` )
        console.log(data);

    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });

}

function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

function toggleModal3() {
    modal3.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL3).then(function(data){
        $name3.text(data.name)
        $origin3.text(data.origin['name'])
        $species3.text(data.species)
        //$('.popContent').prepend(`<img src = "${data.image}"/>` )
        console.log(data);

    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });

}

function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
    }
}

function toggleModal4() {
    modal4.classList.toggle("showContent"); //Shows the class that was hidden before
    
    $.ajax(URL4).then(function(data){
        $name4.text(data.name)
        $origin4.text(data.origin['name'])
        $species4.text(data.species)
        //$('.popContent').prepend(`<img src = "${data.image}"/>` )
        console.log(data);

    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    });

}

function windowOnClick4(event) {
    if (event.target === modal4) {
        toggleModal4();
    }
}
Pop1.addEventListener("click", toggleModal1); //Shows the content
extBtn1.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);
//-----------------------------------------------------------------------------------
Pop2.addEventListener("click", toggleModal2); //Shows the content
extBtn2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);
//-----------------------------------------------------------------------------------
Pop3.addEventListener("click", toggleModal3); //Shows the content
extBtn3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);
//------------------------------------------------------------------------------------
Pop4.addEventListener("click", toggleModal4); //Shows the content
extBtn4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);