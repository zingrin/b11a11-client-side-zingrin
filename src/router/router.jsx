import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import MyEnrolledCourses from "../pages/MyEnrolledCourses";
import CourseDetails from "../pages/CourseDetails";
import Faq from "../pages/Faqs";
import AddCourse from "../components/AddCourse";
import AboutUs from "../components/Aboutus";
import PrivateRoutes from "../routes/PrivateRoutes";
import ManageCourses from "../pages/ManageCourses";
import EditCourse from "../components/EditCourse";
import ContactUs from "../pages/ContactUs";
import Courses from "../components/Courses";
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
        path:'/about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/contactUs',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
      {
        path:'/courses/:id',
        element:<CourseDetails></CourseDetails>
      },
      {
        path:'/my-enrollments',
        element:<PrivateRoutes><MyEnrolledCourses></MyEnrolledCourses></PrivateRoutes>
      },
      {
        path:'/addCourse',
        element:<PrivateRoutes><AddCourse></AddCourse></PrivateRoutes>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/manageCourse',
        element:<PrivateRoutes><ManageCourses></ManageCourses></PrivateRoutes>
      },
      {
        path:'/editCourse/:id',
        element:<PrivateRoutes><EditCourse></EditCourse></PrivateRoutes>
      }
      
    ]
  },
  
]);
export default router;
