import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page";
import "./style.css"
//Обертка для всей страницы

function PageWrapper (prop) {
    return (<>
        <Header/>
        <main className="page-wrapper__main">
            <MainPage {...prop}/>
        </main>
        <Footer/>
        </>
    )  
}
export default PageWrapper;
