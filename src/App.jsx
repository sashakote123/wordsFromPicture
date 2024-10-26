import './css/main.css'
import WordFromPicture from './components/games/wordFromPicture/WordFromPicture';
import LevelComplete from './components/common/LevelComplete';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/content/0" />} />
        <Route path='/content/:index' element={<WordFromPicture />} />
      </Routes>


    </div>
  );
}

export default App;
