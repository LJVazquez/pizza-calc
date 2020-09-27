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

function napoProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = pizzaProp['napo']['weight'];
    hidra.value = pizzaProp['napo']['hidra'];
    salt.value = pizzaProp['napo']['salt'];
    oil.value = pizzaProp['napo']['oil'];
}
function siciProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = pizzaProp['sici']['weight'];
    hidra.value = pizzaProp['sici']['hidra'];
    salt.value = pizzaProp['sici']['salt'];
    oil.value = pizzaProp['sici']['oil'];
}
function nyProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = pizzaProp['ny']['weight'];
    hidra.value = pizzaProp['ny']['hidra'];
    salt.value = pizzaProp['ny']['salt'];
    oil.value = pizzaProp['ny']['oil'];
}

function argProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    weight.value = pizzaProp['arg']['weight'];
    hidra.value = pizzaProp['arg']['hidra'];
    salt.value = pizzaProp['arg']['salt'];
    oil.value = pizzaProp['arg']['oil'];
}

napo.addEventListener('click', napoProp);
sici.addEventListener('click', siciProp);
ny.addEventListener('click', nyProp);
arg.addEventListener('click', argProp);



