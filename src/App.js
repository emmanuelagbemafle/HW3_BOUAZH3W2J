import React from 'react';
import Introduction from './Components/Introduction'
import Navbar from './Components/Navbar'
import Wallpaper from './Components/Wallpapers'



function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Wallpaper/>

      <div className="spacer"></div>



    </div>
      
  );
}

export default App;
