import './App.css';
import MainView from './components/MainView/MainView';
import UserContextProvider from "./Context/UserIsLogin";

function App() {
  return (
    <UserContextProvider>
      <MainView />
    </UserContextProvider>
  );
}

export default App;
