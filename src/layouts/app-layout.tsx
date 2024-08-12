import Header from "@/components/header";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container'>
            <Header />
            <Outlet />
        </main>
        <div className='p-10 text-center bg-gray-400 mt-10'>
        © 2024 Scissors.com. All Rights Reserved. 
        </div>
    </div>
  )
};

export default AppLayout;