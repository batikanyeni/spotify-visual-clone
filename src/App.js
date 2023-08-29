import { LogInPage } from './components/pages/LogInPage';
import { SignUpPage } from './components/pages/SignUpPage';
import { MainPage } from './components/pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import { PremiumPage } from './components/pages/PremiumPage';
import { DownloadPage } from './components/pages/DownloadPage';
import { SupportPage } from './components/pages/SupportPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element = {<MainPage/>}/>
          <Route path='/login' element = {<LogInPage/>} />
          <Route path='/sign-up' element = {<SignUpPage/>} />
          <Route path='/premium' element = {<PremiumPage/>} />
          <Route path='/download' element = {<DownloadPage/>}/>
          <Route path='/support' element = {<SupportPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
