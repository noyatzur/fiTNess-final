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
    color: 'black',
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'
  };

  return (
    <animated.div style={divStyle}>
     {count.to((val) => ` הצטרפו אלינו כ-${Math.floor(val)} לקוחות ששינו את חייהם`)}
    </animated.div>
  )
}

export default ElevatorCounter