function content() {

function nombreUsuario(){
    
  alert("Biervenidos a Aneska - Asesroria de imagen");

  let nombre = prompt("Ingrese su nombre");

  if( nombre === ''){

    nombre = prompt("Ingrese su nombre");

 }

  alert(`Bienvenido ${nombre} ya puedes empezar a reservar`);



  const servicios = [
    {id:1, asesor:"Jhon Gomez", reserva: "Barba Express", info:"Perfilado con patillera y tijeras. *Restricciones: sin ritual de toallas.", precio: 120000, horario: "8:00am"},
    {id:2, asesor:"Joao Caetano", reserva: "Barba Lord", info:"El barbero quita el volumen de la barba con sus herramientas", precio: 60000, horario: "8:00am"},
    {id:3, asesor:"Jairo Espitia", reserva: "Barba Lord Superior", info:"Corte y mantenimiento de a barba, para siempre estar impecable, incluye ritual de toallas en frío", precio: 80000, horario: "8:00am"},
  ];

let id = +prompt(('Reserva el servicio de tu interes: \n1: Barba Express \n2: Barba Lord \n3: Barba Lord Superior'));

let servicio = servicios.find(item => item.id === id);

if( servicio === undefined ){
  alert("Servicio no identificado, por favor ingresa un servicio de la lista");
}else{
  let mensaje =`${nombre} Tu asesor sera ${servicio.asesor}\n\nEl servicio de ${servicio.reserva}:\n${servicio.info} \n\n Valor: ${servicio.precio} \n Horario de ${servicio.horario}`;
  alert(mensaje);
}
 alert(`${nombre} por registrarte tienes un descuento del 20% que puedes ver por CONSOLA`);


const services = servicios.map(item => item.precio);
 const productosActualizados = servicios.map(item => {
  return {
    reserva: item.reserva,
    precio: item.precio + item.precio * 0.21 - item.precio
  }
});

console.log(productosActualizados);
alert(`${nombre} en consola encontraras el descuento de los ${servicio.precio} del \nServicio de ${servicio.reserva}`);


return nombre;

}
nombreUsuario();
}

  