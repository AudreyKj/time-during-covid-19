import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";

export function Share() {
    const menu = (
        <Menu style={{ backdropFilter: 'blur(40px)', backgroundColor: '#adc5bb1c', boxShadow: 'none', backgroundClip: 'none', border: 'none' }}>
            <MenuItem key="1" className="shareMenuItem" style={{
                fontSize: '1rem', fontWeight: 'bold', color: 'black', fontFamily: "Helvetica Neue Helvetica, Arial, sans-serif"
            }}><EmailShareButton url={'https://www.timeduringcovid19.com'} separator={'\n 🔗'} subject={'TIME DURING COVID-19'} body={'A creative website exploring time during COVID-19'} onClick={() => { }}
                openShareDialogOnClick>EMAIL</EmailShareButton></MenuItem>
            < Divider style={{ backgroundColor: 'black' }} />
            <MenuItem key="2" className="shareMenuItem" style={{
                fontSize: '1rem', fontWeight: 'bold', color: 'black', fontFamily: "Helvetica Neue Helvetica, Arial, sans-serif"
            }}><FacebookShareButton url={"https://www.timeduringcovid19.com"} quote={'TIME DURING COVID-19'} hashtag={'#covid19'}>FACEBOOK</FacebookShareButton></MenuItem>
            <Divider style={{ backgroundColor: 'black' }} />
            <MenuItem className="shareMenuItem" key="3" style={{
                fontSize: '1rem', fontWeight: 'bold', color: 'black', fontFamily: "Helvetica Neue Helvetica, Arial, sans-serif"
            }}> <TwitterShareButton url={"https://www.timeduringcovid19.com"} title={'TIME DURING COVID-19 \n A creative website exploring time during COVID-19'} hashtags={['covid19', "creativeproject", "coolwebsite", 'creativecoding', 'OFFFfestival', 'adobe', 'creativeMentorship', 'inspiration', 'design']} >TWITTER</TwitterShareButton></MenuItem>
        </Menu >
    );


    return (
        <>
            <Dropdown
                trigger={['click']}
                overlay={menu}
                animation="slide-up"
                id='dropdown'
            >
                <button className="shareDropdownButton"> SHARE</button>
            </Dropdown>
        </>
    )

}