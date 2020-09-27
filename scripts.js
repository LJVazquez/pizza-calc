const pizzaProp = {
    napo: {
        weight: 230,
        hidra: 65,
        salt: 3,
        oil: 0,
    },
    sici: {
        weight: 650,
        hidra: 75,
        salt: 2,
        oil: 0,
    },
    ny: {
        weight: 260,
        hidra: 75,
        salt: 2,
        oil: 0,
    },
    arg: {
        weight: 625,
        hidra: 56,
        salt: 2,
        oil: 3,
    }
};

const napo = document.getElementById('napo');
const sici = document.getElementById('sici');
const ny = document.getElementById('ny');
const arg = document.getElementById('arg');

function ing(type){
    return pizzaProp[type];
}

function prop(pizza){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = ing(pizza)['weight'];
    hidra.value = ing(pizza)['hidra'];
    salt.value = ing(pizza)['salt'];
    oil.value = ing(pizza)['oil'];
}

napo.addEventListener('click', () => prop('napo'));
sici.addEventListener('click', () => prop('sici'));
ny.addEventListener('click', () => prop('ny'));
arg.addEventListener('click', () => prop('arg'));
