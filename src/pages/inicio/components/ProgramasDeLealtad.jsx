import {
  Button,
  ButtonContainer,
  Container,
  Paragraph,
  ParagraphContainer,
  Section,
  TwoColumnsContainer,
} from 'components';
import imagenFrontal from 'assets/images/images/tarjetaBeneficios.jpg';
import { CatedralMorelia as imagenTrasera } from 'assets';
import { useRef, useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa6';

const ProgramasDeLealtad = () => {
  const [isLeftPressed, setIsLeftPressed] = useState(false);
  const cardRef = useRef(null);
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0.45 });
  const [showFront, setShowFront] = useState(true); // true = frente, false = reverso

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) scale(0.8) rotateY(90deg)';
      setTimeout(() => {
        card.style.transition = 'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
        card.style.transform = 'perspective(1000px) scale(1) rotateY(45deg) rotateX(30deg)';
      }, 100);
    }
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Flip animado
  const flipDuration = 700; // ms
  const [isFlipping, setIsFlipping] = useState(false);
  const [cardTransform, setCardTransform] = useState(
    'perspective(1000px) translateZ(40px) rotateY(45deg) rotateX(30deg)'
  );

  // Flip animado
  const handleFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowFront((prev) => !prev);
      setIsFlipping(false);
    }, flipDuration / 2);
  };

  // Movimiento 3D con mouse
  const handleMouseMove = (e) => {
    setIsHovered(true);
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Brillo siempre sigue al ratón
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const maxDist = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    const opacity = 0.45 - (dist / maxDist) * 0.35;
    setShine({ x: percentX, y: percentY, opacity });
    // Si el cursor está cerca del centro, mostrar la tarjeta plana
    if (dist < Math.min(rect.width, rect.height) * 0.12) {
      // 12% del tamaño como radio central
      setCardTransform('perspective(1000px) translateZ(40px) rotateY(0deg) rotateX(0deg)');
      return;
    }
    // Rotación solo si el botón izquierdo está presionado
    if (isLeftPressed) {
      const rotateY = ((x - centerX) / centerX) * 45;
      const rotateX = -((y - centerY) / centerY) * 30;
      setCardTransform(`perspective(1000px) translateZ(40px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
    }
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsLeftPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsLeftPressed(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setCardTransform('perspective(1000px) translateZ(40px) rotateY(45deg) rotateX(30deg)');
    setShine({ x: 100, y: 0, opacity: 0.25 });
  };

  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        <TwoColumnsContainer gridOrder="grid-col-reverse">
          {/* Tarjeta con botón para alternar */}
          <div className="flex flex-col items-center gap-4">
            <div
              id="card-container"
              ref={cardRef}
              className={`relative w-[80vw] h-[220px] md:w-[450px] md:h-[280px] rounded-[15px] shadow-2xl overflow-hidden mb-4 ${isHovered ? 'scale-105' : ''}`}
              style={{
                willChange: 'transform',
                border: isHovered ? '2.5px solid #38bdf8' : '1.5px solid #d1d5db',
                boxShadow: isHovered
                  ? '0 12px 40px 0 rgba(0,255,255,0.25), 0 1px 12px 0 rgba(0,0,0,0.18)'
                  : '0 8px 32px 0 rgba(31,38,135,0.37), inset 0 1px 12px 0 rgba(0,0,0,0.18)',
                perspective: '1000px',
                transform: cardTransform,
                transition:
                  'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.3s, border 0.3s, background 0.3s',
              }}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={(e) => {
                handleMouseLeave(e);
                setIsLeftPressed(false);
              }}>
              <div
                className="absolute inset-0 w-full h-full rounded-[15px]"
                style={{
                  perspective: '1000px',
                }}>
                <div
                  className={`absolute w-full h-full rounded-[15px] transition-transform duration-[${flipDuration}ms]`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: isFlipping ? `rotateY(${showFront ? 180 : 0}deg)` : `rotateY(${showFront ? 0 : 180}deg)`,
                    zIndex: showFront ? 2 : 1,
                    background: isDark
                      ? `#222 url(${imagenFrontal}) center/cover no-repeat`
                      : `#ececec url(${imagenFrontal}) center/cover no-repeat`,
                  }}>
                  {/* Sombra dinámica, brillo, reflejo, etc. */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      boxShadow: isHovered
                        ? `0 24px 60px 0 rgba(0,255,255,0.18), ${shine.x > 50 ? '24px' : '-24px'} 8px 32px 0 rgba(31,38,135,0.25)`
                        : '0 8px 32px 0 rgba(31,38,135,0.37)',
                      opacity: 0.7,
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${Math.max(shine.opacity * 0.18, 0.02)}) 0%, rgba(255,255,255,0.005) 70%)`,
                      mixBlendMode: 'screen',
                      opacity: 0.18,
                      filter: 'blur(1.5px)',
                      transition: 'background 0.2s',
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,0.04) 10%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.005) 80%)',
                      mixBlendMode: 'screen',
                      opacity: 0.12,
                      filter: 'blur(1.5px)',
                    }}
                  />
                  <div
                    className="absolute right-0 bottom-0 w-2/3 h-1/3 pointer-events-none"
                    style={{
                      background: 'linear-gradient(-60deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.01) 100%)',
                      borderBottomRightRadius: '15px',
                    }}
                  />
                  <audio
                    ref={audioRef}
                    src="https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b2b2.mp3"
                    preload="auto"
                    style={{ display: 'none' }}
                  />
                </div>
                <div
                  className={`absolute w-full h-full rounded-[15px] transition-transform duration-[${flipDuration}ms]`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: isFlipping
                      ? `rotateY(${showFront ? 0 : -180}deg)`
                      : `rotateY(${showFront ? -180 : 0}deg)`,
                    zIndex: showFront ? 1 : 2,
                    background: isDark
                      ? `#222 url(${imagenTrasera}) center/cover no-repeat`
                      : `#ececec url(${imagenTrasera}) center/cover no-repeat`,
                  }}>
                  {/* Sombra dinámica, brillo, reflejo, etc. */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      boxShadow: isHovered
                        ? `0 24px 60px 0 rgba(0,255,255,0.18), ${shine.x > 50 ? '24px' : '-24px'} 8px 32px 0 rgba(31,38,135,0.25)`
                        : '0 8px 32px 0 rgba(31,38,135,0.37)',
                      opacity: 0.7,
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity * 0.5}) 0%, rgba(255,255,255,0.005) 70%)`,
                      mixBlendMode: 'screen',
                      opacity: 0.5,
                      filter: 'blur(1.5px)',
                      transition: 'background 0.2s',
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[15px]"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.005) 80%)',
                      mixBlendMode: 'screen',
                      opacity: 0.22,
                      filter: 'blur(1.5px)',
                    }}
                  />
                  <div
                    className="absolute right-0 bottom-0 w-2/3 h-1/3 pointer-events-none"
                    style={{
                      background: 'linear-gradient(-60deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.01) 100%)',
                      borderBottomRightRadius: '15px',
                    }}
                  />
                </div>
              </div>
              {/* Sombra dinámica */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[15px]"
                style={{
                  boxShadow: isHovered
                    ? `0 24px 60px 0 rgba(0,255,255,0.18), ${shine.x > 50 ? '24px' : '-24px'} 8px 32px 0 rgba(31,38,135,0.25)`
                    : '0 8px 32px 0 rgba(31,38,135,0.37)',
                  opacity: 0.7,
                  zIndex: 1,
                }}
              />
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
              {/* Sonido sutil */}
              <audio
                ref={audioRef}
                src="https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b2b2.mp3"
                preload="auto"
                style={{ display: 'none' }}
              />
            </div>
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
            <ButtonContainer position="justify-center items-center w-full" distance="mt-12">
              <Button
                title={showFront ? 'Ver reverso' : 'Ver frente'}
                name="Voltear tarjeta de lealtad"
                width={'w-[210px]'}
                onClick={handleFlip}
                variant="secondary"
                icon={<FaRegEye />}
              />
              <Button
                title="Conoce Usos y Beneficios"
                name="Conoce Usos y Beneficios"
                width={'w-[380px]'}
                href="/usos-y-beneficios"
                onClick={() => window.scrollTo(0, 0)}
                variant="primary"
                icon={<FaRegEye />}
              />
            </ButtonContainer>
          </ParagraphContainer>
        </TwoColumnsContainer>
      </Container>
    </Section>
  );
};

export default ProgramasDeLealtad;
