import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
    
  {/* side bar */}
 <div className="app_body">
    <Sidebar/>
    {/* body */}
    <Chat/>
 </div>
    </div>
  );
}

export default App;
