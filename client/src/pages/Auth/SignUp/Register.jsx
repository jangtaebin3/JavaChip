import React, { useState } from "react";
import Input from "../../../components/common/input/input.jsx";

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
    alert("회원가입 완료!");
  };

  return (
    <div className="SignUpBox">
      <h2>회원가입</h2>
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
          <label>
            <input
              type="checkbox"
              name="terms"
              required
              checked={form.terms}
              onChange={handleChange}
            />
            서비스 이용약관에 동의합니다
          </label>
          <label>
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
        <div className="Button">
          <button type="submit" className="SignUpButton">
            회원가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;