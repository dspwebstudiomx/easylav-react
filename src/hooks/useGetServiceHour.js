const useGetServiceHour = () => {
  // Obtenemos la hora actual
  const currentTime = new Date();
  console.log(currentTime);
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTimeNow =
    currentTime.getHours() +
    ":" +
    currentTime.getMinutes() +
    ":" +
    currentTime.getSeconds();
  console.log(currentTimeNow);
  // Definimos el horario de servicio
  const openHour = 7;
  const openMinute = 30;
  const closeHour = 21;
  const closeMinute = 30;

  // Comparamos la hora actual con el horario de servicio
  const isOpen =
    (currentHour > openHour ||
      (currentHour === openHour && currentMinute >= openMinute)) &&
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMinute < closeMinute));

  return isOpen;
};

export default useGetServiceHour;
