import React from "react";

const Rank = () => {
    const username = 'Obito'
    const rank = 5
    return(
        <div className="">
           <div className="text-white text-xl text-center">
                {`${username}, your current rank is... ${rank}`}
           </div>
        </div>
    )
}

export default Rank;