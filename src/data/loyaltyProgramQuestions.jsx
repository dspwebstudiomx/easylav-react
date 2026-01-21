import scrollToTop from 'functions/scrollToTop';
import { NavLink } from 'react-router-dom';

export const loyaltyProgramQuestions = [
  {
    id: 0,
    question: '¿Cómo se obtiene la “Tarjeta de recompensa”?',
    answer: (
      <>
        <p>
          Si eres cliente frecuente solicita a la encargada de turno en la sucursal de tu preferencia que registre tu
          “Tarjeta de Recompensa” y listo. Comienza a juntar punto y beneficios.
        </p>
        <br />
        <p>
          Si eres cliente nuevo junta 5 visitas y en la sexta solicita tu “Tarjeta de Recompensa” y comienza a ahorrar.
        </p>
      </>
    ),
  },
  {
    id: 1,
    question: '¿Cómo puedo ganar puntos con la “Tarjeta de Recompensa”?',
    answer: (
      <p>
        Cuando llegues a tu sucursal <strong>EASYLAV®</strong> dale tu “Tarjeta de Recompensa” a la encargada para con
        tus consumos acumules puntos, revisa los términos y condiciones para conocer los detalles de acumulación y
        productos participantes.
      </p>
    ),
  },
  {
    id: 2,
    question: '¿Qué hacer si pierdes o extravías tu “Tarjeta de recompensa”?',
    answer: (
      <p>
        Solicita una reposición en la sucursal de tu preferencia para que se actualicen tus datos, y cubrir el costo
        dela reposición.
      </p>
    ),
  },
  {
    id: 3,
    question: '¿Dónde puedo conocer los Terminos y condiciones para el uso de la “Tarjeta de Recompensa”?',
    answer: (
      <p>
        En la parte adversa de la “Tarjeta de recompensa” solo escanea el código QR y te dirigirá a la página WEB de
        EASYLAV.mx y en la sección de{' '}
        <NavLink
          onClick={scrollToTop}
          className="font-semibold text-secondary"
          to="/usos-y-condiciones"
          rel="noopener noreferrer">
          Programa de Lealtad
        </NavLink>
        .
      </p>
    ),
  },
];
