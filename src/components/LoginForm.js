import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Checkbox } from "antd";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log("Success:", data);
        if (data.token) {
          toast.success("Login Successful");
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email*"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password*"
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button w-full"
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </Form.Item>
        <Form.Item>
          <div className="flex flex-row justify-between">
            <div>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>

            <div>
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
            </div>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
