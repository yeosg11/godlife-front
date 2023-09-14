import React from 'react'
import './style.css';
import InputBox from 'components/InputBox';
import './style.css';
export default function Authentication() {
  return (
    <div id='auth-wrapper' >
      
      <div className='auth-card-container'>
        <div className='auth-card-title-text'>{'갓생 살기'}</div>
        <div className="auth-card-text-email">skin_lotion@naver.com</div>
         
         <div className='auth-card-input-container'>
            <div className="auth-card-text-email-address">이메일 주소</div>

            <div className="auth-card-text-email-input-box">
              <InputBox label='이메일 주소*' type='text' placeholder='사용할 이메일을 입력하세요.' />
            </div>
            <div className="auth-card-text-email-address">전체 이름</div>
            <div className="auth-card-text-name-input-box"></div>
            <div className="auth-card-text-email-address">비밀번호</div>
            <div className="auth-card-text-password-input-box">
              <div className="gray-line-box"></div>
              <div className="gray-line-box"></div>
              <div className="gray-line-box"></div>
              <div className="gray-line-box"></div>
              <div className="gray-line-box"></div>
            </div>
            <div className="auth-card-text-email">가입하면 Atlassian Cloud 이용 약관에 동의하고 개인정보 보호정책을 인정한 것으로 간주됩니다.</div>  
            <div className='auth-card-title-text'>{'갓생 살기'}</div>
         </div>
         
        <div className="auth-card-email-box">
        </div>
      </div>
    </div>
  )
}



// {page === 1 && (<>
//   <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요.' value={email} setValue={setEmail} error={emailError} errorMessage={emailErrorMessage} />
//   <InputBox label='비밀번호*' type={passwordType} placeholder='비밀번호를 입력해주세요.' value={password} setValue={setPassword} icon={passwordIcon} error={passwordError} errorMessage={passwordErrorMessage} onButtonClick={onPasswordIconClickHandler} />
//   <InputBox label='비밀번호 확인*' type={passwordCheckType} placeholder='비밀번호를 다시 입력해주세요.' value={passwordCheck} setValue={setPasswordCheck} icon={passwordCheckIcon} error={passwordCheckError} errorMessage={passwordCheckErrorMessage} onButtonClick={onPasswordCheckIconClickHandler} />
//   </>)}
//   {page === 2 && (<>
//   <InputBox label='닉네임*' type='text' placeholder='닉네임을 입력해주세요.' value={nickname} setValue={setNickname} error={nicknameError} errorMessage={nicknameErrorMessage} />
//   <InputBox label='핸드폰 번호*' type='text' placeholder='핸드폰 번호를 입력해주세요.' value={telNumber} setValue={setTelNumber} error={telNumberError} errorMessage={telNumbeErrorMessage} />
//   <InputBox label='주소*' type='text' placeholder='우편번호 찾기' value={address} setValue={setAddress} icon='right-arrow-icon' error={addressError} errorMessage={addressErrorMessage} onButtonClick={onAddressIconClickHandler} />
//   <InputBox label='상세 주소' type='text' placeholder='상세 주소를 입력해주세요.' value={addressDetail} setValue={setAddressDetail} error={false} />
//   </>)}