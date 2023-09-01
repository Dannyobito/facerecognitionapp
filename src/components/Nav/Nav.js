import React from "react";


const Nav = ({onRouteChange}) => {
    return(
        <nav className="flex justify-end m-3">
            <p onClick={()=>onRouteChange('signin')} className="text-xl text-white underline pa-3 cursor-pointer hover:brightness-25 hover:background-white">Sign Out</p>
        </nav>
    )
}

export default Nav;