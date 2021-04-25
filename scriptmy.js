
function Srav()
{
    d=document
    var a = Number(d.form2.x1.value)//для поля ввода a
    var b = Number(d.form2.x2.value)//для поля ввода b
    var y2 = Math.max(a,b)//Выбор максимального значения
    d.form2.y2.value=y2;
}

function Imya()
{
d=document
var admin, name; // можно объявить две переменные через запятую
name = "Арина";
admin = name;
alert( admin ); // "Арина"
}


function Vozrast()
{
if (confirm('Ваш возраст:'))
{
 var voz = prompt('Введите вюда ваш возраст');
 alert("Ваш возраст - "+voz)
 }
 let ok = confirm("Вы уверены, что это ваш возраст - " +voz)
if (ok)
 {
alert("Ну, так и быть, поверим тебе");
}
else
 {
var voz = prompt('Введите вюда ваш возраст');
 alert("Ваш возраст - "+voz)
}
}

var SecondName="Новикова";
document.getElementById("sname").innerText=SecondName;
function vozvrat()
{
document.getElementById("sname").innerText = document.getElementById("txt").value
}