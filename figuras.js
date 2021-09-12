//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo
    + " cm "
)
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + (" cm"))

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es " + perimetroTriangulo + (" cm"));

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es: " + areaTriangulo +  (" cm"));
console.groupEnd();

//Código del Circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo);

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo)

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo);

console.groupEnd();