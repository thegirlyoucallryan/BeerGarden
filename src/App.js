import React from 'react';

import Search from './components/Search';
import  './index.css'



const App = () => {


  
    return(
        <div>
            <div className='headerBox'>
            <h2 className='header'> Beer Garden</h2>
            <h1 className="header2"> Brew Some </h1>
            <h1 className="header2 header3" >Beer</h1>
            </div>
            <Search/>
        
           
        </div>
    )
}

export default App;