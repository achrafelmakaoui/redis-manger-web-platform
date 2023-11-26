import {Routes,Route} from "react-router-dom";
import Dash from './components/redis_ui/Dash';
import Intro from './components/intro/Intro'
import './index.css'
import { ThemeProvider } from './components/ThemeContext';
function App() {
  return (
    <div>
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Intro/>}/>
              <Route path="/redis" element={<Dash/>}/>
          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
