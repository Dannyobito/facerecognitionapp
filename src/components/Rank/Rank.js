import React from "react";

const Rank = ({user}) => {
    let username = user.username;
    let entries  = user.entries;
    return(
        <div className="">
           <div className="text-white text-xl text-center">
                {`${username}, your current rank is... ${entries}`}
           </div>
        </div>
    )
}

export default Rank;