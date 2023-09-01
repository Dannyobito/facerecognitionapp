import React from "react";
import './FaceRecognition.css'
const FaceRecognition = ({imageUrl,boxes}) => {
    return(
        <div className="relative flex justify-center">
            <div className="flex justify-center my-3 absolute">
                <img id="face" width="500" height="auto" alt="" src={imageUrl}/>
                {
                    boxes.map((box, i) => {
                        return <div key={i} style={{top:box.top, right:box.right, left:box.left, bottom:box.bottom}} className="face-box"></div>
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition;