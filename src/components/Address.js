import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";
import "./Address.css";

class Address extends React.Component{
  constructor(props){
    super(props);
    this.imageRef = React.createRef();
    this.map = null;
  }

  componentDidMount(){
    this.findLocaiton();
  }

  initializeMap() {
    const {lat, lng} = this.props;
    const latlng = new window.google.maps.LatLng(lat, lng);
    const options = {
      zoom: 8,
      center: latlng,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new window.google.maps.Map(this.imageRef.current, options);
  }

  findLocaiton() {
    const {lat, lng} = this.props;
    const geocoder = new window.google.maps.Geocoder();
    this.initializeMap();
    geocoder.geocode({ 'address': `${lat},${lng}` },  (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
            this.map.setCenter(results[0].geometry.location);
            const marker = new window.google.maps.Marker({
                map: this.map,
                position: results[0].geometry.location
            });
        }
        else {
          console.log(`Geocode was not successful for the following reason: ${status}`);
        }
    });

}
  
  render(){
    const {data: {address}} = this.props;
    return (
      <ErrorBoundary>
        <div className="Address Box">
          <div className="BoxHeading">Borrower's Location</div>
          <div ref = {this.imageRef}></div>
          <Item heading="Address" content={address} />
        </div>
      </ErrorBoundary>
    )
  }
};

export default Address;