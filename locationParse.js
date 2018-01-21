var xmlhttp = new XMLHttpRequest();
var lb = document.getElementById('demo');
var tx = document.getElementById('txt');

function post(url) {
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.send();
}

function checkCountry(location) {
    post('https://battuta.medunes.net/api/country/code/us/?key=87930e6715aba8281eef8e907fdd8dfb'); return;
    // key = 87930e6715aba8281eef8e907fdd8dfb
    var url = 'http://battuta.medunes.net/api/country/search/?';
    var csc = location.split(',');
    for (var i = 0; i < csc.length; i++) {
        csc[i] = csc[i].trim();
    }
    console.log(csc.length);
    switch (csc.length) {
        case 0:
            // error
            break;
        case 1:
            // city
            url += 'city=' + csc[0]; break;
        case 2:
            // city, state
            console.log(csc[0] + csc[1]);
            url += 'city=' + csc[0] + '&region=' + csc[1]; break;
        case 3:
        // city, state, country
        url += 'city=' + csc[0] + '&region=' + csc[1] + '&country=' + csc[2]; break;
        default:
    }
    url += '&key=87930e6715aba8281eef8e907fdd8dfb';
    console.log(url);
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