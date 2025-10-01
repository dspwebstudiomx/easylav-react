import { Container, Paragraph, ParagraphContainer, Section, TwoColumnsContainer } from 'components';
import imagen from 'assets/images/images/tarjetaBeneficios.jpg';

import { useRef } from 'react';
import { useState } from 'react';

const ProgramasDeLealtad = () => {
  const cardRef = useRef(null);
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0.45 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Rango de rotación
    const rotateY = ((x - centerX) / centerX) * 45;
    const rotateX = -((y - centerY) / centerY) * 30;
    card.style.transform = `perspective(1000px) translateZ(40px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // Brillo dinámico
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    // Opacidad más fuerte cerca del centro
    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const maxDist = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    const opacity = 0.45 - (dist / maxDist) * 0.35;
    setShine({ x: percentX, y: percentY, opacity });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) translateZ(40px) rotateY(45deg) rotateX(30deg)';
    }
    // Brillo en la esquina superior derecha
    setShine({ x: 100, y: 0, opacity: 0.25 });
  };

  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        {/* <TitleContainer title="Programas de Lealtad" /> */}

        <TwoColumnsContainer gridOrder="grid-col-reverse">
          <div
            ref={cardRef}
            className="relative w-[80vw] h-[220px] md:w-[450px] md:h-[280px] rounded-[15px] shadow-2xl transition-transform duration-300 overflow-hidden mb-16 ml-4 md:ml-0"
            style={{
              willChange: 'transform',
              background: `#ececec url(${imagen}) center/cover no-repeat`,
              border: '1.5px solid #d1d5db',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37), inset 0 1px 12px 0 rgba(0,0,0,0.18)',
              transform: 'perspective(1000px) translateZ(40px) rotateY(45deg) rotateX(30deg)',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            {/* Brillo dinámico */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[15px]"
              style={{
                background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}) 0%, rgba(255,255,255,0.01) 70%)`,
                mixBlendMode: 'screen',
                opacity: 1,
                filter: 'blur(1.5px)',
                transition: 'background 0.2s',
              }}
            />
            {/* Reflejo realista */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[15px]"
              style={{
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.35) 10%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.01) 80%)',
                mixBlendMode: 'screen',
                opacity: 0.7,
                filter: 'blur(1.5px)',
              }}
            />
            {/* Sombra inferior derecha */}
            <div
              className="absolute right-0 bottom-0 w-2/3 h-1/3 pointer-events-none"
              style={{
                background: 'linear-gradient(-60deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.01) 100%)',
                borderBottomRightRadius: '15px',
              }}
            />
          </div>
          <ParagraphContainer>
            <Paragraph>
              <div className="text-xl flex flex-col gap-8 items-start justify-start">
                <span className="text-secondary_dark dark:text-secondary_light text-3xl md:text-5xl font-bold block">
                  ¡Tu lealtad tiene recompensas!
                </span>
                <span>
                  Cada vez que uses nuestros servicios, acumulas puntos que puedes canjear por productos o usos de
                  máquinas. Además, como cliente fiel, participas en nuestra tómbola especial, donde puedes ganar
                  sorpresas y hasta servicios gratis. ¡Únete y deja que te sorprendamos mientras lavas con nosotros!
                </span>
              </div>
            </Paragraph>
          </ParagraphContainer>
        </TwoColumnsContainer>
      </Container>
    </Section>
  );
};

export default ProgramasDeLealtad;
