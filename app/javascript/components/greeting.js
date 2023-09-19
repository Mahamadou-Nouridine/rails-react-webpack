import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
    const greetings  = useSelector(state => state.greetings)
    console.log('====================================');
    console.log(greetings);
    console.log('====================================');
  return (
    <div>greeting</div>
  )
}

export default Greeting
