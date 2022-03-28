import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/UI/NavBar/NavBar';
import ServiceContextProvider from './Context/ServiceContextProvider';

import './styles/App.css';

function App() {

  return(     
      <BrowserRouter>   
        <ServiceContextProvider>  
          <NavBar/> 
        </ServiceContextProvider>   
          <AppRouter/>
      </BrowserRouter>     
  )  
}
export default App;

