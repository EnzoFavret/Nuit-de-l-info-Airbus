let test1 = document.getElementById("croix1");
let test2 = document.getElementById("croix2");
let test3 = document.getElementById("croix3");
let test5 = document.getElementById("croix5");
let test6 = document.getElementById("croix6");
let test7 = document.getElementById("croix7");
let test8 = document.getElementById("croix8");
let test9= document.getElementById("croix9");
let test10 = document.getElementById("croix10");

let homme1 = document.getElementById("homme1");
let homme2 = document.getElementById("homme2");
let homme3 = document.getElementById("homme3");
let homme5 = document.getElementById("homme5");
let homme6 = document.getElementById("homme6");
let homme7 = document.getElementById("homme7");
let homme8 = document.getElementById("homme8");
let homme9 = document.getElementById("homme9");
let homme10 = document.getElementById("homme10");



let button1 = document.getElementById("test1");
let button2 = document.getElementById("test2");
let button3 = document.getElementById("test3");
let button5 = document.getElementById("test5");
let button6 = document.getElementById("test6");
let button7 = document.getElementById("test7");
let button8 = document.getElementById("test8");
let button9 = document.getElementById("test9");
let button10 = document.getElementById("test10");




function affichage1(){
    if(getComputedStyle(test1).display == "none"){
        test1.style.display = "flex";
        homme1.style.display = "none";
    }else{
        test1.style.display = "none";
        homme1.style.display = "flex";
    }
}

function affichage2(){
    if(getComputedStyle(test2).display == "none"){
        test2.style.display = "flex";
        homme2.style.display = "none";
    }else{
        test2.style.display = "none";
        homme2.style.display = "flex";
    }
}

function affichage3(){
    if(getComputedStyle(test3).display == "none"){
        test3.style.display = "flex";
        homme3.style.display = "none";
    }else{
        test3.style.display = "none";
        homme3.style.display = "flex";
    }
}

function affichage5(){
    if(getComputedStyle(test5).display == "none"){
        test5.style.display = "flex";
        homme5.style.display = "none";
    }else{
        test5.style.display = "none";
        homme5.style.display = "flex";
    }
}

function affichage6(){
    if(getComputedStyle(test6).display == "none"){
        test6.style.display = "flex";
        homme6.style.display = "none";
    }else{
        test6.style.display = "none";
        homme6.style.display = "flex";
    }
}


function affichage7(){
    if(getComputedStyle(test7).display == "none"){
        test7.style.display = "flex";
        homme7.style.display = "none";
    }else{
        test7.style.display = "none";
        homme7.style.display = "flex";
    }
}


function affichage8(){
    if(getComputedStyle(test8).display == "none"){
        test8.style.display = "flex";
        homme8.style.display = "none";
    }else{
        test8.style.display = "none";
        homme8.style.display = "flex";
    }
}

function affichage9(){
    if(getComputedStyle(test9).display == "none"){
        test9.style.display = "flex";
        homme9.style.display = "none";
    }else{
        test9.style.display = "none";
        homme9.style.display = "flex";
    }
}

function affichage10(){
    if(getComputedStyle(test10).display == "none"){
        test10.style.display = "flex";
        homme10.style.display = "none";
    }else{
        test10.style.display = "none";
        homme10.style.display = "flex";
    }
}

button1.onclick = affichage1;

button2.onclick = affichage2;

button3.onclick = affichage3;

button5.onclick = affichage5;

button6.onclick = affichage6;

button7.onclick = affichage7;

button8.onclick = affichage8;

button9.onclick = affichage9;

button10.onclick = affichage10;


