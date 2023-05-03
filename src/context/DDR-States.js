import React, { useState } from "react";
import DDRContext from "./DDR-Context";

const DDRStates = (props)=>
{
    const AdminEmail = "admin@nu.edu.pk";
    const AdminPassword = "admin";
    return (
        <DDRContext.Provider value={{ AdminEmail , AdminPassword}}>
            {props.children}
        </DDRContext.Provider>
    )
}

export default DDRStates;
