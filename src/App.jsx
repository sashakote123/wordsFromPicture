import './css/main.css'
import WordFromPicture from './components/games/wordFromPicture/WordFromPicture';
import LevelComplete from './components/common/LevelComplete';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {


  return (
      <Routes>
      <Route path="/" element={<Navigate to="/0" />} />
        <Route path='/:index' element={<WordFromPicture />} />
      </Routes>
  );
}

export default App;
