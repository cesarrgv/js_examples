
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

console.log(reverseString(theStr));