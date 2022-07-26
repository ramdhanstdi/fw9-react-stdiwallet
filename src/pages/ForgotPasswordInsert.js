import { Button, Col, Form, Row } from 'react-bootstrap';
import { FiLock} from 'react-icons/fi';
import React from 'react'
import Auth from '../component/Auth'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Helmet } from 'react-helmet';

const passwordSchema = Yup.object().shape({
  password: Yup.string().min(8).required('Required'),
  newpassword: Yup.string().min(8).required('Required')
})

const AuthPassword = ({errors,handleChange,handleSubmit}) =>{
  let lock = true
  lock = errors.email!==undefined&&errors.password!==undefined
  return(
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="d-flex mt-5">
          <span className="auth-form"> <FiLock/> </span>
          <div className="d-flex-column w-100">
            <Form.Control name="password" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.password}/>
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group className="d-flex mt-5">
          <span className="auth-form"> <FiLock/> </span>
          <div className="d-flex-column w-100">
            <Form.Control name="newpassword" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.newpassword}/>
            <Form.Control.Feedback type="invalid">{errors.newpassword}</Form.Control.Feedback>
          </div>
        </Form.Group>
        <div>
          <Button disabled={lock} className="btn-primary auth-button w-100 mt-5" type="submit">Reset Password</Button>
        </div>
      </Form>
    </>
  )
}

const ForgotPasswordInsert = () => {
  const navigate = useNavigate()
  const passswordReset = (val) => {
    if(val.password!==val.newpassword){
      window.alert('Password Not Match')
    }else{
      navigate('/login',{replace: true})
    }
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Passsword</title>
      </Helmet>
      <Row className="mw-100 mh-100 mx-0">
        <Auth/>
        <Col md={5} className='p-4 p-md-5'>
          <div className="d-flex-column me-0 me-md-5">
            <div>
              <h1 className="auth-h1form mt-2 mt-md-5">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h1>
            </div>
            <div>
              <p className="auth-text-form mt-5">Now you can create a new password for your STD iWallet account. Type your password twice so we can confirm your new passsword.</p>
            </div>
            <Formik validationSchema={passwordSchema} initialValues={{password:''}} onSubmit={passswordReset}>
              {(props)=><AuthPassword {...props}/>}
            </Formik>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ForgotPasswordInsert
