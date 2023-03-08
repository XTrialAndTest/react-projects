import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  let [name, setName] = useState(data);
  console.log(name);
  return (
    <>
      <div className='container section '>
        <h1>BIRTHDAY REMINDER</h1>
        {name.map(({ id, name, age, image }) => {
          return (
            <>
              <div className='main'>
                <div className='singleCard person ' key={id}>
                  <img src={image} alt='' /> <h4>{name}</h4>
                  <p>{age}</p>
                </div>
              </div>
            </>
          );
        })}
        <button onClick={() => setName('0 birthdays today')}>clear</button>
      </div>
    </>
  );
}

export default App;
