
function getNapo(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let water = document.getElementById('water').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.002) * 
    amount);
    ingredientQuantities['flour'].innerText = flour;
    ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
    ingredientQuantities['yeast'].innerText = Math.round(flour * 0.02 ) / 10; // redondeado
    ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
    ingredientQuantities['oil'].innerText = 0;
    ingredientQuantities['sugar'].innerText = 0;
}
function getSici(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let water = document.getElementById('water').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.03 
        /*lev+aceit*/) * amount);
    ingredientQuantities['flour'].innerText = flour;
    ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
    ingredientQuantities['yeast'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingredientQuantities['oil'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
    ingredientQuantities['sugar'].innerText = 0;
}
function getNy(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let water = document.getElementById('water').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.004 + 
        0.025 + 0.02) * amount);
    ingredientQuantities['flour'].innerText = flour;
    ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
    ingredientQuantities['yeast'].innerText = Math.round(flour * 0.4 ) / 100; // redondeado
    ingredientQuantities['oil'].innerText = Math.round(flour * 2.5 ) / 100; // redondeado
    ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
    ingredientQuantities['sugar'].innerText = Math.round(flour * 2 / 100);
} 

-----------------------------


function obtainFinalQuantities(pizzaType){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let water = document.getElementById('water').value;
    let salt = document.getElementById('salt').value;

    if (pizzaType === napo){
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.002) * 
        amount);
        ingredientQuantities['flour'].innerText = flour;
        ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
        ingredientQuantities['yeast'].innerText = Math.round(flour * 0.02 ) / 10; // redondeado
        ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
        ingredientQuantities['oil'].innerText = 0;
        ingredientQuantities['sugar'].innerText = 0;            

    } else if (pizzaType === sici){
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.03 
            /*lev+aceit*/) * amount);
        ingredientQuantities['flour'].innerText = flour;
        ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
        ingredientQuantities['yeast'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
        ingredientQuantities['oil'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
        ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
        ingredientQuantities['sugar'].innerText = 0;
            
    } else {
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.004 + 
            0.025 + 0.02) * amount); // ny style pizza
        ingredientQuantities['flour'].innerText = flour;
        ingredientQuantities['water'].innerText = Math.round(flour * water / 100);
        ingredientQuantities['yeast'].innerText = Math.round(flour * 0.4 ) / 100; // redondeado
        ingredientQuantities['oil'].innerText = Math.round(flour * 2.5 ) / 100; // redondeado
        ingredientQuantities['salt'].innerText = Math.round(flour * salt / 100);
        ingredientQuantities['sugar'].innerText = Math.round(flour * 2 / 100);
    }

}