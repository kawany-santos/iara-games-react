import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Forum } from './screens/Forum';
import { Loja } from './screens/Loja';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';


export function App() {
  return (
    <div>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/loja" element={<Loja />} />
          <Route path="/" element={<Forum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}