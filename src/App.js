import logo from './logo.svg';
import './App.css';
import Mypage from './components/Mypage';
import BooksEntry from './components/BooksEntry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    


 <BrowserRouter >

 <Routes>

 <Route path="/" exact element={<BooksEntry />} /> 
 <Route path="/view" exact element={<Mypage />} />
 
 </Routes>
 </BrowserRouter>
     
     
   
    
  );
}

export default App;
