
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
const FullLoader = () => (
  <Flex align="center" gap="medium">
    
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 ,color: 'indigo' }} spin />} />
  </Flex>
);
export default FullLoader;