
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
const SpinLoading = () => (
  <Flex align="center" gap="medium">
    
    <Spin style={{color:"white"}} indicator={<LoadingOutlined spin />} />
    
  </Flex>
);
export default SpinLoading;