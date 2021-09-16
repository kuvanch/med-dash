import { Card, Typography } from 'antd'
import Layout from 'antd/lib/layout/layout'
import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';

const initialState = {
    username: "",
    password: ""
}

export const Login = () => {

    const [form, setForm] = useState(initialState);

    const onChane = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    const onSentData = () => {
        console.log(form)
    }

    return (
        <Layout className='login'>
            <Card className="login__card">
                <Typography.Title level={3} strong style={{textAlign:'center'}}>Kirish</Typography.Title>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Login"
                        name="username"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name='username' onChange={onChane} value={form} />
                    </Form.Item>

                    <Form.Item
                        label="Parol"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={onChane} value={form} name='password'/>
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className="login__btn" onClick={onSentData}>
                        Kirish
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    )
}
