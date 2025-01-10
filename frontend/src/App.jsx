import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in_Sign_up from "./pages/Signinsignup/Signinsignup";
import Home from "./pages/Home/Home";
import Report_a_Crime from "./pages/Report_a_Crime/Report_a_Crime";
import Pending_Cases from "./pages/Pending_Cases/Pending_Cases";
import Closed_Cases from "./pages/Closed_Cases/Closed_Cases";
import Completed_Report_View from "./pages/Completed_Report_View/Completed_Report_View"
import Ongoing_Investigations from "./pages/Ongoing_Investigations/Ongoing_Investigations";
import Settings from "./pages/Settings/Settings";
import User_ProfileView from "./pages/User_Profileview/User_Profileview"; // Updated import for User_ProfileView
import Report_View from "./pages/Report_View/Report_View"; // Importing Criminal_ProfileView
import Contact_Us from "./pages/Contact_Us/ContactUs";
import NoPage from "./pages/NoPage/Nopage";
import User_Profile from "./pages/User_Profile/User_Profile";
import ChangePassword from "./pages/Change_Password/Change_Password";
import Recovery_Options from "./pages/RecoveryPhone/RecoveryPhone";
import Create_Admin from "./pages/Create_Admin/Create_Admin";
import {UserProvider} from "./components/contexts/userContext"; // named import
import { IdProvider } from "./components/contexts/idContext";


function App() {
  return (
    <div>
      <IdProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Sign_in_Sign_up />} />
              <Route path="/Signin_Signup" element={<Sign_in_Sign_up/>} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Report_a_Crime" element={<Report_a_Crime />} />
              <Route path="/Pending_Cases" element={<Pending_Cases />} />
              <Route path="/Closed_Cases" element={<Closed_Cases />} />
              <Route path="/Ongoing_Investigations" element={<Ongoing_Investigations />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Contact_Us" element={<Contact_Us />} />
              <Route path="/User_ProfileView" element={<User_ProfileView />}/>
              <Route path="/Report_View" element={<Report_View />}/>
              <Route path="/Completed_Report_View" element={<Completed_Report_View />}/>
              <Route path="/User_Profile" element={<User_Profile />} />
              <Route path="/Recovery_Options" element={<Recovery_Options/>}/>
              <Route path="/Change_Password" element={<ChangePassword/>}/>
              <Route path="/Create_Admin" element={<Create_Admin/>}/>

              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </IdProvider>
    </div>
  );
}

export default App;


/*
in order to make multiple pages in react we use the npm react-router-dom package, which routes urls to their respective
components. No need to create separate pages as react is built for the purpose of creating single pages, not multiple.
to use this functionality, we muslt enclose our elements in both the router BrowserRouter and Router tags.
How it routes traffic? -> to check later .
*/