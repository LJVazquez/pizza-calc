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

const napo = document.getElementById('napo');
const sici = document.getElementById('sici');
const ny = document.getElementById('ny');

const ingNums = {
    flour: document.getElementById('flour-num'),
    hidra: document.getElementById('hidra-num'),
    yeast: document.getElementById('yeast-num'),
    salt: document.getElementById('salt-num'),
    oil: document.getElementById('oil-num'),
    sugar: document.getElementById('sugar-num')
};

function getNapo(){
    weight = document.getElementById('dough-weight').value;
    hidra = document.getElementById('hidra').value;
    salt = document.getElementById('salt').value;
    flour = Math.round(weight / (1 + hidra / 100 + salt / 100 + 0.002));
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 0.02 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * 3 / 100);
}
function getSici(){
    weight = document.getElementById('dough-weight').value;
    hidra = document.getElementById('hidra').value;
    salt = document.getElementById('salt').value;
    flour = Math.round(weight / (1 + hidra / 100 + salt / 100 + 0.03 /*lev+aceit*/));
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingNums['oil'].innerText = Math.round(flour * 1.5 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * 2 / 100);
}

const pizzaSelect = document.getElementById('pizza-type');
pizzaSelect.addEventListener('change', () => allInOne(pizzaSelect.value));

function allInOne(pizza){
    formValues(pizza);
    if (pizza === 'napo'){
        getNapo();
    } else if(pizza === 'sici'){
        getSici();
    } else {
        getNy();
    }
}

allInOne ('napo'); // ESTABLECE VALORES POR DEFECTO AL CARGAR LA PAGINA



function hideIngredients(){
    if(ingNums.oil.innerText === '0'){
        document.getElementById('sizes-oil').classList.add('hidden');
    }
    if(ingNums.sugar.innerText === '0'){
        document.getElementById('sizes-sugar').classList.add('hidden');
    }

}
