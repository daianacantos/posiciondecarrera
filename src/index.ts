let posicionDeCarrera: number = prompt("ingrese posicion de carrera");
switch (posicionDeCarrera) {
  case 1:
    console.log("gano oro");
    break;
  case 2:
    console.log("gano plata");
    break;
  case 3:
    console.log("gano bronce");
    break;
  default:
    console.log("usted no gano nada");
    break;
}
