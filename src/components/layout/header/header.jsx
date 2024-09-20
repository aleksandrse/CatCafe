import React from "react";
import Nav from "/src/components/layout/nav/nav";
import Logo from "/src/components/ui/logo/logo";
import "./style.css"

function Header () {
    return (
        <header className="header">
          <Logo/>
          <Nav/>
        </header>    
        

    )
}
export default Header;