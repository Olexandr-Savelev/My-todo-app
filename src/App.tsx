import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SingUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn'
import TodoApp from './pages/TodoApp/TodoApp';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';

function App(): JSX.Element {
  const theme = useSelector((state: RootState) => state.ui.theme)

  useEffect(() => {
    document.body.setAttribute('theme', theme)
  }, [theme])

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todoapp' element={<TodoApp />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
