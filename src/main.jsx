import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvider, { AuthContexts } from "./contexts/AuthContexts.jsx";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
<ToastContainer>

    </ToastContainer>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </StrictMode>
);
