import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/archive' element={<Archive/>}/>
      </Routes>
    </div>
  );
}

export default App;
