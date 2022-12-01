import React from 'react';
import { EmailShareButton } from "react-share";


export function Mobile() {
    return (
        <div className="mobile">
            <div className="mobileBlocker">
                <span> TIME DURING COVID-19 </span>
                <span className="mobileText">PLEASE VISIT THIS WEBISTE ON A DESKTOP</span>
                <EmailShareButton url={'https://www.timeduringcovid19.com'} separator={'\n 🔗'} subject={'TIME DURING COVID-19'} body={'A creative website exploring time during COVID-19'}> SEND ME A LINK </EmailShareButton>
            </div>
        </div>
    )
}