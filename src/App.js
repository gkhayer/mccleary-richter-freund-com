import React, { Component } from 'react';
import {
  Container,
  Grid,
  Icon,
  List,
  Segment} from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-splash">
          <h1 className="app-heading">
            Mary McCleary
          </h1>
          <h2 className="app-subheading">
            Attorney and Counselor at Law
          </h2>
          <h1 className="app-heading">
            Leon Richter-Freund
          </h1>
          <h2 className="app-subheading">
            Attorney and Counselor at Law
          </h2>
        </div>
        <main>
          <Container>
            <Grid columns={2} stackable stretched>
              <Grid.Column>
                <Segment className="text-center">
                  <div className="segment-icon">
                    <Icon name="marker" size="huge" />
                  </div>
                  <div className="divider"></div>
                  <div className="contact-list">
                    <List>
                      <List.Item>
                        <List.Icon name="phone"></List.Icon>
                        <List.Content>(505) 750-4169</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="mail"></List.Icon>
                        <List.Content>mary@mcclearyrichter-freund.com</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="mail"></List.Icon>
                        <List.Content>leon@mcclearyrichter-freund.com</List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="marker"></List.Icon>
                        <List.Content>
                          1001 Luna Cir. NW.<br/>
                          Albuquerque, NM 87102
                        </List.Content>
                      </List.Item>
                    </List>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Map />
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
