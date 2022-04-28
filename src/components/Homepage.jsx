import React from 'react'
import admin from './pic2.jpg';
import india from './ind.png';
import about from './about.png';
import bb from './bb.png';
import gg from './gg.jpg';
import rr from './rr.jpg';
import lg from './lg.jpg';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUsers, faCircle, faAngleDown, faChartLine, faArrowUpWideShort, faArrowDownWideShort, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    return (
        <div className='main'>
            <div className="hero-head d-flex justify-content-between align-items-center">
                <div>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
                <div>
                    <img src={india} alt="" style={{ marginRight: "30px", borderRadius: "3px", objectFit: "cover" }} />
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    <sup className='sup'>
                        2
                    </sup>
                    <FontAwesomeIcon className='end' icon={faUsers}></FontAwesomeIcon>
                    <img src={admin} alt="" />
                </div>
            </div>
            <div className="hero">
                <div className="intro">
                    <div className="con">
                        <h4>Welcome Back, <br /> Minimal UI!</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab, laboriosam quasi harum blanditiis incidunt veritatis maxime accusantium. Dicta, nemo.</p>
                        <button>Go Now</button>
                    </div>
                    <div className="img">
                        <img src={about} alt="" />
                    </div>
                </div>
                <div className="zombie">
                    <div className="nag d-flex justify-content-between align-items-center">
                        <div className="dots d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className='dot' icon={faCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon className='dot act' icon={faCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon className='dot' icon={faCircle}></FontAwesomeIcon>
                        </div>
                        <div className="arrow">
                            <FontAwesomeIcon className='dot bl' icon={faCaretLeft}></FontAwesomeIcon>
                            <FontAwesomeIcon className='dot bl' icon={faCaretRight}></FontAwesomeIcon>
                        </div>
                        <div className="rel">
                            <h6>FEATURED APP</h6>
                            <h4>Disney Zombies 2</h4>
                            <p>Lorem ipsum dolor lorem ipsum sit amet....</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat d-flex justify-content-evenly align-items-center">
                <div className="stbox">
                    <h5>Total Active Users</h5>
                    <div className="gp d-flex justify-content-between align-items-center">
                        <div className="up d-flex">
                            <FontAwesomeIcon className='gr' icon={faArrowUpWideShort}></FontAwesomeIcon>
                            +2.6%
                        </div>
                        <div className="gpim">
                            <img src={ gg } alt="" />
                        </div>
                    </div>
                    <h1>16,455</h1>
                </div>
                <div className="stbox">
                    <h5>Total Active Users</h5>
                    <div className="gp d-flex justify-content-between align-items-center">
                        <div className="up d-flex">
                            <FontAwesomeIcon className='gr' icon={faChartLine}></FontAwesomeIcon>
                            +2.6%
                        </div>
                        <div className="gpim">
                            <img src={ bb } alt="" />
                        </div>
                    </div>
                    <h1>16,455</h1>
                </div>
                <div className="stbox">
                    <h5>Total Active Users</h5>
                    <div className="gp d-flex justify-content-between align-items-center">
                        <div className="up d-flex">
                            <FontAwesomeIcon className='rd' icon={faArrowDownWideShort}></FontAwesomeIcon>
                            +2.6%
                        </div>
                        <div className="gpim">
                            <img src={ rr } alt="" />
                        </div>
                    </div>
                    <h1>16,455</h1>
                </div>
            </div>
            <div className="down d-flex justify-content-between">
                <div className="card">
                    <h3>Current Download</h3>
                    <div class="progress">
                        <span class="title timer" data-from="0" data-to="70" data-speed="1500">70</span>
                        <div class="overlay"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div className="gpp">
                    <div className="he d-flex justify-content-between align-items-center">
                        <h3>Area Installed</h3>
                        <span className='goo'>
                            2019 
                            <FontAwesomeIcon style={{marginLeft: '8px'}} icon={ faAngleDown }></FontAwesomeIcon>
                        </span>
                    </div>
                    <p>(+43%) than last year</p>
                    <div style={{textAlign: 'right', marginBottom: '10px'}}>
                        <FontAwesomeIcon style={{color: '#008000', marginRight: '10px'}} icon={faCircle}></FontAwesomeIcon> Asia <FontAwesomeIcon style={{color: 'yellow', marginRight: '10px'}} icon={faCircle}></FontAwesomeIcon> America
                    </div>
                    <div className="imb">
                        <img src={ lg } alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage