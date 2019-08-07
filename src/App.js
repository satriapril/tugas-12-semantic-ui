import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Segment, Form, Checkbox, Button, Grid, Image, Header, Message } from 'semantic-ui-react';

class App extends Component {
  render(){
    return(
      <div>
        <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header color="teal" as='h2'>
              <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> Member Login
            </Header>

            <Segment stacked>
              <Form>
                <Form.Field>
                  <input placeholder="Email Address"/>
                </Form.Field>
                <Form.Field>
                  <input type="password" placeholder="Password"/>
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions"/>
                </Form.Field>
                <Button fluid color="teal">Login</Button>
              </Form>
            </Segment>
            <Message size="tiny" secondary>
              Tidak Punya Akun? Silahkan&nbsp;<a href='/'>Register</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default App;
