// import Home from "./pages/Home/Home"
// import {createBrowserRouter,RouterProvider,Route,Link,Outlet} from "react-router-dom"
// import Users from "./pages/Users/Users"
// import Products from "./pages/Products/Products"
// import Navbar from "./components/Navbar/Navbar"
// import Footer from "./components/Footer/Footer"
// import Menu from "./components/Menu/Menu"
// import Login from "./pages/Login/Login"
// import './styles/global.css'
// import CreateAccount from "./pages/CreateAccount/CreateAccount"
// function App() {

//   const Layout = () => {
//     return(
//       <div className="main">
//         <Navbar/>
//         <div className="container">
//           <div className="menuContainer">
//             <Menu />
//           </div>
//           <div className="contentContainer">
//             <Outlet />
//           </div>
//         </div>
//         <Footer/>
//       </div>
//     )
//   }

//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout />,
//       children:[
//         {
//           path:'/',
//           element:<Home/>
//         },
//         {
//           path:'/users',
//           element:<Users/>
//         },
//         {
//           path:'/products',
//           element:<Products/>
//         }
//       ]
//     },
//     {
//       path:'login',
//       element:<Login/>
//     },
//     {
//       path:'create-account',
//       element:<CreateAccount/>
//     }
//   ])
//   return <RouterProvider router={router} />
// }

// export default App

import Home from "./pages/Home/Home"
import {createBrowserRouter,RouterProvider,Route,Link,Outlet} from "react-router-dom"
import Users from "./pages/Users/Users"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"
import Login from "./pages/Login/Login"
import './styles/global.css'
import CreateAccount from "./pages/CreateAccount/CreateAccount"
function App() {

  const Layout = () => {
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/users',
          element:<Users/>
        },
        {
          path:'/products',
          element:<Products/>
        }
      ]
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'create-account',
      element:<CreateAccount/>
    }
  ])
  return <RouterProvider router={router} />
}

export default App
