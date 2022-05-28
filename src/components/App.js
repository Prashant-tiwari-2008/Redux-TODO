import React from 'react'
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Todo from './todoComponents/Todo'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='container mt-5'>
        <Todo listType={"TODO"}>
          LIST
        </Todo>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App;