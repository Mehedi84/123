var countData = 0;

function countPress(data){
    countData +=data;
    document.getElementById("count").innerHTML=countData;
}
function countEvenNumber(num){
    countData +=num;
    if(countData % 2 == 0){
        document.getElementById("count").innerHTML=countData;
    }
}
function countOddNumber(num){
    countData +=num;
    if(countData % 2 == 1){
        document.getElementById("count").innerHTML=countData;
    }
}