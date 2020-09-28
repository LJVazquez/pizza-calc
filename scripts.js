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

function prop(pizza){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    weight.value = ing(pizza)['weight'];
    hidra.value = ing(pizza)['hidra'];
    salt.value = ing(pizza)['salt'];
}
prop('napo');

const napo = document.getElementById('napo');
const sici = document.getElementById('sici');
const ny = document.getElementById('ny');

napo.addEventListener('click', () => prop('napo'));
sici.addEventListener('click', () => prop('sici'));
ny.addEventListener('click', () => prop('ny'));

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
    flour = Math.round(weight / 1.68);
    hidra = document.getElementById('hidra').value;
    salt = document.getElementById('salt').value;
    ingNums['flour'].innerText = flour;
    ingNums['hidra'].innerText = Math.round(flour * hidra / 100);
    ingNums['yeast'].innerText = Math.round(flour * 0.02 ) / 100; // redondeado
    ingNums['salt'].innerText = Math.round(flour * 3 / 100);
}

getNapo()

function hideIngredients(){
    if(ingNums.oil.innerText === '0'){
        document.getElementById('sizes-oil').classList.add('hidden');
    }
    if(ingNums.sugar.innerText === '0'){
        document.getElementById('sizes-sugar').classList.add('hidden');
    }

}

hideIngredients();