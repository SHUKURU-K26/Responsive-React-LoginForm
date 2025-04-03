import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfilePic  from './assets/ProfilePic.jpg'
import MyLogo from './assets/Lg.jpg'

const IndexPage=()=>{
    const [NavPage, setNavPage]=useState("Login");
    return(
      <>
            <div className="flex min-h-screen flex-col">

                <div className="flex w-full p-[10px] bg-[#023D54] text-white justify-between">
                    <div className="flex gap-2">
                        <button onClick={()=>setNavPage("Login")} className="bg-[#3de764] p-[5px]  border-white hover:opacity-75 cursor-pointer w-[100px] rounded-[8px] text-white text-[15px]">Login</button>
                        <button onClick={()=>setNavPage("Register")} className="bg-[#00d3d3] p-[5px]  border-white hover:opacity-75 cursor-pointer w-[100px] rounded-[8px] text-white text-[15px]">Sign Up</button>
                    </div>
                    <img className="border-1px border-white w-[60px] h-[60px] rounded-[50%]" src={ProfilePic} alt="My Web Logo" />
                </div>

                <div className="flex-grow">
                    {NavPage==="Login" && <LoginForm/>}
                    {NavPage==="Register" && <RegisterForm/>}
                </div>

                <footer className="flex w-full bg-[#023D54] justify-between p-[15px] text-white">
                    <div className="flex flex-col text-white">
                        <h1>Copyrights</h1>
                        <p>&copy; Copyright All rights reserved {new Date().getFullYear()}</p>
                        
                    </div>

                    <div className="flex flex-col text-[grey]">
                        <h1 className="">Locations</h1>
                        <p>Location: Kanaka Village</p>
                        <p>Street: St: KK12-400-Jeyp_only </p>
                    </div>

                    <div className="felx flex-col">
                        <h1 className="text-teal-400">About</h1>
                        <div className="flex">
                                <img className="w-[40px] h-[40px] rounded-[50%]" src={MyLogo} alt="" />
                        </div>
                    </div>
                </footer>
            </div>
        
      </>
    )

}
export default IndexPage;