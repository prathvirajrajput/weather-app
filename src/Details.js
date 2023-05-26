import {useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimantion';
import {API_KEY} from './Constant';

function Details(props) {
  const [data, setdata] = useState();

  const {name} = props.route.params;
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setdata(res))
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'grey', fontSize: 20, marginBottom: 4}}>
        {title}
      </Text>
      <Text style={{color: 'white', fontSize: 20}}>{value}</Text>
    </View>
  );
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../images/earth.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.7, backgroundColor: 'black'}}
      />

      <View
        style={{
          position: 'absolute',
          flexDirection: 'column',
        }}>
        {data ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 35}}>{name}</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginTop: 5,
                  textAlign: 'center',
                }}>
                {data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{color: 'white', fontSize: 40, paddingLeft: 20}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginBottom: 20,
                  textAlign: 'center',
                }}>
                weather Details
              </Text>
              <View style={{width: deviceWidth - 150}}>
                <Data value={data['wind']['speed']} title="wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default Details;
