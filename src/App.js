import { LogInPage } from './components/pages/LogInPage';
import { SignUpPage } from './components/pages/SignUpPage';
import { MainPage } from './components/pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element = {<MainPage/>}/>
          <Route path='/login' element = {<LogInPage/>} />
          <Route path='/sign-up' element = {<SignUpPage/>} />
      </Routes>
    </div>
  );
}

export default App;
