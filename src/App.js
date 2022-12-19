import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import { GithubProvider } from './Context/Github/GithubContext';
import { AlertProvider } from './Context/Alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './components/Pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
{/* header */}
        <Router>
          <div className='flex flex-col justify-between h-full'> 
            <Navbar/>

            <main>
              <Alert/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/user/:login' element={<User/>}/>
                  <Route path='/notfound' element={<NotFound/>}/>
                  <Route path='/*' element={<NotFound/>}/>
              </Routes>
            </main>


    {/* footer */}
          <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
  
}

export default App;
 
