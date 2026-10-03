import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AstrofestPage from '../pages/AstrofestPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AstrofestPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
