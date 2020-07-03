import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from '@material-ui/core';

const DisplaySelectedCountry = ({ handleCheckWeather, countryNameList }) => {
  return (
    <>
      {countryNameList.length ? (
        <div style={{ display: 'inline-block' }}>
          <div style={{ textAlign: 'center' }}>
            <Card
              style={{ width: 400, background: 'cornsilk', marginTop: '40%' }}
              width={500}
            >
              <CardHeader
                title={countryNameList[0].name}
                subheader={countryNameList[0].region}
              />
              <CardMedia
                className="countryImage"
                image={countryNameList[0].flag}
                title={countryNameList[0].name}
              />
              <CardContent>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Population: {countryNameList[0].population}
                </Typography>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Latitude: {countryNameList[0].latlng[0]}
                </Typography>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Longitude: {countryNameList[0].latlng[1]}
                </Typography>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Native Name: {countryNameList[0].nativeName}
                </Typography>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Capital: {countryNameList[0].capital}
                </Typography>
                <Typography style={{ textAlign: 'left', fontSize: '20px' }}>
                  Area: {countryNameList[0].area}
                </Typography>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              color="primary"
              style={{ width: 400 }}
              onClick={handleCheckWeather}
            >
              Check Weather
            </Button>
          </div>
        </div>
      ) : (
        <h2>No Weather Data Found</h2>
      )}
    </>
  );
};

export default DisplaySelectedCountry;
