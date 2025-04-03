import { useState } from "react";

const RegisterForm = () => {
  const [pass, setPass] = useState(false);

  return (
   <>
   <div className="w-full h-[500px] flex items-center justify-center">

      <div className="flex flex-col bg-[#003300] border-[1px] border-white w-[450px] h-full p-[30px] justify-around rounded-[10px]">
            <h1 className="text-center text-4xl text-white font-semibold">REGISTER</h1>

            <input 
              type="text"
              placeholder="Enter your Email"
              className="p-[20px] text-5 text-[white] rounded-[8px] text-[20px] border-[white] border-[1px]"
            />
          
            <input
              type={pass ? "text" : "password"}
              placeholder="Password"
              className="p-[20px] text-[white] rounded-[8px] text-[20px] border-[white] border-[1px]"
            />

            <input
              type={pass ? "text" : "password"}
              placeholder="Re-type Password"
              className="p-[20px] text-[white] rounded-[8px] text-[20px] border-[white] border-[1px]"
            />


            <button className="bg-[#597931] p-[20px] text-[#ffffff] text-[20px] rounded-[8px] opacity-100 cursor-pointer hover:opacity-75">
              Sign Up
            </button>

            <div className="flex w-full">
              <div>
                <input type="checkbox" id="checkbox" onChange={() => setPass(!pass)} />
                <label htmlFor="checkbox" className="text-white text-[15px] font-medium">
                  Show Password
                </label>
              </div>

            </div>
          </div>
   </div>
        </>
  );
};

export default RegisterForm;
