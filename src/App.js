import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import EventPractice from './EventPractice';
import EventPractice_FunctionVer from './EventPractice_FunctionVer';
import Counter_HookVer from './Counter_HookVer';
import Info_Hook from './Info_Hook';

function App() {
  return (
    <div>
      <EventPractice></EventPractice>
      <EventPractice_FunctionVer></EventPractice_FunctionVer>
      <Counter></Counter>
      <Counter_HookVer></Counter_HookVer>
      <Info_Hook></Info_Hook>
    </div>
  );
}

export default App;
