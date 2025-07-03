import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
<>
<Container>
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9 mt-6">

                <div className="card o-hidden border-0 shadow-lg my-5 white-none">
                    <div className="card-body p-0 white-none">
                        <div className="row">
                            <div className="col-lg-6 white-none"></div>
                            <div className="col-lg-6">
                                <div className="p-5 loginBg mt-8">
                                    <div className="d-flex justify-content-start">
                                        <h1 className="h2 fw-bold text-white">SML MEDITREE RVDS</h1>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                    <div className='down'>SML 메디트리 임상시험 관리 시스템</div>
                                    </div>
                                    <form className="user">
                          <div className="form-group position-relative">
  <FontAwesomeIcon
    icon={faUser}
    className="input-icon"
  />
  <input
    type="email"
    className="form-control form-control-user inputBgColor inputFontColor ps-5 border-0"
    id="exampleInputEmail"
    aria-describedby="emailHelp"
    placeholder="ID"
  />
</div>

<div className="form-group position-relative">
  <FontAwesomeIcon
    icon={faLock}
    className="input-icon"
  />
  <input
    type="password"
    className="form-control form-control-user inputBgColor inputFontColor ps-5 border-0"
    id="Password"
    placeholder="Password"
  />
</div>

        
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr/>
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="register.html">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
</Container>
</>
  );
}

export default App;
