import { localservices } from "data";

const useGetServiceHour = () => {
  // Obtenemos la hora actual
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // Definimos el horario de servicio
  const openHours = localservices.map((sucursal) => sucursal.openHour);
  const openMinutes = localservices.map((sucursal) => sucursal.openMinute);
  const closeHours = localservices.map((sucursal) => sucursal.closeHour);
  const closeMinutes = localservices.map((sucursal) => sucursal.closeMinute);

  // Comparamos la hora actual con el horario de servicio
  const isOpen = localservices.map((sucursal, index) => {
    const openTime = openHours[index] * 60 + openMinutes[index];
    const closeTime = closeHours[index] * 60 + closeMinutes[index];
    const currentTimeInMinutes = currentHour * 60 + currentMinute; // Convertir a minutos

    return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
  });
  return isOpen;
};

export default useGetServiceHour;
