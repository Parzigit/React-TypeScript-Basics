import { useState } from 'react';
import Alert from './Alert';
import Button from './Button';

import ListGroup  from './components/ListGroup';
function App() { 
  const [alertVisible,setAlert]=useState(false);
    let items=['Hyderabad','Bangalore','Mumbai'];
    const HandleSelectedItem=(item,string)=>{
      console.log(item);
    };
    return(  
    <>  
      <div>
        <ListGroup items={items} heading="City to work" onSelectItem={HandleSelectedItem}/>
      </div>
      <div>
       {alertVisible && <Alert onClose={()=>setAlert(false)}><span>wait a minute</span></Alert>}
        <Button onClick={()=>setAlert(true)}>Sumedh Atreya component</Button>
      </div>
      </>
  );
}

export default App;