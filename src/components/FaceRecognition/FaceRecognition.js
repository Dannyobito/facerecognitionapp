import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className="flex justify-center my-3">
            <img width="500" height="auto" alt="" src={imageUrl}/>
        </div>
    )
}

export default FaceRecognition;