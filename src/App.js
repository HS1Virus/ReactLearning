import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FuncClick from './components/funcclick';
import ClassClick from './ClassClick';

function App() {
  return (
    <div className="App">
      <Message/>
      <Counter/>
      <FuncClick/>
      <ClassClick/>
      {/*<Greet name="Hemil"/>
      <Greet name = "Louis"/>
      <Welcome/>*/}
    </div>
  );
}

export default App;
