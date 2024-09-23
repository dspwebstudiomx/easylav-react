import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 10) {
        setCount(count + 1);
      }
    }, 100); // Aumenta cada 500ms

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="flex justify-center">
      <p className="text-3xl font-bold text-primary_dark">{count}</p>
    </div>
  );
}

export default Counter;