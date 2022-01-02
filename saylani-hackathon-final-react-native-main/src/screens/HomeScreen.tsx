import React, { memo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
// import { Navigation } from '../types';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import data from '../assets/data/food_bank.json';
// import GetLocation from 'react-native-get-location'

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoidGtha2h0ZXIiLCJhIjoiY2t4YnVrcHB2MGJzZzJybzNvNzI1Nm9leSJ9.PNC4g_66kmqRrv77g4HXUQ';

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  const SIZE = 20;
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
  };
  const positionOptions = { enableHighAccuracy: true };
  // console.log(data);

  // GetLocation.getCurrentPosition({
  //   enableHighAccuracy: true,
  //   timeout: 15000,
  // })
  //   .then(location => {
  //     console.log(location);
  //   })
  //   .catch(error => {
  //     const { code, message } = error;
  //     console.warn(code, message);
  //   })

  return (
    <Background>
      <Logo />
      <Header>Welcome Back!</Header>
      <Paragraph>
        We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark.
      </Paragraph>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)} mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {data.map((city, index) => (
          <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
            <svg
              height={SIZE}
              viewBox="0 0 24 24"
              style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
              }}
              onClick={() => onClick(city)}
            >
              <path d={ICON} />
            </svg>
          </Marker>
        ))}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
      </ReactMapGL>
      <Button mode="contained" textColor="white" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});

export default memo(HomeScreen);
