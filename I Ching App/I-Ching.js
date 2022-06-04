const click = document.getElementById('click');
click.addEventListener("click", flipSix);
const flipArray = [];
const valArray = [];

//coin flip function
function flipCoin() {
  let result = Math.floor(Math.random() * 2); 
 if (result === 0) {
   document.getElementById("output").innerHTML = "yin"
   console.log("yin")
   flipArray.unshift("Yin")
   valArray.unshift(0)
  } else if (result === 1 ) {
  document.getElementById("output").innerHTML = "yang"
    console.log("yang")
    flipArray.unshift("Yang")
    valArray.unshift(1)
    
  }
}
function resetIChingText() {
     const displayReset = document.getElementsByClassName("iChingText"); 
    for(var i = 0; i < displayReset.length; i++){
        displayReset[i].style.display = "none"; 
}

}
 
//gets the values of the six lines in a hexagram
function flipSix() {
  //reset arrays and text display
  flipArray.length= 0;
  valArray.length= 0; 
  resetIChingText()
  //flip 6 coins
  for (let i = 0; i < 6; i++) {
  flipCoin();    
  //prints the result and converts to key 
  if (flipArray.length === 6) {
 const hexagram = valArray.join("");
 const flip = flipArray.join(", ");
  document.getElementById("output").innerHTML = flipArray;  
    console.log(hexagram);
    
  //pulls hexagram by key. very long section
    //there are 64 cases. it is the end of the code
    //based on the traditional binary representations of the hexagrams  
    switch (hexagram) {
case "111111": //1
  document.getElementById("value").innerHTML = 1;
  document.getElementById("hexagram1").style.display = "block";
  break;
        
case "000000": //2
  document.getElementById("value").innerHTML = 2;
  document.getElementById("hexagram2").style.display = "block";
  break;
        
case "010001": //3
  document.getElementById("value").innerHTML = 3;
  document.getElementById("hexagram3").style.display = "block";
  break;
        
case "100010": //4
  document.getElementById("value").innerHTML = 4;
  document.getElementById("hexagram4").style.display = "block";
  break;
        
case "010111": //5
  document.getElementById("value").innerHTML = 5;
  document.getElementById("hexagram5").style.display = "block";
  break;
        
case "111010": //6
  document.getElementById("value").innerHTML = 6;
  document.getElementById("hexagram6").style.display = "block";
  break;
        
case "000010": //7
  document.getElementById("value").innerHTML = 7;
  document.getElementById("hexagram7").style.display = "block";
  break;
        
case "010000": //8
  document.getElementById("value").innerHTML = 8;
  document.getElementById("hexagram8").style.display = "block";
  break;  
        
case "110111": //9
  document.getElementById("value").innerHTML = 9;
  document.getElementById("hexagram9").style.display = "block";
  break;
        
case "111011": //10
  document.getElementById("value").innerHTML = 10;
  document.getElementById("hexagram10").style.display = "block";
  break;
        
case "000111": //11
  document.getElementById("value").innerHTML = 11;
  document.getElementById("hexagram11").style.display = "block";
  break;
        
case "111000": //12
  document.getElementById("value").innerHTML = 12;
  document.getElementById("hexagram12").style.display = "block";
  break;
        
case "111101": //13
  document.getElementById("value").innerHTML = 13;
  document.getElementById("hexagram13").style.display = "block";
  break;
        
case "101111": //14
  document.getElementById("value").innerHTML = 14;
  document.getElementById("hexagram14").style.display = "block";  
  break;
        
case "000100": //15
  document.getElementById("value").innerHTML = 15;
  document.getElementById("hexagram15").style.display = "block";
  break;
        
case "001000": //16
  document.getElementById("value").innerHTML = 16;
  document.getElementById("hexagram16").style.display = "block";  
  break;
        
case "011001": //17
  document.getElementById("value").innerHTML = 17;
  document.getElementById("hexagram17").style.display = "block";  
  break;
        
case "100110": //18
  document.getElementById("value").innerHTML = 18;
  document.getElementById("hexagram18").style.display = "block";  
  break;
        
case "000011": //19
  document.getElementById("value").innerHTML = 19;
  document.getElementById("hexagram19").style.display = "block";
  break;
        
case "110000": //20
  document.getElementById("value").innerHTML = 20;
  document.getElementById("hexagram20").style.display = "block";
  break;
        
case "101001": //21
  document.getElementById("value").innerHTML = 21;
  document.getElementById("hexagram21").style.display = "block";
  break;
        
case "100101": //22
  document.getElementById("value").innerHTML = 22;
  document.getElementById("hexagram22").style.display = "block";  
  break;
        
case "100000": //23
  document.getElementById("value").innerHTML = 23;
  document.getElementById("hexagram23").style.display = "block";  
  break;
        
case "000001": //24
  document.getElementById("value").innerHTML = 24;
  document.getElementById("hexagram24").style.display = "block";  
  break;
        
case "111001": //25
  document.getElementById("value").innerHTML = 25;
  document.getElementById("hexagram25").style.display = "block";  
  break;
        
case "100111": //26
  document.getElementById("value").innerHTML = 26;
  document.getElementById("hexagram26").style.display = "block";  
  break;
        
case "100001": //27
  document.getElementById("value").innerHTML = 27;
  document.getElementById("hexagram27").style.display = "block";  
  break;
        
case "011110": //28
  document.getElementById("value").innerHTML = 28;
  document.getElementById("hexagram28").style.display = "block";  
  break;
        
case "010010": //29
  document.getElementById("value").innerHTML = 29;
  document.getElementById("hexagram29").style.display = "block";  
  break;
        
case "101101": //30
  document.getElementById("value").innerHTML = 30;
  document.getElementById("hexagram30").style.display = "block";  
  break;
        
case "011100": //31
  document.getElementById("value").innerHTML = 31;
  document.getElementById("hexagram31").style.display = "block";  
  break;
        
case "001110": //32
  document.getElementById("value").innerHTML = 32;
  document.getElementById("hexagram32").style.display = "block";  
  break;
        
case "111100": //33
  document.getElementById("value").innerHTML = 33;
  document.getElementById("hexagram33").style.display = "block";  
  break;
        
case "001111": //34
  document.getElementById("value").innerHTML = 34;
  document.getElementById("hexagram34").style.display = "block";  
  break;
        
case "101000": //35
  document.getElementById("value").innerHTML = 35;
  document.getElementById("hexagram35").style.display = "block";  
  break;
        
case "000101": //36
  document.getElementById("value").innerHTML = 36;
  document.getElementById("hexagram36").style.display = "block";  
  break;
        
case "110101": //37
  document.getElementById("value").innerHTML = 37;
  document.getElementById("hexagram37").style.display = "block";  
  break;
        
case "101011": //38
  document.getElementById("value").innerHTML = 38;
  document.getElementById("hexagram38").style.display = "block";  
  break;
        
case "010100": //39
  document.getElementById("value").innerHTML = 39;
  document.getElementById("hexagram39").style.display = "block";  
  break;
        
case "001010": //40
  document.getElementById("value").innerHTML = 40;
  document.getElementById("hexagram40").style.display = "block";  
  break;
        
case "100011": //41
  document.getElementById("value").innerHTML = 41;
  document.getElementById("hexagram41").style.display = "block";  
  break;
        
case "110001": //42
  document.getElementById("value").innerHTML = 42;
  document.getElementById("hexagram42").style.display = "block";  
  break;
        
case "011111": //43
  document.getElementById("value").innerHTML = 43;
  document.getElementById("hexagram43").style.display = "block";  
  break;
        
case "111110": //44
  document.getElementById("value").innerHTML = 44;
  document.getElementById("hexagram44").style.display = "block";  
  break;
        
case "011000": //45
  document.getElementById("value").innerHTML = 45;
  document.getElementById("hexagram45").style.display = "block";  
  break;
        
case "000110": //46
  document.getElementById("value").innerHTML = 46;
  document.getElementById("hexagram46").style.display = "block";  
  break;
        
case "011010": //47
  document.getElementById("value").innerHTML = 47;
  document.getElementById("hexagram47").style.display = "block";  
  break;
        
case "010110": //48
  document.getElementById("value").innerHTML = 48;
  document.getElementById("hexagram48").style.display = "block";  
  break;
        
case "011101": //49
  document.getElementById("value").innerHTML = 49;
  document.getElementById("hexagram49").style.display = "block";  
  break;
        
case "101110": //50
  document.getElementById("value").innerHTML = 50;
  document.getElementById("hexagram50").style.display = "block";  
  break;
        
case "001001": //51
  document.getElementById("value").innerHTML = 51;
  document.getElementById("hexagram51").style.display = "block";  
  break;
        
case "100100": //52
  document.getElementById("value").innerHTML = 52;
  document.getElementById("hexagram52").style.display = "block";  
  break;
        
case "110100": //53
  document.getElementById("value").innerHTML = 53;
  document.getElementById("hexagram53").style.display = "block";  
  break;
        
case "001011": //54
  document.getElementById("value").innerHTML = 54;
  document.getElementById("hexagram54").style.display = "block";  
  break;
        
case "001101": //55
  document.getElementById("value").innerHTML = 55;
  document.getElementById("hexagram55").style.display = "block";  
  break;
        
case "101100": //56
  document.getElementById("value").innerHTML = 56;
  document.getElementById("hexagram56").style.display = "block";  
  break;
        
case "110110": //57
  document.getElementById("value").innerHTML = 57;
  document.getElementById("hexagram57").style.display = "block";  
  break;
        
case "011011": //58
  document.getElementById("value").innerHTML = 58;
  document.getElementById("hexagram58").style.display = "block";  
  break;
        
case "110010": //59
  document.getElementById("value").innerHTML = 59;
  document.getElementById("hexagram59").style.display = "block";  
  break;
        
case "010011": //60
  document.getElementById("value").innerHTML = 60;
  document.getElementById("hexagram60").style.display = "block";  
  break;
        
case "110011": //61
  document.getElementById("value").innerHTML = 61;
  document.getElementById("hexagram61").style.display = "block";  
  break;
        
case "001100": //62
  document.getElementById("value").innerHTML = 62;
  document.getElementById("hexagram62").style.display = "block";  
  break;
        
case "010101": //63
  document.getElementById("value").innerHTML = 63;
  document.getElementById("hexagram63").style.display = "block";  
  break;
        
case "101010": //64
  document.getElementById("value").innerHTML = 64;
  document.getElementById("hexagram64").style.display = "block";  
  break;
        
default: 
  console.log(error);

        
    }
 }
    
} 
}
