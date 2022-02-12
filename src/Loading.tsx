import { Spin } from "antd";

export default function Loading() {
  return (
    <Spin tip="loading">
      <div style={{ minHeight: "90vh" }} className="center" />
    </Spin>
  );
}
