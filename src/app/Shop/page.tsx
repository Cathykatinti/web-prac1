import React from 'react';

export default function Shop(){
    return(
        <div className="contacts-container p-20 text-white ">
           <div className="flex overflow-scroll  bg-white ">
            <div className="bg-slate-300 h-64 w-96 p-40 justify-items-center">Street:12 <br/>
                Building:kk plaza <br/>
                Shop number:102C
                </div>
            <div className="bg-green-400 h-64 w-96 p-40"> Shop2</div>
            <div className="bg-slate-500 h-64 w-96 p-40">Shop3</div>
            <div className="bg-purple-500 h-64 w-96 p-40">Shop4</div>
           </div>
        </div>
    )
}