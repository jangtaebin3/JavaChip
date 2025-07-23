import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/common/input";
import "./style.css";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    nickname: "",
    email: "",
    terms: false,
    privacy: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!form.username || !form.password || !form.name || !form.nickname || !form.email) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    if (!form.terms || !form.privacy) {
      alert("약관에 동의해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // 서버로 보낼 데이터 (체크박스 제외)
      const requestData = {
        username: form.username,
        password: form.password,
        name: form.name,
        nickname: form.nickname,
        email: form.email
      };

      const response = await fetch('/auth/saveac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('회원가입 성공:', responseData);
        
        // 성공 페이지로 이동
        navigate("/auth/success");
      } else {
        const errorData = await response.json();
        console.error('회원가입 실패:', errorData);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="SignUpBox">
      <p id="registerTitle">회원가입</p>
      <form onSubmit={handleSubmit}>
        <div className="idpw">
          <Input
            type="text"
            id="username"
            className="InputBox"
            name="username"
            required
            placeholder="아이디*"
            value={form.username}
            onChange={handleChange}
            disabled={isLoading}
          />
          <Input
            type="password"
            id="password"
            className="InputBox"
            name="password"
            required
            placeholder="비밀번호*"
            value={form.password}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="UserInfo">
          <Input
            type="text"
            id="name"
            className="InputBox"
            name="name"
            required
            placeholder="이름*"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
          />
          <Input
            type="text"
            id="nickname"
            className="InputBox"
            name="nickname"
            required
            placeholder="닉네임*"
            value={form.nickname}
            onChange={handleChange}
            disabled={isLoading}
          />
          <Input
            type="email"
            id="email"
            className="InputBox"
            name="email"
            required
            placeholder="이메일*"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="checkboxes">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              name="terms"
              required
              checked={form.terms}
              onChange={handleChange}
              disabled={isLoading}
            />
            서비스 이용약관에 동의합니다
          </label>
          <label className="checkboxLabel">
            <input
              type="checkbox"
              name="privacy"
              required
              checked={form.privacy}
              onChange={handleChange}
              disabled={isLoading}
            />
            개인정보처리방침에 동의합니다
          </label>
        </div>
        <div className="registerButtonField">
          <button 
            type="submit" 
            className="registerButton"
            disabled={isLoading}
          >
            {isLoading ? "회원가입 중..." : "회원가입하기"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;