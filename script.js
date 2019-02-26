function products (name,price,picture,like){
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.like = like;
}

var sac = new products("Bag",200,"images/sac.jpg",false);
var Tshirt = new products("T-shirt",15,"images/t-shirt.jpg",false);
var chaussures = new products("Shoes",59,"images/chaussures.jpg",false);

var products = [sac,Tshirt,chaussures];


     var container = document.getElementById('container');

    products.forEach(function(product) {
    // Create Div
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", product.name);
    container.appendChild(newDiv);
    newDiv.innerHTML = '<h1>'+product.name+'</h1>' + " " + '<img src="' + product.picture + '">' + "<br> "+ '<h4>' +"- "+ product.price + " €" + '</h4>' ;


    // Create Button
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "btn");
    button.setAttribute("value", "Buy");
    newDiv.appendChild(button);

    // Create Like
    var like = document.createElement("i");
    like.setAttribute('class','fas fa-heart');
    like.setAttribute('id',"like");
    newDiv.appendChild(like);
    
    // Function click
    button.addEventListener('click',  function(){
        console.log("I buy "+ product.name);
    });
    //Function Like
    like.onclick = function(event){
        if (product.like == false){
            like.innerHTML = "";
            like.setAttribute('class', 'fas fa-heart red');
            product.like = true;
        }
        else {
            like.setAttribute('class', 'fas fa-heart');
            product.like = false;
        }
        console.log(product.like);
    }
    });
    
// $.get('https://swapi.co/api/planets/',function(data){
//     data.results.forEach(function (personnage){
//         const element = document.createElement('div');
//         element.innerHTML = personnage.name;
//         document.body.appendChild(element);
//     })
// })

$.get('http://localhost:3000/',function (response,error){
    console.log(response);
});

   
















