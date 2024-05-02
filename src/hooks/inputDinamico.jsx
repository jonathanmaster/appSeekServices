import { useState, useEffect, useMemo } from 'react'

export function useInputDinamic() {
  const palabras = useMemo(
    () => [
      'Lavadora',
      'Taller de motos',
      'Sastre',
      'Albañil',
      'Pintor',
      'Regalos',
      'Peluquería',
    ],
    []
  )
  const [indicePalabra, setIndicePalabra] = useState(0)
  const [indiceLetra, setIndiceLetra] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceLetra((indiceActual) => indiceActual + 1)
      if (indiceLetra + 1 > palabras[indicePalabra].length) {
        setIndiceLetra(0)
        setIndicePalabra((indiceActual) => (indiceActual + 1) % palabras.length)
      }
    }, 300) // Cambia la letra cada 200 milisegundos

    return () => clearInterval(intervalo) // Limpia el intervalo cuando el componente se desmonta
  }, [indiceLetra, indicePalabra, palabras])

  return { palabras, indiceLetra, indicePalabra }
}
