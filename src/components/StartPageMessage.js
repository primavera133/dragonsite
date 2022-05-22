import React  from 'react'
import styled from '@emotion/styled'
import { useSpring, animated, to } from 'react-spring'
import useMeasure from 'react-use-measure'
import useMediaQuery from '../utils/hooks/useMediaQuery'
import { ResizeObserver } from '@juggle/resize-observer'

const MessageStyle = `
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Varela Round', sans-serif;
background-color: rgba(0,0,0,0.3);

@media not all and (hover: none) {
    background-color: transparent;
    opacity: 0;
}

:hover {
    opacity: 0.8;
}

svg {
    width: 75%;
}

`
const Message = styled.div`
  ${MessageStyle}
`

const AnimatedMessage = styled(animated.div)`
  ${MessageStyle}
`

export const StartpageMessage = ({ children }) => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const Elem = prefersReducedMotion ? Message : AnimatedMessage
  const [cardRef, { width: cardWidth, height: cardHeight }] = useMeasure({
    polyfill: ResizeObserver,
  })

  const [{ x, y, scale }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: {
      mass: 1,
      tension: 140,
      friction: 12,
    },
  }))

  const handleMouseMove = (e) => {
    const { offsetX: mouseX, offsetY: mouseY } = e.nativeEvent
    set({
      x: (mouseX * 2) / cardWidth - 1,
      y: (mouseY * 2) / cardHeight - 1,
      scale: 1.1,
    })
  }

  const handleMouseLeave = () => {
    set({ x: 0, y: 0, scale: 1 })
  }

  return (
    <Elem
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: to(
          [
            x.to([-1, 0, 1], [-15, 0, 15]),
            y.to([-1, 0, 1], [15, 0, -15]),
            x.to([-1, 0, 1], [5, 0, -5]),
            y.to([-1, 0, 1], [10, 0, -10]),
            scale,
          ],
          (degX, degY, transX, transY, skejl) =>
            `perspective(600px) rotateX(${degY}deg) rotateY(${degX}deg) translate(${transX}%, ${transY}%) scale(${skejl})`
        ),
      }}
    >
      <svg viewBox="0 0 56 18">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="central"
          fill="white"
        >
          {children}
        </text>
      </svg>
    </Elem>
  )
}
