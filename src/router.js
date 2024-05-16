import { element } from "prop-types";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Root from "./components/root";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                path: 'about-me',
                element: <About/>
            },
            {
                path: 'experience',
                element: <Experience/>
            },
            {
                path: 'projects',
                element: <Projects/>
            },
            {
                path: 'contact-me',
                element: <Contact/>
            }
        ]
    }
])

export default function Router(){
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}