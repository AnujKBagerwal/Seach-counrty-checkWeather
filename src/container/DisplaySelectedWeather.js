import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import { isEmpty } from 'lodash';

const DisplaySelectedWeather = ({ weatherDetail }) => {
  return (
    <>
      {!isEmpty(weatherDetail) && (
        <div style={{ display: 'inline-block' }}>
          <div style={{ textAlign: 'center' }}>
            <Card
              style={{
                width: 400,
                marginLeft: '60%',
                background: 'bisque',
              }}
              width={500}
            >
              <CardHeader
                title={weatherDetail.location.name}
                subheader={weatherDetail.location.country}
              />
              <CardMedia
                className="weatherImage"
                image={weatherDetail.current.weather_icons[0]}
                title={weatherDetail.current.weather_descriptions[0]}
              />
              <CardContent style={{ background: 'cornsilk' }}>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Temperature: {weatherDetail.current.temperature}° C
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Weather: {weatherDetail.current.weather_descriptions[0]}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Humidity: {weatherDetail.current.humidity}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Wind Speed: {weatherDetail.current.wind_speed} KMPH
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Precip: {weatherDetail.current.precip}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: 'left', fontSize: '20px' }}
                >
                  Observation Time: {weatherDetail.current.observation_time}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplaySelectedWeather;
