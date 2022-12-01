import React from "react";


export const AboutCircle = () => {
    return (
        <div className="aboutBackground">
            <p id='paragraphFadeIn' className="aboutFadeIn" lang="en">
                Take your calendar;  go back to 2020. Look closer.
                Put your face next to it.
                The black letters become big,
                blurry symbols and the monthly blocks disintegrate.
                You try to remember today’s date and in which calendar month you are.
                You’re not sure. It becomes hard to get a grip on something.
                You get lost in a tunnel.
                Since the COVID-19 outbreak, days have become weeks and weeks have become months and months
                have become years… or was it the other way around?
                This traumatic, collective time distortion glued us to our screens anxiously
                awaiting any news on the actual passage of time over and over again—an endless
                march in an infinite tunnel. This project is a time capsule made with material found on social media and news feeds. It explores time during the global pandemic, bridging the gap between web development and design. It was developed by
                <a className='aboutLink' onClick={() => window.open("https://www.instagram.com/audreykadjar", '_blank', 'noopener,noreferrer')} href="https://www.instagram.com/audreykadjar"> Audrey Kadjar</a> with the help of <a className='aboutLink' onClick={() => window.open("https://antonandirene.com", '_blank', 'noopener,noreferrer')} href='https://antonandirene.com' target="_blank" rel="noopener noreferrer">Anton & Irene</a> as a part of the Creative Mentorship program organized by <a className='aboutLink' onClick={() => window.open("https://offf.academy", '_blank', 'noopener,noreferrer')} href='https://offf.academy' target="_blank" rel="noopener noreferrer">OFFF Academy</a> and <a className='aboutLink' onClick={() => window.open("http://adobe.com", '_blank', 'noopener,noreferrer')} href="http://adobe.com" target="_blank" rel="noopener noreferrer"> Adobe.</a> The website was presented at <a className='aboutLink' onClick={() => window.open("https://www.offf.barcelona/ ", '_blank', 'noopener,noreferrer')} target=" _blank" rel="noopener noreferrer" href='https://www.offf.barcelona/'>OFFF Festival</a> in 2021.
                <span aria-hidden='true'></span>
            </p>
        </div >
    )
}