import { Fragment } from "react";
import { useState, useContext } from "react";
import { SignUp } from "../../utils/signup";

import FormInput from "../../components/form-input/form-input.component";

import Button from "../../components/button/button-component";
import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";


// 作为表单的默认字段 作为状态的初始值
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // 更新formFields 对象里字段 name 为 vaule name加[]是因为它不是一个key
    setFormFields({ ...formFields, [name]: value });
  };

  // 提交
  const handleSubmit = async (event) => {
    event.preventDefault();
    var ojb = {};
    Object.keys(formFields).forEach((el) => {
      if (el === "displayName") {
        ojb["name"] = formFields.displayName;
      } else {
        ojb[el] = formFields[el];
      }
    });
    const user = await SignUp(ojb);
    console.log(user)
    setCurrentUser(user)
    setFormFields(defaultFormFields);
  };
  return (
    <Fragment>
      <main className="main">
        <div className="signup-form">
          <h2 className="heading-secondary">请使用您的电子邮件和密码注册</h2>

          <form className="form form--signup" onSubmit={handleSubmit}>
            <FormInput
              label="ID"
              type="text"
              id="text"
              className="form__input"
              required
              name="displayName"
              value={displayName}
              onChange={handleChange}
            />

            <FormInput
              label="邮件"
              type="email"
              id="email"
              className="form__input"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />

            <FormInput
              label="密码"
              type="password"
              id="password"
              className="form__input"
              required
              name="password"
              value={password}
              onChange={handleChange}
            />

            <FormInput
              label="密码确认"
              type="password"
              id="passwordConfirm"
              className="form__input"
              required
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handleChange}
            />
            <Button type='submit' id='button-signup'>Sign Up</Button>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default SignUpForm;
