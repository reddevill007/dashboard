import React from 'react';
import admin from './pic.jpg';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faBagShopping, faChartLine, faBuildingColumns, faCalendarTimes, faUser, faAngleRight, faEnvelope, fa2, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faBlogger, } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <div className='navi'>
            <div className="head d-flex justify-content-between align-items-center">
                <img src={logo} alt="" />
                <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon>
            </div>
            <div className="admin">
                <div className="img-con">
                    <img src={admin} alt="" />
                </div>
                <div className="det">
                    <h6>Minimal UI</h6>
                    <p>admin</p>
                </div>
            </div>
            <div className="navigation">
                <h5>GENERAL</h5>
                <ul className='list-item'>
                    <li className='list active'>
                        <FontAwesomeIcon className="icon" icon={faAppStore}></FontAwesomeIcon> App
                    </li>
                    <li className='list'>
                        <FontAwesomeIcon className="icon" icon={faBagShopping}></FontAwesomeIcon> E-Commerse
                    </li>
                    <li className='list'>
                        <FontAwesomeIcon className="icon" icon={faChartLine}></FontAwesomeIcon> Analytics
                    </li>
                    <li className='list'>
                        <FontAwesomeIcon className="icon" icon={faBuildingColumns}></FontAwesomeIcon> Banking
                    </li>
                    <li className='list'>
                        <FontAwesomeIcon className="icon" icon={faCalendarTimes}></FontAwesomeIcon> Booking
                    </li>
                </ul>
            </div>
            <div className="navigation">
                <h5>GENERAL</h5>
                <ul className='list-item'>
                    <li className='list'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon> User
                            </div>
                            <FontAwesomeIcon className="icon" icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                    </li>
                    <li className='list'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCartArrowDown}></FontAwesomeIcon> E-commerse
                            </div>
                            <FontAwesomeIcon className="icon" icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                    </li>
                    <li className='list'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faBlogger}></FontAwesomeIcon> Blog
                            </div>
                            <FontAwesomeIcon className="icon" icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="navigation">
                <h5>APP</h5>
                <ul className='list-item'>
                    <li className="list">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon> Mail
                            </div>
                            <FontAwesomeIcon className="iconn" icon={ fa2 }></FontAwesomeIcon>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar