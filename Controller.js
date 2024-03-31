
//les variables d'action
const createbtn = document.querySelector(".create-btn");
const signin = document.querySelector(".signin");
const goSearchCard = document.querySelector(".go-searc-card");
const showCard = document.querySelector(".button--submit");
const submit = document.querySelector(".submit");
const forCardSide = document.querySelector(".forCardSide");


const warning = document.querySelector(".warning");

//les variables contenant les class des differente page 
const form = document.querySelector(".form");
const card = document.querySelector(".card");
const flipcard = document.querySelector(".containerCard");

//gestton des events 
createbtn.addEventListener('click', displayFom );
signin.addEventListener('click', goBackToCard );
submit.addEventListener("click", TakeGradData );
goSearchCard.addEventListener('click', goBackToCard );
showCard.addEventListener('click', displayCard );
forCardSide.addEventListener('click', goBackToCard  )

//creation fontion de gestion  d'actions de l'utilisateur 
function displayFom(){
    if(card.classList.contains("active")){
        card.classList.remove("active")
    }
    if(flipcard.classList.contains("active")){
        flipcard.classList.remove("active")
    }
    form.classList.add("active")
    warning.classList.remove("active")
}

function goBackToCard(){
    if(form.classList.contains("active")){
        form.classList.remove("active")
    }
    if(flipcard.classList.contains("active")){
        flipcard.classList.remove("active")
    }
    card.classList.add("active")
    warning.classList.remove("active")
}


/* let ListCard = JSON.parse(localStorage.getItem("ListCard")); */
function TakeGradData(){
    const numberCardCreate = document.querySelector(".number-card-create");
    const currentNameCreate = document.querySelector(".current-name-create");
    const currentSurnameCreate= document.querySelector(".current-surname-create");
    const currentSsidCreate = document.querySelector(".current-ssid-create");
    
    let CurentNum = escapeHtml(numberCardCreate.value);
    let currentName = escapeHtml(currentNameCreate.value) + " " + escapeHtml(currentSurnameCreate.value);
    let ssdCurrent = escapeHtml(currentSsidCreate.value);

    let currentCard = new Card(CurentNum, currentName, ssdCurrent);
    ListCard.push(currentCard);
    card.classList.add("active");
    form.classList.remove("active");
    localStorage.setItem("ListCard", JSON.stringify(ListCard));

}


function displayCard(){
    //les variables contenant les class de la carte
    const number = document.querySelector(".number");
    const namem = document.querySelector(".name");
    const strip = document.querySelector(".strip");
    const numberSearchCard = document.querySelector(".number-search-card");

    const num =  escapeHtml(numberSearchCard.value) ; 

    ListCard.forEach(AnotherCard => {
        if(parseInt(AnotherCard.number) === parseInt(num)){
            number.textContent = AnotherCard.id;
            namem.textContent = AnotherCard.name;
            strip.textContent = AnotherCard.number;

            form.classList.remove("active");
            card.classList.remove("active");
            flipcard.classList.add("active");
        }
        else{
            card.classList.add("active");
            warning.classList.add("active");
        }
       
    });
    
     
}







