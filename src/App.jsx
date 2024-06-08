import Playbar from "./components/Playbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="bg-black h-screen select-none">
        <div className="h-[90%] flex">
          <Sidebar />
          <Outlet />
        </div>
        <div className="h-[10%]">
          <Playbar />
        </div>
      </div>
    </>
  );
}

export default App;
