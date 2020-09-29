const pizzaProp = {
    napo: {
        weight: 230,
        hidra: 65,
        salt: 3,
    },
    sici: {
        weight: 650,
        hidra: 75,
        salt: 2,
    },
    ny: {
        weight: 260,
        hidra: 65,
        salt: 2,
    },
};

const pizzaSelect = document.getElementById('pizza-type');
const submitBtn = document.getElementById('submit');

function ing(type){
    return pizzaProp[type];
}

function formValues(pizza){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    weight.value = ing(pizza)['weight'];
    hidra.value = ing(pizza)['hidra'];
    salt.value = ing(pizza)['salt'];
}

const ingNums = {
    flour: document.getElementById('flour-num'),
    hidra: document.getElementById('hidra-num'),
    yeast: document.getElementById('yeast-num'),
    salt: document.getElementById('salt-num'),
    oil: document.getElementById('oil-num'),
    sugar: document.getElementById('sugar-num')
};

function getNapo(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let hidra = document.getElementById('hidra').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + hidra / 100 + salt / 100 + 0.002) * 
    amount);
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 0.02 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * salt / 100);
    ingNums['oil'].innerText = 0;
    ingNums['sugar'].innerText = 0;
}
function getSici(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let hidra = document.getElementById('hidra').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + hidra / 100 + salt / 100 + 0.03 
        /*lev+aceit*/) * amount);
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingNums['oil'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * salt / 100);
    ingNums['sugar'].innerText = 0;
}
function getNy(){
    let amount = document.getElementById('amount').value;
    let weight = document.getElementById('dough-weight').value;
    let hidra = document.getElementById('hidra').value;
    let salt = document.getElementById('salt').value;
    let flour = Math.round(weight / (1 + hidra / 100 + salt / 100 + 0.004 + 
        0.025 + 0.02) * amount);
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 0.4 ) / 100; // redondeado
    ingNums['oil'].innerText = Math.round(flour * 2.5 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * salt / 100);
    ingNums['sugar'].innerText = Math.round(flour * 2 / 100);
}

function hideIngredients(){
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

function allInOne(pizza){
    submitBtn.value = pizza;
    formValues(pizza);
    hideIngredients();
    if (pizza === 'napo'){
        getNapo();
    } else if(pizza === 'sici'){
        getSici();
    } else {
        getNy();
    }
}

function submit(pizza){
    hideIngredients();
    if (pizza === 'napo'){
        getNapo();
    } else if(pizza === 'sici'){
        getSici();
    } else {
        getNy();
    }
}

allInOne ('napo'); // ESTABLECE VALORES POR DEFECTO AL CARGAR LA PAGINA
pizzaSelect.addEventListener('change', () => allInOne(pizzaSelect.value));
submitBtn.addEventListener('click', () => submit(submitBtn.value));