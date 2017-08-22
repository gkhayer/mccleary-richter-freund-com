
import React from 'react';
import {Container, Icon, List} from 'semantic-ui-react';
import './Footer.css';

export default () => (
  <footer className="app-footer">
    <Container>
      <List>
        <List.Item>
          <List.Icon name="mail"></List.Icon>
          <List.Content>
            P.O. Box 254 <br/>
            Albuquerque, NM 87103
          </List.Content>
        </List.Item>
      </List>
      <div className="text-center">
        Copyright <Icon name="copyright" />2017 McCleary & Richter-Freund, LLC
      </div>
      <div className="text-center">
        Designed with <Icon name="heart" color="red" />by <a target="_blank" rel="noopener noreferrer" href="http://iteamnm.com">iTEAM Consulting</a>
      </div>
    </Container>
  </footer>);