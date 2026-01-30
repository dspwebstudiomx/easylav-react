import { useRef, useEffect, useState, useMemo, useCallback, memo } from 'react';
import imagenFrontal from 'assets/images/images/tarjetaBeneficios.jpg';
import PropTypes from 'prop-types';
import { qrRecompensas } from 'assets';

// Constantes para evitar recreación en cada render
const cardConstants = {
  initialTransform: 'perspective(1000px) translateZ(40px) rotateY(45deg) rotateX(30deg)',
  flatTransform: 'perspective(1000px) translateZ(40px) rotateY(0deg) rotateX(0deg)',
  initialScaleTransform: 'perspective(1000px) scale(0.8) rotateY(90deg)',
  finalScaleTransform: 'perspective(1000px) scale(1) rotateY(45deg) rotateX(30deg)',
  transitionTiming: 'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
  centerThreshold: 0.12,
  maxRotationY: 45,
  maxRotationX: 30,
  initialShine: { x: 50, y: 50, opacity: 0.45 },
  leaveShine: { x: 100, y: 0, opacity: 0.25 },
};

// Estilos de efectos comunes memoizados
const effectStyles = {
  pointerEventsNone: 'pointer-events-none absolute inset-0 rounded-[15px]',
  cardBase: 'absolute w-full h-full rounded-[15px]',
};

// Componente memoizado para efectos visuales compartidos
const EffectLayers = memo(({ shine, isHovered, opacity = 0.18, shineMultiplier = 1 }) => {
  const shadowStyle = useMemo(
    () => ({
      boxShadow: isHovered
        ? `0 24px 60px 0 rgba(0,255,255,0.18), ${shine.x > 50 ? '24px' : '-24px'} 8px 32px 0 rgba(31,38,135,0.25)`
        : '0 8px 32px 0 rgba(31,38,135,0.37)',
      opacity: 0.7,
      zIndex: 1,
    }),
    [isHovered, shine.x]
  );

  const shineStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${Math.max(shine.opacity * 0.18 * shineMultiplier, 0.02)}) 0%, rgba(255,255,255,0.005) 70%)`,
      mixBlendMode: 'screen',
      opacity,
      filter: 'blur(1.5px)',
      transition: 'background 0.2s',
    }),
    [shine, opacity, shineMultiplier]
  );

  const reflectStyle = useMemo(
    () => ({
      background:
        'linear-gradient(120deg, rgba(255,255,255,0.04) 10%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.005) 80%)',
      mixBlendMode: 'screen',
      opacity: 0.12,
      filter: 'blur(1.5px)',
    }),
    []
  );

  return (
    <>
      {/* Sombra dinámica */}
      <div className={effectStyles.pointerEventsNone} style={shadowStyle} />
      {/* Brillo dinámico */}
      <div className={effectStyles.pointerEventsNone} style={shineStyle} />
      {/* Reflejo realista */}
      <div className={effectStyles.pointerEventsNone} style={reflectStyle} />
    </>
  );
});

EffectLayers.displayName = 'EffectLayers';

// Componente interno memoizado para la parte frontal de la tarjeta
const TarjetaFrente = memo(({ isFlipping, showFront, flipDuration, isDark, shine, isHovered }) => {
  const transformStyle = useMemo(
    () => ({
      backfaceVisibility: 'hidden',
      transform: isFlipping ? `rotateY(${showFront ? 180 : 0}deg)` : `rotateY(${showFront ? 0 : 180}deg)`,
      zIndex: showFront ? 2 : 1,
      background: isDark
        ? `#222 url(${imagenFrontal}) center/contain no-repeat`
        : `#ececec url(${imagenFrontal}) center/contain no-repeat`,
    }),
    [isFlipping, showFront, isDark]
  );

  const shadowCornerStyle = useMemo(
    () => ({
      background: 'linear-gradient(-60deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.01) 100%)',
      borderBottomRightRadius: '15px',
    }),
    []
  );

  return (
    <div
      className={`${effectStyles.cardBase} transition-transform duration-[${flipDuration}ms]`}
      style={transformStyle}>
      <EffectLayers shine={shine} isHovered={isHovered} />
      {/* Sombra inferior derecha */}
      <div className="absolute right-0 bottom-0 w-2/3 h-1/3 pointer-events-none" style={shadowCornerStyle} />
    </div>
  );
});

TarjetaFrente.displayName = 'TarjetaFrente';

// Componente interno memoizado para la parte trasera de la tarjeta
const TarjetaTrasera = memo(({ isFlipping, showFront, flipDuration, shine, isHovered }) => {
  const transformStyle = useMemo(
    () => ({
      backfaceVisibility: 'hidden',
      transform: isFlipping ? `rotateY(${showFront ? 0 : -180}deg)` : `rotateY(${showFront ? -180 : 0}deg)`,
      zIndex: showFront ? 1 : 2,
    }),
    [isFlipping, showFront]
  );

  const shadowCornerStyle = useMemo(
    () => ({
      background: 'linear-gradient(-60deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.01) 100%)',
      borderBottomRightRadius: '15px',
    }),
    []
  );

  return (
    <div
      className={`${effectStyles.cardBase} transition-transform duration-[${flipDuration}ms] bg-light`}
      style={transformStyle}>
      {/* Código QR en la esquina inferior derecha */}
      <div className="absolute inset-0">
        <img
          src={qrRecompensas}
          alt="Código QR"
          className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24"
          title="codigo QR Tarjeta Beneficios"
          loading="lazy"
        />
      </div>
      <EffectLayers shine={shine} isHovered={isHovered} opacity={0.5} shineMultiplier={2.5} />
      {/* Sombra inferior derecha */}
      <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none" style={shadowCornerStyle} />
    </div>
  );
});

TarjetaTrasera.displayName = 'TarjetaTrasera';

// Custom hook para manejar la lógica del mouse
const useCardInteraction = () => {
  const [isLeftPressed, setIsLeftPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState(cardConstants.initialShine);
  const [cardTransform, setCardTransform] = useState(cardConstants.initialTransform);
  const cardRef = useRef(null);
  const audioRef = useRef(null);
  const lastMoveTime = useRef(0);

  const handleMouseMove = useCallback(
    (e) => {
      // Throttling para mejor rendimiento (60 FPS)
      const now = Date.now();
      if (now - lastMoveTime.current < 16) return; // ~60 FPS
      lastMoveTime.current = now;

      setIsHovered(true);
      const card = cardRef.current;
      if (!card) return;

      try {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Optimizar cálculos
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2);
        const opacity = Math.max(0.1, 0.45 - (dist / maxDist) * 0.35);

        setShine({ x: percentX, y: percentY, opacity });

        // Centro plano
        if (dist < Math.min(rect.width, rect.height) * cardConstants.centerThreshold) {
          setCardTransform(cardConstants.flatTransform);
          return;
        }

        // Rotación con botón presionado
        if (isLeftPressed) {
          const rotateY = ((x - centerX) / centerX) * cardConstants.maxRotationY;
          const rotateX = -((y - centerY) / centerY) * cardConstants.maxRotationX;
          setCardTransform(`perspective(1000px) translateZ(40px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
        }
      } catch (error) {
        console.warn('Error in handleMouseMove:', error);
      }
    },
    [isLeftPressed]
  );

  const handleMouseDown = useCallback((e) => {
    if (e.button === 0) setIsLeftPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsLeftPressed(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        // Manejar la promesa de play() para evitar errores no capturados
        audioRef.current.play().catch((e) => {
          // Silently handle audio play failures (common in modern browsers)
          console.debug('Audio play prevented:', e.message);
        });
      }
    } catch (error) {
      console.debug('Audio error:', error.message);
    }
    setCardTransform(cardConstants.initialTransform);
    setShine(cardConstants.leaveShine);
    setIsLeftPressed(false);
  }, []);

  return {
    isHovered,
    shine,
    cardTransform,
    cardRef,
    audioRef,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  };
};

const TarjetaBeneficios = ({ showFront, isFlipping, flipDuration }) => {
  const [isDark, setIsDark] = useState(false);
  const {
    isHovered,
    shine,
    cardTransform,
    cardRef,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  } = useCardInteraction();

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = cardConstants.initialScaleTransform;
      const timeoutId = setTimeout(() => {
        card.style.transition = cardConstants.transitionTiming;
        card.style.transform = cardConstants.finalScaleTransform;
      }, 100);

      return () => clearTimeout(timeoutId);
    }
    setIsDark(document.documentElement.classList.contains('dark'));
  }, [cardRef]);

  // Memoizar estilos del contenedor para evitar recreación
  const containerStyle = useMemo(
    () => ({
      willChange: 'transform',
      border: isHovered ? '2.5px solid #38bdf8' : '1.5px solid #d1d5db',
      boxShadow: isHovered
        ? '0 12px 40px 0 rgba(0,255,255,0.25), 0 1px 12px 0 rgba(0,0,0,0.18)'
        : '0 8px 32px 0 rgba(31,38,135,0.37), inset 0 1px 12px 0 rgba(0,0,0,0.18)',
      perspective: '1000px',
      transform: cardTransform,
      transition: 'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.3s, border 0.3s, background 0.3s',
    }),
    [isHovered, cardTransform]
  );

  // Props comunes para ambos lados de la tarjeta
  const cardProps = {
    isFlipping,
    showFront,
    flipDuration,
    shine,
    isHovered,
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-20">
      <div
        id="card-container"
        ref={cardRef}
        className={`relative w-[288px] h-[180px] md:w-[450px] md:h-[280px] rounded-[15px] shadow-2xl overflow-hidden mb-4 transition-transform duration-300 ${
          isHovered ? 'scale-105' : ''
        }`}
        style={containerStyle}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}>
        <div className="absolute inset-0 w-full h-full rounded-[15px]" style={{ perspective: '1000px' }}>
          <TarjetaFrente {...cardProps} isDark={isDark} />
          <TarjetaTrasera {...cardProps} />
        </div>
      </div>
    </div>
  );
};

// PropTypes para EffectLayers
EffectLayers.propTypes = {
  shine: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
  opacity: PropTypes.number,
  shineMultiplier: PropTypes.number,
};

// PropTypes para TarjetaFrente
TarjetaFrente.propTypes = {
  isFlipping: PropTypes.bool.isRequired,
  showFront: PropTypes.bool.isRequired,
  flipDuration: PropTypes.number.isRequired,
  isDark: PropTypes.bool.isRequired,
  shine: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
};

// PropTypes para TarjetaTrasera
TarjetaTrasera.propTypes = {
  isFlipping: PropTypes.bool.isRequired,
  showFront: PropTypes.bool.isRequired,
  flipDuration: PropTypes.number.isRequired,
  shine: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
};

TarjetaBeneficios.propTypes = {
  showFront: PropTypes.bool.isRequired,
  isFlipping: PropTypes.bool.isRequired,
  flipDuration: PropTypes.number.isRequired,
};
export default TarjetaBeneficios;
