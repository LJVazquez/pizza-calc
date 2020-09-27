const pizzaProp = {
    napo: {
        weight: 230,
        hidra: 65,
        salt: 3,
        oil: 1,
        pepper: 0,
    },
    sici: {
        weight: 650,
        hidra: 75,
        salt: 2,
        oil: 2,
        pepper: 0,
    },
    ny: {
        weight: 240,
        hidra: 75,
        salt: 2,
        oil: 3,
        pepper: 0,
    }
};

const napo = document.getElementById('napo');
const sici = document.getElementById('sici');
const ny = document.getElementById('ny');

function napoProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    let pepper = document.getElementById('pepper');
    weight.value = pizzaProp['napo']['weight'];
    hidra.value = pizzaProp['napo']['hidra'];
    salt.value = pizzaProp['napo']['salt'];
    oil.value = pizzaProp['napo']['oil'];
    pepper.value = pizzaProp['napo']['pepper'];
}
function siciProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    let pepper = document.getElementById('pepper');
    weight.value = pizzaProp['sici']['weight'];
    hidra.value = pizzaProp['sici']['hidra'];
    salt.value = pizzaProp['sici']['salt'];
    oil.value = pizzaProp['sici']['oil'];
    pepper.value = pizzaProp['sici']['pepper'];
}
function nyProp(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    let oil = document.getElementById('oil');
    let pepper = document.getElementById('pepper');
    weight.value = pizzaProp['ny']['weight'];
    hidra.value = pizzaProp['ny']['hidra'];
    salt.value = pizzaProp['ny']['salt'];
    oil.value = pizzaProp['ny']['oil'];
    pepper.value = pizzaProp['ny']['pepper'];
}

napo.addEventListener('click', napoProp);
sici.addEventListener('click', siciProp);
ny.addEventListener('click', nyProp);



