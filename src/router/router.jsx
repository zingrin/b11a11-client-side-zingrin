import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
// import Courses from "../pages/Courses";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import MyEnrolledCourses from "../pages/MyEnrolledCourses";
import CourseDetails from "../pages/CourseDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/courses/:id',
        element:<CourseDetails></CourseDetails>
      },
      {
        path:'/my-enrollments',
        element:<MyEnrolledCourses></MyEnrolledCourses>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
  
]);
export default router;
