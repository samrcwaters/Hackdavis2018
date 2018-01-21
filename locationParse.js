var xmlhttp = new XMLHttpRequest();
var lb = document.getElementById('demo');
var tx = document.getElementById('txt');

function post(url) {
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function checkCountry(location) {
    // key = 87930e6715aba8281eef8e907fdd8dfb
    var url = 'http://battuta.medunes.net/api/country/code/us/?key=87930e6715aba8281eef8e907fdd8dfb';
    var csc = [];
    csc = location.split(',');
    for (var i = 0; i < csc.length; i++) {
        csc.trim();
    }
    switch (csc.length) {
        case 0:

        case 1:

        case 2:

        case 3:

        default:
    }
    post(url);
    // post('https://restcountries.eu/rest/v2/name/' + location);
}

function onClick() {
    checkCountry(tx.value);
}

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        try {
            lb.innerHTML = JSON.parse(this.responseText);
        }
        catch (ex) {
            lb.innerHTML = "Connection Error";
        }
    }
    else {
        lb.innerHTML = "This is not a country!";
    }
};