import React from 'react'
import { useSpring, animated } from '@react-spring/web'

const ElevatorCounter = () => {

  const { count } = useSpring({
    from: { count: 0 },
    to: { count: 100 },
    config: { duration: 3000 }, // Animation duration
  });

  const divStyle = {
    fontSize: '2em',
    color: 'green',
    textAlign: 'center',
    margin: '20px',
    border: '2px solid green',
    padding: '10px',
    width: '100px',
    borderRadius: '10px',
  };

  return (
    <animated.div style={divStyle}>
      {count.to((val) => Math.floor(val))}
    </animated.div>
  )
}

export default ElevatorCounter