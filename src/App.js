import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loja } from './screens/Loja';
import { Forum } from './screens/Forum';
import { NotFound } from './screens/NotFound';


export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/forum" element={<Forum />} />
          <Route path="/" element={<Loja />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}