import { useSelector } from "react-redux";
import SignupModal from "./modals/SignUp";
import Sidebar from "./Sidebar";
import Banner from "./Banner";

function Layout({ children }) {
  const user = useSelector((state) => state.user);
  
  return (
    <div className="">
      <div className="sm:w-[400px]  text-[#e7e9ea]">
        <Sidebar />
      </div>
      <div className="h-auto">{children}</div>
    </div>
  );
}

export default Layout;
