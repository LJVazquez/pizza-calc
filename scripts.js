const defaultPizzaProportions = {
    'napo': {
        'weight': 230,
        'water': 65,
        'salt': 3,
    },
    'sici': {
        'weight': 650,
        'water': 75,
        'salt': 2,
    },
    'ny': {
        'weight': 260,
        'water': 65,
        'salt': 2,
    },
};

const pizzaSelect = document.getElementById('pizza-type');
const submitBtn = document.getElementById('submit');

function ingredients(type){
    return defaultPizzaProportions[type];
}

function formDefaultValues(pizza){
    let weight = document.getElementById('dough-weight');
    let water = document.getElementById('water');
    let salt = document.getElementById('salt');
    weight.value = ingredients(pizza)['weight'];
    water.value = ingredients(pizza)['water'];
    salt.value = ingredients(pizza)['salt'];
}

const ingredientContainer = {
    'flour': document.getElementById('flour-num'),
    'water': document.getElementById('water-num'),
    'yeast': document.getElementById('yeast-num'),
    'salt': document.getElementById('salt-num'),
    'oil': document.getElementById('oil-num'),
    'sugar': document.getElementById('sugar-num')
};

function getFinalValues(pizza){
    //first grabs actual static values
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let water = document.getElementById('water').value;
    let salt = document.getElementById('salt').value;

    if (pizza === 'napo'){
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.002) * 
        amount);
        ingredientContainer['flour'].innerText = flour;
        ingredientContainer['water'].innerText = Math.round(flour * water / 100);
        ingredientContainer['yeast'].innerText = Math.round(flour * 0.02 ) / 10; // redondeado
        ingredientContainer['salt'].innerText = Math.round(flour * salt / 100);
        ingredientContainer['oil'].innerText = 0;
        ingredientContainer['sugar'].innerText = 0;

    } else if (pizza === 'sici'){
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.03 
            /*lev+aceit*/) * amount);
        ingredientContainer['flour'].innerText = flour;
        ingredientContainer['water'].innerText = Math.round(flour * water / 100);
        ingredientContainer['yeast'].innerText = Math.round(flour * 0.15 ) / 10; // redondeado
        ingredientContainer['oil'].innerText = Math.round(flour * 0.15 ) / 10; // redondeado
        ingredientContainer['salt'].innerText = Math.round(flour * salt / 100);
        ingredientContainer['sugar'].innerText = 0;

    } else if (pizza === "ny"){
        let flour = Math.round(weight / (1 + water / 100 + salt / 100 + 0.004 + 
            0.025 + 0.02) * amount);
        ingredientContainer['flour'].innerText = flour;
        ingredientContainer['water'].innerText = Math.round(flour * water / 100);
        ingredientContainer['yeast'].innerText = Math.round(flour * 0.04 ) / 10; // redondeado
        ingredientContainer['oil'].innerText = Math.round(flour * 0.25 ) / 10; // redondeado
        ingredientContainer['salt'].innerText = Math.round(flour * salt / 100);
        ingredientContainer['sugar'].innerText = Math.round(flour * 2 / 100);
    }
}

function hideEmptyIngredients(){
    if (pizzaSelect.value === 'napo'){
        document.getElementById('sizes-oil').classList.add('hidden');
        document.getElementById('sizes-sugar').classList.add('hidden');
    } else if (pizzaSelect.value === 'sici'){
        document.getElementById('sizes-oil').classList.remove('hidden');
        document.getElementById('sizes-sugar').classList.add('hidden');
    } else if (pizzaSelect.value === 'ny'){
        document.getElementById('sizes-oil').classList.remove('hidden');
        document.getElementById('sizes-sugar').classList.remove('hidden');
    }
}

function setValues(pizza){
    submitBtn.value = pizza;
    formDefaultValues(pizza);
    hideEmptyIngredients();
    getFinalValues(pizza);
}

function submit(pizza){
    hideEmptyIngredients();
    getFinalValues(pizza);
}

pizzaSelect.addEventListener('change', () => setValues(pizzaSelect.value));
submitBtn.addEventListener('click', () => submit(submitBtn.value));