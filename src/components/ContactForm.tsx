"use client";
import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Space, message, ConfigProvider, theme } from 'antd';
import { PhoneOutlined, CheckCircleOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: { name: string; phone: string; company: string; needs: string }) => {
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      
      if (res.ok) {
        setStatus('success');
        form.resetFields();
        message.success('需求提交成功，我们的专家将尽快联系您！');
      } else {
        setStatus('error');
        message.error('提交失败，请稍后重试');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      message.error('提交失败，请检查网络连接');
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('提交失败:', errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          colorBgContainer: '#ffffff',
          colorBorder: '#d9d9d9',
        },
      }}
    >
      <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <Title level={2} className="!text-slate-900 !mb-6 !text-4xl md:!text-5xl !font-bold">
                开启智能制造之旅
              </Title>
              <Paragraph className="!text-slate-600 !text-lg !mb-8">
                提交需求，我们的机器视觉专家将在 24 小时内与您取得联系，并提供定制化 Demo 演示。
              </Paragraph>
              
              <div className="space-y-6">
                <Space align="center" size="middle">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-geekBlue shadow-sm">
                    <PhoneOutlined className="text-xl" />
                  </div>
                  <div>
                    <Text className="!text-slate-500 !text-sm block">技术咨询热线 (秦工)</Text>
                    <Text className="!text-slate-900 !font-medium block">13913580046</Text>
                  </div>
                </Space>

                <br />

                <Space align="center" size="middle">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-geekBlue shadow-sm">
                    <MailOutlined className="text-xl" />
                  </div>
                  <div>
                    <Text className="!text-slate-500 !text-sm block">邮箱联系</Text>
                    <Text className="!text-slate-900 !font-medium block">tianjunai@vip.163.com</Text>
                  </div>
                </Space>

                <br />

                <Space align="center" size="middle">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-geekBlue shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <Text className="!text-slate-500 !text-sm block">公司地址</Text>
                    <Text className="!text-slate-900 !font-medium block">苏州市太湖新城绿地复客智慧产业园B幢东楼708室</Text>
                  </div>
                </Space>
              </div>
            </div>

            <Card
              className="!bg-white !border-slate-200 !rounded-3xl shadow-xl transition-shadow hover:shadow-2xl"
              bodyStyle={{ padding: '2rem' }}
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircleOutlined className="text-5xl text-green-500 mb-4" />
                  <Title level={3} className="!text-slate-900 !mb-2">提交成功</Title>
                  <Paragraph className="!text-slate-600">感谢您的关注，产品专家将尽快联系您。</Paragraph>
                  <Button 
                    type="default" 
                    onClick={() => setStatus('idle')}
                    className="mt-8"
                  >
                    继续提交
                  </Button>
                </div>
              ) : (
                <Form 
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  onFinishFailed={onFinishFailed}
                  requiredMark="optional"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Form.Item 
                      name="name" 
                      label={<span className="text-slate-700 font-medium">姓名</span>}
                      rules={[{ required: true, message: '请输入您的姓名' }]}
                    >
                      <Input placeholder="您的姓名" size="large" className="hover:border-geekBlue focus:border-geekBlue" />
                    </Form.Item>
                    <Form.Item 
                      name="phone" 
                      label={<span className="text-slate-700 font-medium">联系电话</span>}
                      rules={[
                        { required: true, message: '请输入联系电话' },
                        { pattern: /^1\d{10}$/, message: '请输入正确的手机号码' }
                      ]}
                    >
                      <Input placeholder="手机号码" size="large" maxLength={11} className="hover:border-geekBlue focus:border-geekBlue" />
                    </Form.Item>
                  </div>
                  
                  <Form.Item 
                    name="company" 
                    label={<span className="text-slate-700 font-medium">公司名称</span>}
                  >
                    <Input placeholder="所属企业/机构" size="large" className="hover:border-geekBlue focus:border-geekBlue" />
                  </Form.Item>
                  
                  <Form.Item 
                    name="needs" 
                    label={<span className="text-slate-700 font-medium">需求简述</span>}
                  >
                    <TextArea 
                      rows={4} 
                      placeholder="请简要描述您的检测场景或硬件需求" 
                      style={{ resize: 'none' }}
                      className="hover:border-geekBlue focus:border-geekBlue"
                    />
                  </Form.Item>
                  
                  <Form.Item className="mb-0 mt-6">
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      loading={status === 'loading'}
                      block 
                      size="large"
                      className="!bg-geekBlue hover:!bg-blue-600 !h-14 font-medium !rounded-xl shadow-[0_4px_14px_rgba(24,144,255,0.35)]"
                    >
                      {status === 'loading' ? '提交中...' : '免费获取解决方案'}
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Card>

          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default ContactForm;
