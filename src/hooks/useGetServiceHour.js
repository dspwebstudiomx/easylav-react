import { localservices } from "data";

const useGetServiceHour = () => {
  // Obtenemos la hora actual
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // Definimos el horario de servicio
  const openHours = localservices.map((sucursal) => sucursal.openHour);
  console.log(openHours);
  const openMinutes = localservices.map((sucursal) => sucursal.openMinute);
  console.log(openMinutes);
  const closeHours = localservices.map((sucursal) => sucursal.closeHour);
  console.log(closeHours);
  const closeMinutes = localservices.map((sucursal) => sucursal.closeMinute);
  console.log(closeMinutes);

  // Comparamos la hora actual con el horario de servicio
  const isOpen = localservices.map((sucursal, index) => {
    const openTime = openHours[index] * 60 + openMinutes[index];
    console.log(openTime); // Convertir a minutos
    const closeTime = closeHours[index] * 60 + closeMinutes[index];
    console.log(closeTime); // Convertir a minutos
    const currentTimeInMinutes = currentHour * 60 + currentMinute; // Convertir a minutos
    console.log(currentTimeInMinutes); // Convertir a minutos

    return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
  });
  console.log(isOpen);
  return isOpen;
};

export default useGetServiceHour;
