import React, { Fragment } from 'react';
import Title from './title';
import Card from './card';
import birreteimg from './img/birrete.png';
import linkedinimg from './img/linkedin.png';
import brainimg from './img/brain.png';
import userimg from './img/user1.png';
import projectsimg from './img/projects.png';
import { Col, Container, Row } from 'react-bootstrap';
class Home extends React.Component {
  render() {
    const style = {
      width: '14rem',
      height: '17.5rem',
    };

    return (
      <Fragment>
        <Container className='mx-auto px-0' style={{ marginTop: '5vh' }}>
          <Row>
            <Col md={12} lg={12}>
              <Title
                title='Lautaro Nasello'
                subtitle='Frontend Developer Web'
              />{' '}
            </Col>
          </Row>
          <Row className=''>
            {' '}
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={userimg}
                section='About'
                text='Something about my personal life'
                btn='about'
                style={style}
                href='/about'
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={brainimg}
                section='Knowledge'
                text='Something about my personal life'
                btn='Knowledge'
                style={style}
                href='/knowledge'
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={birreteimg}
                section='Education'
                text='Something about my personal life'
                btn='Education'
                style={style}
                href='/education'
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={projectsimg}
                section='Projects'
                text='Projects for training and learning'
                btn='Projects'
                style={style}
                href='/education'
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={linkedinimg}
                section='Contact'
                text='Something about my personal life'
                btn='Contact'
                style={style}
                href='/contact'
              />
            </Col>
          </Row>
        </Container>
        {/*  */}
      </Fragment>
    );
  }
}
export default Home;
