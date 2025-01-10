import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Hide_Button from "../hide_button/Hide_Button";
import ContentBody from "../content_body/ContentBody";

import content_style from "./Content.module.css";
function Content({className, children}) { // included children props because the content body will have components. So pass this into content body
                                         // also included className prop to pass styles for the children   
    const [sidebarVisibility, setSidebarVisibility] = useState(true);

    const isVisible = () => {
        setSidebarVisibility((prevState) => !prevState);
    };

    return(
        <>
        { (sidebarVisibility) ? (
            <div className={content_style.content_area}>
                <Hide_Button className={content_style.switch_button} onClick = {isVisible}/>
                <Sidebar className={content_style.sidebar}/>
                <ContentBody className={`${content_style.contentBody} ${className}`}> {children} </ContentBody> {/*child passed here, now any component passed as a child to this will render here */}
            </div>
        ) : (
            <div className={content_style.noSidebar}>
                <Hide_Button className={content_style.switch_button} onClick = {isVisible}/>
                <ContentBody className={`${content_style.contentBody} ${className}`}> {children} </ContentBody>
            </div>
        )
        }
        </>
    );   
};

export default Content;