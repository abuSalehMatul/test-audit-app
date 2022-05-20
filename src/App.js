import React, { Component } from 'react'
import {
  Modal,
  RadioButton,
  TextField,
  TextContainer,
  DisplayText,
  Button
} from "@shopify/polaris";
import axios from 'axios';
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      name: "",
      city: "",
      siteDescription: "",
      latitude: "",
      longitude: ""
    }
    this.handleSave = this.handleSave.bind(this)
  }

  async handleSave(){
    console.log("hi")
    if(this.state.name != ""){
      // axios.post("https://57pb8lo6i6.execute-api.us-east-1.amazonaws.com/dev/hello", {
      //   name: this.state.name,
      //   city:this.state.city,
      //   site:this.state.siteDescription,
      //   latitude: this.state.latitude,
      //   longitude: this.state.longitude
      // })
      const response = await axios({
				url: "https://57pb8lo6i6.execute-api.us-east-1.amazonaws.com/dev/hello",
				method: 'POST',
				data: JSON.stringify({
          name: this.state.name,
          city:this.state.city,
          site:this.state.siteDescription,
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }),
				responseType: 'json'
			})
    }
  }
  render() {
    return (
      <div className='col-md-10 container'>
        <div>
          <Button primary onClick={() => { this.setState({ active: !this.state.active }) }}>Add Audit</Button>
        </div>
        <div className='mt-5 mb-5'>
          {this.state.active ? <div className='bg-white m-auto p-4 col-md-12 col-12'>
            <div className='d-flex col-md-10 m-auto'>
              <div className='col-md-2 col-6'> <Button onClick={this.handleSave}
              label="Save">Save</Button> </div>
              <div className='col-md-2 col-6'> <Button onClick={() => { this.setState({ active: false }) }} label="Cancel">Cancel</Button> </div>
              <hr></hr>
            </div>

            <div className='col-md-10 col-10 m-auto mt-5'>
              <hr></hr>
              <p>Site ID: 1</p>
              <TextField label='Name' onChange={(value) => { this.setState({ name: value }) }}
                value={this.state.name} autoComplete="off"></TextField>

              <TextField label='Juridiction/City/Rigion' value={this.state.city} autoComplete="off"
                onChange={(value) => { this.setState({ city: value }) }}
                multiline={2}></TextField>

              <TextField label='Site Description' value={this.state.siteDescription}
                onChange={(value) => { this.setState({ siteDescription: value }) }}
                autoComplete="off" multiline={2}></TextField>

              <div className='col-md-10 col-10 d-flex'>
                <div className='col-md-6 col-12 me-5'>
                  <TextField value={this.state.latitude}
                    onChange={(value) => { this.setState({ latitude: value }) }}
                    label='Latitude'>
                  </TextField>
                </div>
                <div className='col-md-6 col-12'>
                  <TextField value={this.state.longitude}
                    onChange={(value) => { this.setState({ longitude: value }) }}
                    label='Longitude'>
                  </TextField>
                </div>
              </div>
            </div>

          </div> : ""}
        </div>
        <div className='col-md-10 col-10'>
          <div>
            <h1>Audit Log</h1>
          </div>
          <hr></hr>
          <div>
            <p>Created by Symon on 12/2/22 12:00AM</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App