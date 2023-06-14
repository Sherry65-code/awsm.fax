const apiKey = 'j03LhzS0mC0ecLLCU9MiRw==3kWHC26rev8vNwVn';

var fact = "";

function tellafax() {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
            'X-Api-Key': `${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        fact = `${data[0].fact}`;
        console.log(fact);
        tipe(fact);
    })
    .catch(error => {
        fact = "Error - API not responding";
        console.error(error);
    });
}

var len;
var str;
var i = 0;

function tipe(whattotype) {
    str = whattotype.split('');
    len = str.length;
    i = 0;
    document.getElementById('fact').innerHTML = '';
    type();
}

function type() {
    if (i >= len) return;
    document.getElementById('fact').innerHTML += str[i];
    i += 1;
    setTimeout(type, 50);
}

tellafax();
