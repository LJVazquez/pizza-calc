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

function ing(pizza){
    return pizzaProp[pizza];
}
function napoProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = ing('napo')['weight'];
    hidra.value = ing('napo')['hidra'];
    salt.value = ing('napo')['salt'];
    oil.value = ing('napo')['oil'];
}

function siciProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = ing('sici')['weight'];
    hidra.value = ing('sici')['hidra'];
    salt.value = ing('sici')['salt'];
    oil.value = ing('sici')['oil'];
}
function nyProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = ing('ny')['weight'];
    hidra.value = ing('ny')['hidra'];
    salt.value = ing('ny')['salt'];
    oil.value = ing('ny')['oil'];
}

function argProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = ing('arg')['weight'];
    hidra.value = ing('arg')['hidra'];
    salt.value = ing('arg')['salt'];
    oil.value = ing('arg')['oil'];
}

napo.addEventListener('click', napoProp);
sici.addEventListener('click', siciProp);
ny.addEventListener('click', nyProp);
arg.addEventListener('click', argProp);



