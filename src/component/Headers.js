import {Col,Row,Dropdown} from "react-bootstrap";
import React from 'react'
import profile from "../assets/images/Rectangle 25.png"
import {FiBell,FiArrowUp,FiArrowDown} from "react-icons/fi"

const Header = () => {
  return (
    <>
    <Row className="d-flex justify-content-between mw-100 wrap-header">
        <Col md={7}>
            <div className="px-3 px-md-5 mx-0 mx-md-5">
              <span className="title-wallet">STD iWallet</span>
          </div>
        </Col>
        <Col md={5}>
            <div className="d-flex justify-content-between justify-content-md-end align-items-center wrap-profile ps-3 px-md-3 mx-2 mx-md-3">
                <img src={profile} className="img-home-prof img-fluid" alt="profile"/>
                <div className="d-flex-column justify-content-center mx-3">
                    <p className="name-profile">Robert Chandler</p>
                    <p className="num-profile">+62 8139 3877 7946</p>
                </div>
                <Dropdown>
                    <Dropdown.Toggle className="w-100 wrap-bg-button wrap-header-button" type="button">
                        <FiBell className="wrap-nav-dashboard wrap-header-button"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><p className="wrap-time mb-4">Today</p></Dropdown.Item>
                        <Dropdown.Item>
                        <div className="d-flex-column wrap-receiver p-3 m-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <FiArrowDown className="money-in"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name">Transfered from Joshua Lee</p>
                                        <p  className="wrap-amount">Rp220.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <div className="d-flex wrap-receiver p-3 m-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <FiArrowUp className="money-out"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name">Netflix subscription</p>
                                        <p  className="wrap-amount">Rp149.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item><p className="wrap-time my-4">This Week</p></Dropdown.Item>
                        <Dropdown.Item>
                        <div className="d-flex-column wrap-receiver p-3 m-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <FiArrowUp className="money-out"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name">Transfer to Jessica Lee</p>
                                        <p  className="wrap-amount">Rp100.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <div className="d-flex-column wrap-receiver p-3 m-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <FiArrowDown className="money-in"/>
                                    <div className="d-flex-column justify-content-center ms-3">
                                        <p className="wrap-name">Top up from BNI E-Banking</p>
                                        <p  className="wrap-amount">Rp300.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Header
