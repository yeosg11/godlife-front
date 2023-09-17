import React from 'react'
import './style.css';
// import InputBox from 'components/InputBox';
import './style.css';
export default function Authentication() {
  return (
    <div id='auth-wrapper' >
      
      <div className='auth-card-container'>
        <div className='auth-card-title-text'>{'갓생 살기'}</div>
        <div className='auth-card-text-email-address'>skin_lotion@naver.com</div>
        <div className='auth-card-input-container'>
          <div className='auth-card-text-email'>이메일 주소</div>
          <input className="email-holder" type='text' placeholder='사용할 이메일을 입력하세요.' />
          <div className="auth-card-name-text">전체 이름</div>
          <input className="name-holder" type='text' placeholder='이름을 입력하세요.' />
          <div className="auth-card-text-name-input-box"></div>
          <div className="auth-card-password-text">비밀번호</div>
          <input className="password-holder" type='text' placeholder='새 비밀번호를 입력하세요.' />
          <div className="gray-line-box">
            <div className="gray-line"></div>
            <div className="gray-line"></div>
            <div className="gray-line"></div>
            <div className="gray-line"></div>
            <div className="gray-line"></div>
          </div>
         </div>
        <div className="auth-description">
          {'가입하면 Atlassian Cloud 이용 약관에 동의하고 \n 개인정보 보호정책을 인정한 것으로 간주됩니다.'}
        </div>  
        <div className='auth-card-bottom-text'>{'계속'}</div>
        </div>
      </div>
    
  )
}
