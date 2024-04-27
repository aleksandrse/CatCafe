import React from "react";
import "./style.css";
function Button ({children,width}) {
    return <button type="button" className="button" style={{minWidth:width}}>
          {children}
          </button>
    
}
export default Button