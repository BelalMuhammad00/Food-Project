

const apis={
    main:'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    catagory:'https://www.themealdb.com/api/json/v1/1/categories.php',
    FCatagory:'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    Area:'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    Ingredients:'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
}





async function api(){

const api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
const response = await api.json();

// console.log(response.meals[0]);
return response;
}


async function displayCatagory(){
    const api =await fetch(apis.catagory);
const response = await api.json();
    let cartona =``;

for (const x of response.categories) {
    cartona+=` <div data="${x.strCategory}" class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
    <div class="position-relative">
    <img data="${x.strCategory}" src="${x.strCategoryThumb}" class="w-100 rounded-2" alt="food">
  
    <div data="${x.strCategory}" class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
    <p data="${x.strCategory}" class="fs-2 fw-bold">${x.strCategory}</p>
    </div>
    </div>
  </div>`;
}

     $('#cat-content').html(cartona);
}

async function displayIingredients(){
    const api =await fetch(apis.Ingredients);
    const response = await api.json();
console.log(response);
    let cartona =``;

    for (let i = 0; i <= 25; i++) {
        cartona+=`  <div data="${response.meals[i].strIngredient}" class="item col-sm-12 col-md-6 col-lg-3 h-100" col-sm-12 col-md-6 col-lg-3 h-100 overflow-hidden">
        <div data="${response.meals[i].strIngredient}">
          <i data="${response.meals[i].strIngredient}" class="fa-solid fa-utensils fs-1"></i>
      <h2>${response.meals[i].strIngredient}</h2>
      <div class="hig h-25 overflow-hidden">
        <p class="h-100 fit-content"></p>
    
      </div>
      
          </div>
        </div>`;
         
     }
    $('#ingredients-content').html(cartona);
}
async function displayIingredientsFood(food="chicken_breast"){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
    const result = await api.json();
    let cartona =``;

    for (const x of result.meals) {
        cartona+=` <div data=${x.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
        <div class="position-relative">
        <img data=${x.idMeal} src="${x.strMealThumb}" class="w-100 rounded-2" alt="food">
      
        <div data=${x.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
          <p  data=${x.idMeal} class="fs-2 fw-bold">${x.strMeal}</p>
        </div>
        </div>
      
      
      
      </div>`;
    }

$('#ingredients-content').html(cartona); 
}
async function displayArea(){
    const api =await fetch(apis.Area);
    const response = await api.json();
console.log(response);
    let cartona =``;

    for (const x of response.meals) {
        cartona+=`  <div data="${x.strArea}" class="item col-sm-12 col-md-6 col-lg-3 h-100">
        <div data="${x.strArea}" class="text-center">
        <i data="${x.strArea}" class="fa-solid fa-mountain-city fs-1"></i>
        <p data="${x.strArea}" class="fs-3 mt-2 fw-bold">${x.strArea}</p>
    
        </div>
      </div>`;
    }
    $('#Area-content').html(cartona);
}


async function displayAreaFood(city="Canadian"){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`);
    const result = await api.json();
    let cartona =``;

    for (const x of result.meals) {
        cartona+=` <div data=${x.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
        <div class="position-relative">
        <img data=${x.idMeal} src="${x.strMealThumb}" class="w-100 rounded-2" alt="food">
      
        <div data=${x.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
          <p data=${x.idMeal} class="fs-2 fw-bold">${x.strMeal}</p>
        </div>
        </div>
      
      
      
      </div>`;
    }

$('#Area-content').html(cartona); 
}

async function displayHome(){
    let response =await api();
//     let api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
// let response = await api.json();

    let cartona =``;
    response.meals.length=25

    for (const y of response.meals) {
        cartona+=` <div data=${y.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
        <div class="position-relative">
        <img data=${y.idMeal} src="${y.strMealThumb}" class="w-100 rounded-2" alt="food">
      
        <div data=${y.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
          <p data=${y.idMeal} class="fs-2 fw-bold">${y.strMeal}</p>
        </div>
        </div>
      
      
      
      </div>`;
    }


$('#home-content').html(cartona);
    }


async function displayDetails(id){

        const api =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await api.json();


    let cartona =``;

response.meals.length=1;

for (const x of response.meals) {
    cartona=`     <div class="col-md-4">
    <img src="${x.strMealThumb}" class="w-100 mb-3" alt="">
    <h2>${x.strMeal}</h2>
   </div>

   <div class="col-md-8">
    <h2 class="mb-3 fw-bold">Instructions</h2>
    <p>${x.strInstructions}</p>
    <h3>Area : ${x.strArea}</h3>
    <h3>Category : ${x.strCategory}</h3>
    <h3 class="mb-4">Tags : <span class="px-2 bg-info rounded-1 fs-5">${x.strTags}</span></h3>

    <button type="button" class="btn btn-danger"><a class="text-light" href="${x.strYoutube}">youTube</a></button>
   </div>>`;
}
     

       $('#home').addClass('d-none');
       $("#cat").addClass('d-none');
       $("#Area").addClass('d-none');
       $("#ingredients").addClass('d-none');
       $("#contact").addClass('d-none'); 
       $("#search").addClass('d-none');
       $("#mealDetails").removeClass('d-none');
 

    $('#mealDetails-content').html(cartona);


}


async function displayGamesBySearch(data='a'){
    const api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${data}`);
        const response = await api.json();



    let cartona =``;

for (const x of response.meals) {
    cartona+=` <div data=${x.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
    <div class="position-relative">
    <img data=${x.idMeal} src="${x.strMealThumb}" class="w-100 rounded-2" alt="food">
  
    <div data=${x.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
      <p  data=${x.idMeal} class="fs-2 fw-bold">${x.strMeal}</p>
    </div>
    </div>
  </div>`;
}
    $('#search-content').html(cartona);  
}

async function displayFoodBySearchName(name="Arrabiata"){
    const api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const response = await api.json();

let cartona =``;

    for (const x of response.meals) {
        cartona+=` <div data=${x.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
    <div class="position-relative">
    <img data=${x.idMeal} src="${x.strMealThumb}" class="w-100 rounded-2" alt="food">
    
    <div data=${x.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
      <p data=${x.idMeal} class="fs-2 fw-bold">${x.strMeal}</p>
    </div>
    </div>
    </div>`;
    }




$('#search-content').html(cartona); 

}


async function displayCatagoryFood(data="Seafood"){
const api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data}`);
        const result = await api.json();
        let cartona =``;
    
        for (const x of result.meals) {
            cartona+=` <div data=${x.idMeal} class="item col-sm-12 col-md-6 col-lg-3 h-100  overflow-hidden">
            <div class="position-relative">
            <img data=${x.idMeal} src="${x.strMealThumb}" class="w-100 rounded-2" alt="food">
          
            <div data=${x.idMeal} class="item-content rounded-2 d-flex align-items-center justify-content-center p-2">
              <p data=${x.idMeal} class="fs-2 fw-bold">${x.strMeal}</p>
            </div>
            </div>
          
          
          
          </div>`;
        }

    $('#cat-content').html(cartona); 
 
  
}


let searchLitter =document.querySelector('#search-Litter');
let searchName =document.querySelector('#search-Name');

searchLitter.addEventListener('keyup',()=>{
console.log(searchLitter.value);
displayGamesBySearch(searchLitter.value);
})
searchName.addEventListener('keyup',()=>{
    console.log(searchName.value);
    displayFoodBySearchName(searchName.value);
    })


$("#catagories").click(()=>{

    displayCatagory();
    $("#Area").addClass('d-none');
    $('#home').addClass('d-none');
    $("#contact").addClass('d-none');
    $("#ingredients").addClass('d-none');
    $("#search").addClass('d-none');
    $("#mealDetails").addClass('d-none');
    $("#cat").removeClass('d-none');
    
    })

$("#Area-icon").on('click',()=>{
    console.log('hi');
    displayArea();
    $('#home').addClass('d-none');
    $("#cat").addClass('d-none');
    $("#contact").addClass('d-none');
    $("#ingredients").addClass('d-none');
    $("#search").addClass('d-none');
    $("#mealDetails").addClass('d-none');
    $("#Area").removeClass('d-none');
    })


$("#home-icon").on('click',()=>{
    displayHome();
    $("#cat").addClass('d-none');
    $("#Area").addClass('d-none');
    $("#contact").addClass('d-none');
    $("#search").addClass('d-none');
    $("#mealDetails").addClass('d-none');
    $("#ingredients").addClass('d-none');
    $('#home').removeClass('d-none');
        })

$("#ingredients-icon").on('click',()=>{
    displayIingredients();
    $('#home').addClass('d-none');
    $("#cat").addClass('d-none');
    $("#Area").addClass('d-none');
    $("#contact").addClass('d-none');
    $("#search").addClass('d-none');
    $("#mealDetails").addClass('d-none');
    $("#ingredients").removeClass('d-none');
        })

$("#Contact-icon").on('click',()=>{
    $('#home').addClass('d-none');
    $("#cat").addClass('d-none');
    $("#Area").addClass('d-none');
    $("#ingredients").addClass('d-none');
    $("#search").addClass('d-none');
    $("#mealDetails").addClass('d-none');
    $("#contact").removeClass('d-none');
})

$('#Search-icon').on("click",()=>{
    $('#home').addClass('d-none');
    $("#cat").addClass('d-none');
    $("#Area").addClass('d-none');
    $("#ingredients").addClass('d-none');
    $("#contact").addClass('d-none'); 
    $("#mealDetails").addClass('d-none');
    $("#search").removeClass('d-none');
})

$(".icon").on("click",function(){



let res =$('#slidebar').innerWidth();
if($('#slidebar').css('left')=="0px"){
    $('#slidebar').animate({left:-res},500);
}else{
    $('#slidebar').animate({left:0},500);
}

})

$("#home-content").on("click", function(e){
let atr =e.target.getAttribute('data');
console.log(atr);
 displayDetails(atr);

// await displayCatagoryFood(atr?String:'');
})

$("#cat-content").on("click", function(e){
    let atr =e.target.getAttribute('data');
    console.log(atr);

        displayCatagoryFood(atr);
        displayDetails(atr);
    })

$("#Area-content").on("click", function(e){
        let atr =e.target.getAttribute('data');

        displayAreaFood(atr);
        displayDetails(atr);
        })

$("#ingredients-content").on("click", function(e){
            let atr =e.target.getAttribute('data');
                console.log(atr);  
                displayIingredientsFood(atr);
                       displayDetails(atr);
        
                    })


$("#search-content").on("click", function(e){
                let atr =e.target.getAttribute('data');
                displayDetails(atr);
                })            

$(document).ready(function(){
    $('.loading').fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });

    displayHome();
});




function validationALL() {


    $('#phoneInput').keyup(()=>{
        var regPhone=/^01[0125][0-9]{8}$/gm;
    let phone =$('#phoneInput').val();
    
    if(phone.match(regPhone)){
        $('#phoneAlert').removeClass('d-block');
        $('#phoneAlert').addClass('d-none');
        valy =true;
    }else{
        $('#phoneAlert').removeClass('d-none');
        $('#phoneAlert').addClass('d-block');
valy=false;
    }
    } 
    );

    
    $('#nameInput').keyup(()=>{
        var regName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        let named =$('#nameInput').val();
    
    if(named.match(regName)){
        $('#nameAlert').removeClass('d-block');
        $('#nameAlert').addClass('d-none');
        valy =true;
    }else{
        $('#nameAlert').removeClass('d-none');
        $('#nameAlert').addClass('d-block');
        valy =false;
    }
    
    } );
    
    $('#passwordInput').keyup(()=>{
        var regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let Password =$('#passwordInput').val();
    
    if(Password.match(regPassword)){
        $('#passwordAlert').removeClass('d-block');
        $('#passwordAlert').addClass('d-none');
        valy =true;
    }else{
        $('#passwordAlert').removeClass('d-none');
        $('#passwordAlert').addClass('d-block');
        valy =false;
    }
    
    } );
    
    $('#repasswordInput').keyup(()=>{
    
        let rePassword =$('#repasswordInput').val();
    
    if(rePassword == $('#passwordInput').val()){
        $('#repasswordAlert').removeClass('d-block');
        $('#repasswordAlert').addClass('d-none');
        valy =true;
    }else{
        $('#repasswordAlert').removeClass('d-none');
        $('#repasswordAlert').addClass('d-block');
        valy =false;
    }
    
    } );
    
    $('#emailInput').keyup(()=>{
        var regEmail=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let email =$('#emailInput').val();
    
    if(email.match(regEmail)){
        $('#emailAlert').removeClass('d-block');
        $('#emailAlert').addClass('d-none');
        valy =true;
    }else{
        $('#emailAlert').removeClass('d-none');
        $('#emailAlert').addClass('d-block');
        valy =false;
    }
    
    } );
    
    $('#age').keyup(()=>{
        let age =$('#age').val();
    
    if(age >= 0 &&  age <= 150){
       $('#ageAlert').removeClass('d-block');
        $('#ageAlert').addClass('d-none');
        valy =true;
    }else{
        $('#ageAlert').removeClass('d-none');
        $('#ageAlert').addClass('d-block');
        valy =false;
    }
    } );

    checkValidation();
}
validationALL();

document.getElementById('contactBtn').addEventListener('click',()=>{
    var regPhone=/^01[0125][0-9]{8}$/gm;
    let phone =$('#phoneInput').val();
    var regName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    let named =$('#nameInput').val();
    var regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let Password =$('#passwordInput').val();
    var regEmail=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email =$('#emailInput').val();
    if(phone.match(regPhone)&&named.match(regName)&&Password.match(regPassword)&&email.match(regEmail)){
        swal("Good job!", "great jop", "success");
    }else{
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    }
})

function checkValidation(){
   
}






