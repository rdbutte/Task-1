


var myarr = [];

function addTo() {
    myarr.push(document.getElementById("marks").value);
    console.log(myarr); //to confirm it has been added to the array 
}

function avg() {
    var sum = 0;
    for (var i = 0; i < myarr.length; i++) {
        sum = sum + parseInt(myarr[i]) // parse int because when html give js code then it will pass string not number
    }
    console.log(sum); // to confirm sum of array elements
    var average = sum / myarr.length
    document.getElementById("avgg").value = average;

}