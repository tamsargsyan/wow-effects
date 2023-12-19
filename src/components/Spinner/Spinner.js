import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Spinner = ({ color, size }) => (
  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: size || 36,
          color: color || "var(--main-color-pink)",
        }}
        spin
      />
    }
  />
);
export default Spinner;
