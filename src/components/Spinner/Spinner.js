import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Spinner = () => (
  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 36,
          color: `var(--main-color-pink)`,
        }}
        spin
      />
    }
  />
);
export default Spinner;
