import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import { Footer } from '../component/Footer'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import samuel from '../assets/images/samuel.png'
import failed from '../assets/images/failed.png'
import { Helmet } from 'react-helmet'
import {useSelector, useDispatch} from 'react-redux'
import { resetAmount } from '../redux/reducer/amount'
import { resetNotes } from '../redux/reducer/notes'

export const StatusFailed = () => {
  const dispatch = useDispatch()
  const amount = useSelector((state=>state.amount.value))
  const notes = useSelector((state=>state.notes.value))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Failed</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <div className='w-100 text-center my-5'>
                <img src={failed} alt='failed'/>
                <p className="wrap-status-transfer my-5">Transfer Failed</p>
                <p className='wrap-text'>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Amount</p>
                      <p className="wrap-name-confirm">Rp{amount}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Balance Left</p>
                      <p className="wrap-name-confirm">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Date & Time</p>
                      <p className="wrap-name-confirm">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p  className="wrap-type-confirm mb-1">Notes</p>
                      <p className="wrap-name-confirm">{notes}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="wrap-title">Transfer to</h1>
              <div className="d-flex-column wrap-receiver p-3 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={samuel} className="img-home-prof" alt="samuel"/>
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="wrap-name-transfer">Samuel Suhi</p>
                      <p  className="wrap-type">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-end">
                <Link to='/pinConfirm'>
                  <Button className="auth-button my-5" onClick={[()=>dispatch(resetAmount),()=>dispatch(resetNotes)]} type="submit">Try Again</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
