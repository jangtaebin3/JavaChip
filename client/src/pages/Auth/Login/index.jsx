import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/common/input";
import "./style.css";

const Login = () => {
  const [form, setForm] = useState({
    userid: '',
    userpw: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", form); //알아서 바꾸쇼
  };

  return (
      <div className="LoginWrapper">
        <form className="Login" onSubmit={onSubmit}>
          <div className="LoginInput">
            <Input
              type="text"
              value={form.userid}
              onChange={onChange}
              placeholder="아이디"
              name="userid"
            />
          </div>
          <div className="LoginInput">
            <Input 
              type="password"
              value={form.userpw}
              onChange={onChange}
              placeholder="비밀번호"
              name="userpw"
            />
          </div>

          <div className="ForgotIdPw">
            <Link href="#">아이디/비밀번호를 잊어버리셨나요? &gt;</Link>
          </div>

          <div id="LoginButton">
            <input type="submit" value="로그인" />
          </div>

          <div id="SignUp">
            <Link href="#">돈바라기가 처음이신가요? &gt;</Link>
          </div>
        </form>
      </div>
  );
}

export default Login;