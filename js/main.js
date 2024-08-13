// Data types in JS (undefined, boolean, object)

//let matn = "Salom";         //string
//let raqam = 12345;          //number
//let soz;                    //undefined
//document.write(matn);

//let rost = true;              //true & false
//document.write(rost);
//let rost = 45 == 44 ? true:false;
//document.write(rost);

//let arrayObject = [45,78,"salom","matn",true,false,"true","false","olma",123];
//console.log(arrayObject[9]);

//let oddiyObject = {ism: "Abdurauf", yoshi: 14, mahallasi: "Iqbol mahallasi"}; //key,value
//console.log(oddiyObject.ism);

//Funktion in JS

//function savatchaniTekshir(uzatilganContainer = [45,"false",false]){
//    if(uzatilganContainer.length == 0){
//        document.write("Savatchaning ichida " + uzatilganContainer.length + " dona ma'lumot bor");
//    }
//    else{
//        document.write("Savatchaning ichida " + uzatilganContainer.length + " ta ma'lumot bor");
//    }
//}
//let container = [12,"matn",78,true,"js"]
//savatchaniTekshir();

// Date in JS

let sana = new Date;

sana.setFullYear(2010);
sana.setMonth(10)
sana.setDate(22)

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyul","iyun","avgust","sentabr","oktabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","payshanba","shanba"]

document.write("Bugun " + yil + "-yil " + oylar[oy] + " oyning " + kun + "-kuni. Haftaning " + kunlar[haftaKuni] + " kuni.");


let soat = new 