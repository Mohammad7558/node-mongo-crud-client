import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : ''
    },
    {
      path : '/user/add',
      element : ''
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
