import React, { useContext } from 'react';
import { Card, Form, Input, Row, Col, Button, Select } from 'antd';
import { QosOption } from './index'

const Subscriber = ({ sub, unSub, showUnsub }) => {
  const [form] = Form.useForm();
  const qosOptions = useContext(QosOption);

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const onFinish = (values) => {
    sub(values);
  };

  const handleUnsub = () => {
    const values = form.getFieldsValue();
    unSub(values);
  };

  const SubForm = (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Topic"
            name="topic"
          >
            <Input size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="QoS"
            name="qos"
          >
            <Select options={qosOptions} size={'large'} style={{borderRadius:"10px"}}/>
          </Form.Item>
        </Col>
        <Col span={12}  >
          <Form.Item>
            <Button type="primary" size={'large'} style={{ background:"#36A2EB" ,border:"none",borderRadius:"10px"}} htmlType="submit" block>
              Subscribe
            </Button>
          </Form.Item>
          </Col>
          <Col span={12}  >
          <Form.Item>
          <Button danger style={{borderRadius:"10px"}} size={'large'} onClick={handleUnsub} block>
                  Unsubscribe
          </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )

  return (
    <Card 
      title="Subscriber"
      bordered={false}
      style={{ width: "70%", margin:"1rem",borderRadius:"1rem", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px" }}>
      {SubForm}
    </Card>
  );
}

export default Subscriber;
