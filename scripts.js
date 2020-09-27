const napoDict = {
    weight: 230,
    hidra: 65,
    salt: 3,
};

const siciDict = {
    weight: 650,
    hidra: 75,
    salt: 2,
}

const napo = document.getElementById('napo');
const sici = document.getElementById('sici');

napo.addEventListener('click', function(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    weight.value = napoDict['weight'];
    hidra.value = napoDict['hidra'];
    salt.value = napoDict['salt'];
})

sici.addEventListener('click', function(){
    let weight = document.getElementById('dough-weight');
    let hidra = document.getElementById('hidra');
    let salt = document.getElementById('salt');
    weight.value = siciDict['weight'];
    hidra.value = siciDict['hidra'];
    salt.value = siciDict['salt'];
})

