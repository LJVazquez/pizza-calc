const pizzaProp = {
    napo: {
        weight: 230,
        hidra: 65,
        salt: 3,
        oil: 1,
    },
    sici: {
        weight: 650,
        hidra: 75,
        salt: 2,
        oil: 2,
    },
    ny: {
        weight: 240,
        hidra: 75,
        salt: 2,
        oil: 3,
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

napo.addEventListener('click', napoProp);
sici.addEventListener('click', siciProp);
ny.addEventListener('click', nyProp);



