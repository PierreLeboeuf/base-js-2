// Exercice 1
// let prenom=prompt("Quel est votre prénom?")
// let age=prompt("Quel age avez-vous ?")

// console.log(`Je m'appelle ${prenom} et j'ai ${parseInt(age) + 1}ans l'année prochaine`);

// Exercice 2

// let longRect=prompt("Quel est la longueur du rectangle ?")
// let largRect=prompt("Quel est la largeur du rectangle ?")

// console.log(`Le rectangle de longueur ${parseInt(longRect)}cm et de largeur ${parseInt(largRect)}cm a pour surface ${parseInt(longRect)*parseInt(largRect)}cm²`);

// Exercice 3

// let temp=prompt("Quel est la température en celsius ?")

// let tempKelvin = parseInt(temp) + 273.15

// console.log(`La temperature de ${parseInt(temp)}°Celsius vaut ${parseInt(temp) + 273.15} en Kelvin`);

// Exercice 4

let nombreX=prompt("Saisir un nombre X")
let nombreY=prompt("Saisir un nombre Y")

 let paragraphe = document.getElementById("p1"); // récupérer l'élement HTML
 if(parseInt(nombreX)>parseInt(nombreY)){
 paragraphe.innerHTML="X est plus grand que Y";// modifier la propriété innerHTML
 }else{
     paragraphe.innerHTML="X est plus petit que Y";// modifier la propriété innerHTML
 }

 console.log(`X=${parseInt(nombreX)} `);
 console.log(`Y=${parseInt(nombreY)} `);
 
 
