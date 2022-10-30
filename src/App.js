import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';
import Uptade from './components/Uptade';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home></Home>,
      loader : () => fetch('http://localhost:5000/users')
    },
    {
      path : '/users/add',
      element : <AddUser></AddUser>
    },
    {
      path : '/uptade/:id',
      element : <Uptade></Uptade>,
      loader : ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
