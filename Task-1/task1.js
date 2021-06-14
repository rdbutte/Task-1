


// document.getElementById("btn").onclick = function () {
//     result()
// };

function result() {
    var eng = Number(document.getElementById("english").value);
    var sci = Number(document.getElementById("science").value);
    var mat = Number(document.getElementById("maths").value);
    var mar = Number(document.getElementById("marathi").value);
    var san = Number(document.getElementById("sanskrit").value);

    var avg = (eng + sci + mat + mar + san) / 5;
    document.getElementById("avg").value = avg;

    var per = (eng + sci + mat + mar + san) / 500 * 100;
    document.getElementById("per").value = per;

}
// result();

// var sum = eng + sci
// document.write(sum)