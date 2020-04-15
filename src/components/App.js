import React, {useState} from 'react';

export default () => {
  const [count, setCount] = useState(0)
  
  return (
    <button
      onClick={() => setCount(count + 1)}
    >{count === 0 ? 'Click me' : `Clicked ${count} time${count > 1 ? 's' : ''}`}</button>
  )
}
