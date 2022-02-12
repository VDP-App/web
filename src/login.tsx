import { Form, Input, Button, Checkbox, message } from "antd";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./firebase";

let loading = false;

const onFinish = (values: { email: string; password: string }) => {
  if (loading) return;
  loading = true;
  const l = message.loading("logging in", 0);
  signInWithEmailAndPassword(auth, values.email, values.password)
    .catch((x) => {
      message.error(x?.message ?? "Something went Wrong");
    })
    .finally(() => {
      loading = false;
      l();
    });
};

export default function LogIn() {
  return (
    <div>
      <div style={{ height: 100 }} />
      <Form
        className="center"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
