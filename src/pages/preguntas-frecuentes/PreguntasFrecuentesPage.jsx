/*
  PreguntasFrecuentes - Component - Page
  ========================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Modificado: 2025-04-01
  Descripción: Se agregó lógica para controlar el estado de los acordeones, permitiendo que solo uno esté abierto a la vez.
*/

// Importaciones
import { PageLayout } from 'components';
import PreguntasFrecuentes from 'components/templates/PreguntasFrecuentes/PreguntasFrecuentes';

// <Estructura></Estructura>
const PreguntasFrecuentesPage = () => {
  return (
    <PageLayout id="preguntas-frecuentes">
      <PreguntasFrecuentes />
    </PageLayout>
  );
};

export default PreguntasFrecuentesPage;
