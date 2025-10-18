const arr = [
    { name: 'Michael', phone: '+3809513674' },
    { name: 'Tobi', phone: '+3807549432' }
];

const findPhoneByName1 = (name) => {
    for (const obj of arr) {
        if (obj.name === name) return obj.phone;
    }
};

const hashTable = {
    Michael: '+3809513674',
    Tobi: '+3807549432'
};

const findPhoneByName2 = (name) => hashTable[name];
