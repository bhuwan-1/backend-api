import React from 'react';
import { Card, Button, Form, Input, Row, Col } from 'antd';


const Connection = ({ connect, disconnect, connectBtn }) => {
  const [form] = Form.useForm();
  const record = {
    host: 'broker.emqx.io',
    clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
    port: 8083,
  };
  const onFinish = (values) => {
    const { host, clientId, port, username, password } = values;
    const url = `ws://${host}:${port}/mqtt`;
    const options = {
      keepalive: 30,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
      },
      rejectUnauthorized: false
    };
    options.clientId = clientId;
    options.username = username;
    options.password = password;
    connect(url, options);
  };

  const handleConnect = () => {
    form.submit();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const ConnectionForm = (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col span={8}>
          <Form.Item
            label="Host"
            name="host"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Port"
            name="port"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Client ID"
            name="clientId"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Username"
            name="username"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}> 
            <Col span={12}>
            <Form.Item>
          <Button type="primary" size={'large'} onClick={handleConnect} style={{ background:"#36A2EB" ,border:"none",borderRadius:"10px"}} block>{connectBtn}</Button> </Form.Item>
        
            </Col>
            <Col span={12}>
            <Form.Item>
          <Button danger  size={'large'} onClick={handleDisconnect} style={{borderRadius:"10px"}} block>Disconnect</Button>  
          </Form.Item>
            </Col>
          </Row>
    </Form>
  )

  return (
    <Card
    className="Card"
    style={{ width: "100%", margin:"1rem",borderRadius:"1rem", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px" }}
      title="Connect"
      bordered={false}
    >
      {ConnectionForm}
    </Card>
  );
}

export default Connection;
