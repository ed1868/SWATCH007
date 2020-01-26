import React, { Component } from 'react'

export default class launchCodes extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <form className="col-sm-12">
            <div className="row">
              <div className="input-field col-sm-6">
                <label for="vaultDoor">Agent:</label>
                <input id="vaultDoor" value="Bond,James" type="text" className="validate"/>
        
              </div>
            </div>
          </form>
          
        </div>
      </div>
    )
  }
}
