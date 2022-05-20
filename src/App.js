import React, { Component } from 'react'
import {
  Modal,
  RadioButton,
  TextField,
  TextContainer,
  DisplayText,
  Button
} from "@shopify/polaris";
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  render() {
    return (
      <div className='col-md-10 container'>
        <div>
          <Button primary onClick={() => { this.setState({ active: true }) }}>Add Audit</Button>
        </div>
        <div className='mt-5 mb-5'>
          {this.state.active ? <div className='bg-white m-auto p-4 col-md-12 col-12'>
            <div className='d-flex col-md-10'> 
              
            </div>
            <hr></hr>
            <div className='col-md-10 col-10 m-auto'>
              <p>Site ID: 1</p>
              <TextField label='Name' autoComplete="off"></TextField>
              <TextField label='Juridiction/City/Rigion' autoComplete="off" multiline={2}></TextField>
              <TextField label='Site Description' autoComplete="off" multiline={2}></TextField>
              <div className='col-md-10 col-10 d-flex'>
                <div className='col-md-6 col-12 me-5'>
                  <TextField label='Latitude'></TextField>
                </div>
                <div className='col-md-6 col-12'>
                  <TextField label='Latitude'></TextField>
                </div>
              </div>
            </div>

          </div> : ""}
        </div>
      </div>
    )
  }
}

export default App