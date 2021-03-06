//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 

//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + " cm, "
//     + ladoTriangulo2
//     + " cm, "
//     + baseTriangulo
//     + " cm "
// )
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + (" cm"))

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulo es " + perimetroTriangulo + (" cm"));

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triángulo es: " + areaTriangulo +  (" cm"));
console.groupEnd();

//Código del Circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo);

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo es " + diametroCirculo);

//PI
const PI = Math.PI;
//console.log("El valor de PI es: " + PI);

//Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
} 
//console.log("El perimetro del circulo es " + perimetroCirculo)

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}

//console.log("El área del circulo es: " + areaCirculo);

console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function alturaTriangulo(){
    if(ladoA != ladoB){
        console.error("Los lados a y b no son iguales");
    }else{

    }
}

console.group("Isoceles")
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

               const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
console.groupEnd