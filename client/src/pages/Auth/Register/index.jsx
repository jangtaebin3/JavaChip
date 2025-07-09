import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/common/input/input.jsx";
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직 추가
    navigate("/auth/success");
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
            placeholder="아이디"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            id="password"
            className="InputBox"
            name="password"
            required
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="UserInfo">
          <Input
            type="text"
            id="name"
            className="InputBox"
            name="name"
            required
            placeholder="이름"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="nickname"
            className="InputBox"
            name="nickname"
            required
            placeholder="닉네임"
            value={form.nickname}
            onChange={handleChange}
          />
          <Input
            type="email"
            id="email"
            className="InputBox"
            name="email"
            required
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
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
            />
            개인정보처리방침에 동의합니다
          </label>
        </div>
        <div className="registerButtonField">
          <button type="submit" className="registerButton">
            회원가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;