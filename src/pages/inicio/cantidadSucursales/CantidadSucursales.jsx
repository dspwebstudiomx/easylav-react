import { Container, Section, TitleH2 } from 'components';
import Counter from 'components/counter/Counter';
import { useEffect, useState } from 'react';

const CantidadSucursales = () => {
  const [isCounterActive, setIsCounterActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const section = document.getElementById('contador-sucursales');
    const handleScroll = () => {
      if (section.offsetTop <= window.scrollY + window.innerHeight) {
        setIsCounterActive(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isCounterActive) {
      const intervalId = setInterval(() => {
        if (count < 10) {
          setCount(count + 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isCounterActive, count]);

  return (
    <Section id='contador-sucursales'>
      <Container>
        <div className='grid sm:grid-cols-2'>
          <div>
            <TitleH2>
              Ven y conoce nuestras sucursales
            </TitleH2>
          </div>
          <div>
            <Counter count={count} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CantidadSucursales;