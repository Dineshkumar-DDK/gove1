import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Search({query,onQueryChange}) {
  return (
    <div>
        
    <Navbar className="bg-body-tertiary justify-content-between">
      
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
            id='query'
            value={query}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(event)=>{onQueryChange(event.target.value)}}
            />
          </Col>

        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default Search