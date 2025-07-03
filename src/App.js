import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './scss/common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import loginBtnImg from './image/login_btn.png';
import loginTextImg from './image/text_img.png';

function App() {
  return (
<>
<header id="header">
		<div className="header_inner">
			<h1><span>SML MEDITREE</span> Real-time Visit management &amp; Data search System</h1>
		</div>
	</header>
	<section id="index_main">
		<div className="login_form" id="meditreeLogin">
			<form action="https://rvds.medi-tree.com/meditree/">
				<fieldset>
					<div className="login_form_inner">
						<h2>SML MEDITREE RVDS</h2>
						<p><span>SML 메디트리</span> 임상시험 관리 시스템</p>
						<button type="button" id="login_btn"  className='imageButton'><img src={loginBtnImg} alt="로그인 버튼"/></button>
						<div className="input_id">
							<input type="text" placeholder="ID" onFocus="" onBlur="" id="login_id" value=""/>
						</div>
						<div className="input_pw">
							<input type="password" placeholder="Password" onFocus="" onblur="this.placeholder=&#39;Password&#39;" id="login_pw"/>
						</div>
						<div className="text">
							<a href="" id="find_btn">Forgot ID or password ?</a>
							<img src={loginTextImg} alt="This site is only accessible to authorized users. Please log in with your ID and password."/>
						</div>
						
						<div className="copy">
							<p>Copyright (C) 2017 SML Meditree Co., All Rights Reserved.</p>
						</div>
					</div>
				</fieldset>
				<section className="modal_wrap">
					<div className="popup_style02">
						<div className="pop_head">
							<h2>Forgot ID or password</h2>
							<a href="https://rvds.medi-tree.com/meditree/#!" className="modal_close"><img src="/meditree/image/modal_close_btn.png" alt="모달 창 닫기 버튼"/></a>
						</div>
						<div className="pop_body">
							<h3>SML 메디트리로 연락 부탁드립니다.</h3>
							<h3>연락처 : 02-575-3395</h3>
						</div>
					</div>
				</section>

			</form>
		</div>
	<input type="hidden" id="rsaPublicKeyModulus" value="8ff68d75ec36381a719798034fd9d19fc8c07ca5917e8e490db29b06e58cfba40f7cd4f1f12840147e5d3638756818289fcf5ce0bb06dd3e959973411dd7b6a478cb166835215d119f1e948ca8da59c3a9bdcabd5b110303d147f34e99ee9922bd2ae78c0f1e26c5b78868cae1d779357568ec017fa915141df86670011598c5"/>
	<input type="hidden" id="rsaPublicKeyExponent" value="10001"/>
	</section>
</>
  );
}


export default App;
