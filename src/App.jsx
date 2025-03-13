import React from 'react'
import Navbar from './components/Navbar'
import FloatingParticle from "./component/FloatingParticle";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">

      <Navbar />
      <FloatingParticle/>
    </div>
  );
};

export default App;
