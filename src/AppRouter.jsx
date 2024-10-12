import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function AppRouter() {
  return (
    // เพิ่มเส้นทาง ให้เพิ่ม  <Link to="/...">ชื่อหัวข้อ</Link>
    // สร้างไฟล์ในหน้า pages ด้วย
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        {/* อัปเดทเส้นทางให้เพิ่ม <Route path="/..." element={<ชื่อหัวข้อ />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;