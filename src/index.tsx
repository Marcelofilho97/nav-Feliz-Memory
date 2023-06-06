import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {App} from './App';
import { Memory } from './screens/Memory/Memory';
import { MemoryEasyLevel } from './screens/MemoryEasyLevel/MemoryEasylevel';
import { MemoryMediumLevel } from './screens/MemoryMediumLevel/MemoryMediumLevel';
import { MemoryHardLevel } from './screens/MemoryHardLevel/MemoryHardLevel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Memoria" element={<Memory/>}/>
      <Route path="/MemoryEasyLevel" element={<MemoryEasyLevel/>}/>
      <Route path="/MemoryMediumLevel" element={<MemoryMediumLevel/>}/>
      <Route path="/MemoryHardLevel" element={<MemoryHardLevel/>}/>
    </Routes>
  </Router>
);

