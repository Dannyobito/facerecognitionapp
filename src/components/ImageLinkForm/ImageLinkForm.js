import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = () => {
    return(
        <div className="mt-12">
            <p className="text-2xl text-center">{'This model will detect faces in your pictures. Git it a try'}</p>
            <div className="flex justify-center">
                <div className="form flex justify-center mt-3 p-6">
                    <input className="text-black px-1 w-[70%]" type="text"/>
                    <button className="w-[30%] bg-[#00065B] p-2">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;