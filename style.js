function Areaq(){
    let x=Number(prompt("Informe o valor X"));
    let y=Number(prompt("Informe o valor y"));
    let resultado=x*y
    alert("O resultado da área é "+resultado+"m²")
    document.getElementById('um').innerHTML=resultado
}


function Areat(){
    let x=Number(prompt("Informe o valor da base"));
    let y=Number(prompt("Informe o valor da altura"));
    let resultado=x/y
    alert("O resultado da área do triângulo é "+resultado+"m²")
    document.getElementById('dois').innerHTML=resultado
}


function Areac(){
   let c=Math.PI
   let d=Number(prompt("Informa o valor do raio do circulo"));
   let resultado=c*d**2
   alert("O resultado da área do circulo é "+resultado+"m²")
   document.getElementById('tres').innerHTML=resultado


}
function AreaT(){
    let a=Number(prompt("Informe o lado da base maior do trapézio"));
    let b=Number(prompt("Informe o lado da base menor do trapézio"));
    let c=Number(prompt("Informe o lado da altura do trapézio"));
    let resultado=(a+b)*c/2
    alert("O resultado da área do trapézio é "+resultado+"m²")
    document.getElementById('quatro').innerHTML=resultado
}


function AreaL(){
    let a=Number(prompt("Informe o lado da diagonal maior"));
    let b=Number(prompt("Informe o lado da diagonal menor"));
    let resultado=a*b/2
    alert("O resultado da área do losango é "+resultado+"m²")
    document.getElementById("cinco").innerHTML=resultado
}
