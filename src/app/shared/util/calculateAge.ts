// Con esta funcion obtenemos la edad en base a el año de nacimiento
export function calculateAge(dateOfBirth: string) {
  var today = new Date();

  // debido a que del servidor la fecha de nacimiento viene con el formato MM-DD-YYYY
  // hay que convertirlo a un tipo Date
  var parts = dateOfBirth.split('-');
  var birthDate = new Date(
    parseInt(parts[2]),
    parseInt(parts[0]) - 1,
    parseInt(parts[1])
  );
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
