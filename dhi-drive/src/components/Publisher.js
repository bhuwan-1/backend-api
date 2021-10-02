import React, {useState} from 'react';
import { Card, Switch} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Publisher = ({ publish }) => {

  const tank_1_on= {
    topic: 'ControlFN', // Topic for publisher 
    
    payload:"1"
  };

  const tank_1_off= {
    topic: 'ControlFN',
    
    payload:"0"
  };

  const[current, setCurrent] = useState(false);

  const toggler = () => {
      current ? setCurrent(false): setCurrent(true);
      if (current) {
        publish(tank_1_off)
     }
     else {
      publish(tank_1_on)
     }
  }
  return (
    <Card
      title="Switch"
      style={{ width: "30%",  margin:"1rem",borderRadius:"1rem", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"  }}
      bordered={false}
    >
      <Switch onClick={toggler} size={'large'} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />}/>  
    </Card>
  );
}

export default Publisher;
