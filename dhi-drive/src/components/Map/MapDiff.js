import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import MapGL, {NavigationControl, Marker,Popup} from 'react-map-gl';
import { Icon } from 'semantic-ui-react';
import {FcElectricalSensor} from 'react-icons/fc'
import style from './Map.module.css'
import {GiWaterTank} from 'react-icons/gi'



const TOKEN = 'pk.eyJ1IjoiYmh1d3MiLCJhIjoiY2tzNXZhMGk3MjUzazJwcGo0dW1jeTZzZiJ9.tM8zb7BoMWJ2GUWrxeckkg';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

let iconStyles = { color: "rgba(8,111,245,0.781)", fontSize: "30px" };
// background-color: rgba(8, 111, 245, 0.781);


const markerList=[
    {
      lat: 27.42788,
      long: 89.651548,
      info: 4
    },

    {
      lat:27.453897,
      long:89.658537,
      info: 2
    },

    {
      lat:27.4842,
      long:89.623958,
      info: 2
    },
    ];
export default class MapDiff extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        // lat: 17.441013, 
        // long: 78.391796,
        latitude: 27.427839,  
        longitude: 449.651569,
        zoom: 15,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 550,
      },
      popupInfo: null
    };
  }

// showDetails=() => {
// this.setState({popupInfo: true});
// }

// hideDetails= ()=> {
// this.setState({popupInfo: null});
// }


renderPopup(index){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={markerList[index].long}
        latitude={markerList[index].lat}
        // onMouseLeave={() => this.setState({popupInfo: null})}
        OnClick={() => this.setState({popupInfo: null})}
        closeOnClick={true}
        >
        <p>Available water (L):{markerList[index].info}</p>
      </Popup>
    )
  }

  //mapbox://styles/mapbox/streets-v11

render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN} >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
              {markerList.map((marker, index)=>{
        
                 return(<div key={index} > <Marker  longitude={marker.long} latitude={marker.lat} >
                    {/* <Icon name='tint' size='big' onMouseEnter={()=>this.setState({popupInfo: true})} onMouseLeave={()=>this.setState({popupInfo: null})}/> */}
                    {/* <FcElectricalSensor  className={iconStyles} onMouseEnter={()=>this.setState({popupInfo: true})} onMouseLeave={()=>this.setState({popupInfo: null})}/> */}

                    <GiWaterTank style={iconStyles} onMouseEnter={()=>this.setState({popupInfo: true})} onMouseLeave={()=>this.setState({popupInfo: null})} />
                    </Marker> {this.renderPopup(index)}</div> );
              }
               ) }
       </div>
      </MapGL>
    );
  }
}