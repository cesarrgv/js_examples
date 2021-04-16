
var theStr = `     .esnes sserd ro tnecca ,gnignirbpu sa hcus syaw eltbus ,rellams ni tub ,redneg ro ecar ,ega sa hcus scitsiretcarahc suoivbo ni tsuj ton – reffid ohw esoht fo yraw dna ralimis era ohw esoht sdrawot nward eb ot desopsiderp era snamuH :saiB ytiralimiS
.seigoloedi rehto ro ,sfeileb lacitilop ,sfeileb suoigiler ,seitiliba lacisyhp ,ega ,sutats cimonoce-oicos ,noitatneiro lauxes ,redneg ,yticinhte ,ecar fo snoisnemid eht gnola tsixe secnereffiD .euqinu si laudividni hcae gnizingoceR :ecnereffiD gnitarbeleC
.gnihtemos fo trap tnatropmi na eb ot erised tnerehni nA .puorg a fo rebmem detpecca na eb ot deen lanoitome namuh a :gnignoleB`;


function reverseString(theStr){
    var newStr = "";
    for(var i=theStr.length-1; i>0; i--){
        newStr += theStr.charAt(i);
    }
    return newStr;
    
}

function chessBoardCellColor(cell1, cell2) {
    var xCell1 = cell1.charCodeAt(0) - 65 + 1;
    var yCell1 = parseInt(cell1.charAt(1));
    var xCell2 = cell2.charCodeAt(0) - 65 + 1;
    var yCell2 = parseInt(cell2.charAt(1));    
    var colorCell1 = "black";
    var colorCell2 = "black";


    var compa1 = xCell1 + yCell1;
    console.log(compa1 + " => " + (compa1)%2);
    if(compa1 % 2){
        colorCell1 = "white";
    }
    console.log(colorCell1);

    var compa2 = xCell2 + yCell2;
    console.log(compa2 + " => " + compa2%2);
    if(compa2 % 2){
        colorCell2 = "white";
    }
    
    console.log(colorCell2);
    
    if(colorCell1 == colorCell2){
        return true;
    }else{
        return false;
    }
}

//console.log(depositProfit(100,20,170));

function absoluteValuesSumMinimization(a) {
    var minNumber = 0;
    var minSum = 2147483648;
    for(var i=0; i< a.length; i++){
        sum=0;
        for(var j=0; j<a.length; j++){
            sum += Math.abs(a[j]-a[i]);
        }
        if(sum<minSum){
            minSum = sum;
            minNumber = a[i];
        }
    }
    return minNumber;
}

a=[2,4,7];
console.log(absoluteValuesSumMinimization(a));