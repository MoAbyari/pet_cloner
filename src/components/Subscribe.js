import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './App.css';
import { db } from '../services/firebase.js'
import React, {Component} from 'react';
const database = db.collection("Users");
const { Option } = Select;


class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {submitted: false, agreedToTC: false};
    this._handleTCToggle = this._handleTCToggle.bind(this);
  }

  _handleTCToggle(){
    this.setState({ agreedToTC: !this.state.agreedToTC } ) 
  }

    onFinish = (values) => {
      console.log(values);
      db.collection("Users").doc()
      .set({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        ausState:values.ausState,
        dog: values.dog,
        cat: values.cat},
        {merge:true})
      this.setState({submitted: true})
    }

  
  
  form = () => {
    return(
      <div className= "subscribe-container">
        <div class="formHeader">
              <div class="logoVert"> </div>
              <h3>Subscribe to our newsletter today</h3>
              <p>For all the latest scientific advances, EvaGen stories and events.  </p>
          </div>

        <Form onFinish={this.onFinish}>

          <div className="subscribe-checkboxes">
              <p>Owner of:</p>
              <Form.Item
                name="dog"
                initialValue={false}
                valuePropName="checked"
              >
                <Checkbox>
                  Dog
                </Checkbox>
              </Form.Item>

                <Form.Item
                name="cat"
                initialValue={false}
                valuePropName="checked"
              >
                <Checkbox >
                Cat
                </Checkbox>
              </Form.Item>
            </div>

          <Form.Item
            name="firstName"
            label="First Name"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your first name'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your last name'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            labelCol={{ span: 24 }}
            rules={[
            {
            type: 'email',
            message: 'The input is not valid E-mail!',
            },
            {
            required: true,
            message: 'Please input your E-mail!',
            }
            ]}
          >
          <Input />
          </Form.Item>

          <Form.Item
            name="ausState"
            label="State"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Please select your state!' }]}
          >
            <Select>
              <Option value="NSW">NSW</Option>
              <Option value="VIC">VIC</Option>
              <Option value="TAZ">TAZ</Option>
              <Option value="QLD">QLD</Option>
              <Option value="SA">SA</Option>
              <Option value="NT">NT</Option>
              <Option value="ACT">ACT</Option>
              <Option value="WA">WA</Option>
            </Select>
          </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[{
                transform: value => (value || undefined),  
                type: 'boolean',                           
                message: 'Please agree the terms and conditions.', 
              }]}
            >
            <Checkbox onClick={this._handleTCToggle}>
              I agree to receive emails from EvaGen
            </Checkbox>
            </Form.Item>
            <Form.Item >
              { this.state.agreedToTC ?
                <Button type="primary" htmlType="submit">Subscribe</Button> 
                :
                <Button type="primary" htmlType="submit" disabled>Subscribe</Button>
              }
              
            </Form.Item>
            <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information see our Privacy Policy</p>

        </Form>
      </div>
    )
  }

  confirmation = () => {
    return(
      <div className= "submitted-container">
        <div class="logoVert"> </div>
        <h2>Thank you for subscribing</h2>
      </div>
    )
  }

  render() {
      return(
        <div>
          { this.state.submitted ?
              this.confirmation() : this.form()
          }
        </div>
      );
    }

}

export default Subscribe;
