import './App.css';
import Main from './Components/route';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
