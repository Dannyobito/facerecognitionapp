import React from "react";


const SignIn = ({onRouteChange}) => {
    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-transparent bg-opacity-95 shadow shadow-black max-w-xl container mx-auto ">
                <div className=" w-full">
                    <p className="mt-10 text-center text-white text-base font-semibold">Login into your account</p>
                    <div className="mt-10">
                        <div className="p-10">
                            <div className="mt-2 ">
                                <label htmlFor="" className="text-white text-base font-normal">Email Id :</label>
                                <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                    <input 
                                    type="text" 
                                    name="" placeholder="Chris Jericho" 
                                    
                                    className="w-full text-black placeholder:text-black px-4 bg-transparent outline-none"/>
                                </div>
                                </div>
                                <div className="mt-6 ">
                                    <label htmlFor="" className="text-white text-base font-normal">Password :</label>
                                    <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                                        <input type="password" name="" placeholder="name@domain.com" 
                                            className="w-full text-black placeholder:text-black px-4 bg-transparent outline-none"/>
                                    </div>
                                    </div>
                                    <button
                                    onClick={()=>onRouteChange('home')}
                                    className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
                                    now</button>

                                    <div className="relative flex items-center mt-8">
                                        <div className="border h-0 w-2/4 border-stone-300"></div>
                                        <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
                                        <div className=" border h-0 w-2/4 border-stone-300"></div>
                                    </div>
                                    <button
                                    onClick={()=>onRouteChange('register')}
                                    className="border border-indigo-900 rounded-lg  text-center  text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">Signup
                                    now</button>

                        </div>
                    </div>
                </div>
	        </div>
        </div>
    )
}
export default SignIn;