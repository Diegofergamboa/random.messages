const messages = [
    "diego" ,
    "jose" ,
    "jessica" ,
    "ana" ,
    "oscar" ,
    "peter" ,
    "laura" ,
    "peterrrr" ,
    "juan" ,
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg } ;