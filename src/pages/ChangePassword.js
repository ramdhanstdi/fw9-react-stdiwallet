import React from 'react'
import { Footer } from '../component/Footer'
import { Row,Col, Form, Button, Alert } from 'react-bootstrap'
import Header from '../component/Headers'
import NavBoard from '../component/NavBoard'
import { FiLock } from 'react-icons/fi'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'
import { useDispatch,useSelector } from 'react-redux'
import { changePassword } from '../redux/asyncAction/changePassword'
import { resetMsgProf, showProfile } from '../redux/reducer/profile'

const passwordSchema = Yup.object().shape({
  currentpassword:Yup.string().required('Required'),
  password: Yup.string().min(8).required('Required'),
  newpassword: Yup.string().min(8).required('Required')
})

const AuthPassword = ({errors,handleChange,handleSubmit}) =>{
  let lock=true
  lock = errors.currentpassword!==undefined&&errors.password!==undefined
  return(
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <div className="d-flex-column mx-auto wrap-profile-list">
          <Form.Group className="d-flex mt-5">
            <span className="auth-form"> <FiLock/> </span>
            <div className="d-flex-column w-100">
              <Form.Control name="currentpassword" onChange={handleChange} className="auth-form" type="password" placeholder="Enter Your Password" isInvalid={!!errors.currentpassword}/>
              <Form.Control.Feedback type="invalid">{errors.currentpassword}</Form.Control.Feedback>
            </div>
          </Form.Group>

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
        </div>
        <div className="text-center wrap-button my-5">
          <Button disabled={lock} type='submit' className="button-insert">Change Password</Button>
        </div>
      </Form>
    </>
  )
}

export const ChangePassword = () => {
  const [warning,setWarning] = React.useState('')
  const dispatch = useDispatch()
  const token = useSelector((state=>state.auth.token))
  const errormsg = useSelector(state=>state.profile.errormsg)
  const successmsg = useSelector(state=>state.profile.successmsg)
  const changePasswordRequest = (val) => {
    const request = {
      oldPass: val.currentpassword,
      newPass: val.password,
      confirmPass: val.newpassword,
    };
    if(val.newpassword!==val.password){
      setWarning('Confirm Password Not Match')
      setTimeout(()=>setWarning(''),5 * 1000)
    }else{
      dispatch(changePassword({token,request}))
    }
  }
  setTimeout(()=>dispatch(resetMsgProf()),5 * 1000)
  React.useEffect(()=>{
    if(successmsg){
      showProfile(token)
    }
  },[successmsg])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password</title>
      </Helmet>
      <Header/>
      <section className='wrap-section'>
        <Row className='px-2 px-md-5 mx-md-5'>
          <NavBoard/>
          <Col md={9} className='d-flex flex-column mt-3'>
            <div className='wrap-right-el d-flex-column px-3 px-md-4 pt-3 pt-md-4'>
              <h1 className="wrap-title mb-3">Change Password</h1>
              <p className='wrap-text'>You must enter your current password and then type your new password twice.</p>
              {errormsg||warning?(
                <Alert className="sticky-top text-center" variant="danger">{errormsg||warning}</Alert>
              ): null}
              {successmsg?(
                <Alert className="sticky-top text-center" variant="success">{successmsg}</Alert>
              ): null}
              <Formik validationSchema={passwordSchema} initialValues={{currentpassword:'',password:'',newpassword:''}} onSubmit={changePasswordRequest}>
                {(props)=><AuthPassword{...props}/>}
              </Formik>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </>
  )
}
