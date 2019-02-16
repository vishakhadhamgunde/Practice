var points= [2,35,4,5,43565,7,7343];
document.getElementById("demo1").innerHTML = points;

function sortalpha(){
    points.sort();
    document.getElementById("demo1").innerHTML = points;
}

function sortnum(){
    points.sort(function(a,b){return a-b});
    document.getElementById("demo1").innerHTML = points;
}
