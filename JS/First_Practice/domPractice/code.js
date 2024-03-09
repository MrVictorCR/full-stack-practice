const container = document.querySelector(".flex-container");

function keyCreate(name,model,price){
    img = "<img class='key-img' src='key.png'>";
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>${price}</p>`;
    return [img,name,model,price];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();

for (var i =1; i <=20; i++) {
    let modelRandom = Math.round(Math.random()*1000);
    let priceRandom = Math.round(Math.random()*10+30);
    
    let key = keyCreate(`Key ${i}`, `Model ${modelRandom}`, priceRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modelRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    documentFragment.appendChild(div);
    
}

container.appendChild(documentFragment);