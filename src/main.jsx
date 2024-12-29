import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Route } from 'react-router-dom'
import User from './components/User/User'
import Github , {githubInfoLoader} from './components/Github/Github'



// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])


//Alternative methods of routing
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
      
     

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)