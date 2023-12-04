'use client'
import { useState, useEffect } from 'react'
export default function usePosition() {
  const [mostrarElemento, setMostrarElemento] = useState(false);

  useEffect(() => {
    const verificarPosicionFooter = () => {
      const personal = document.querySelector('.personal')!;
      const personalPosition = personal.getBoundingClientRect();

      if (personalPosition.bottom <= window.innerHeight && personalPosition.bottom <= 0) {
        setMostrarElemento(true);
      } else {
        setMostrarElemento(false);
      }
    };

    window.addEventListener('scroll', verificarPosicionFooter);

    // Limpiar el escuchador de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', verificarPosicionFooter);
    };
  }, []); // Pasar un array vacío como segundo argumento para que useEffect se ejecute solo una vez

  return mostrarElemento
}