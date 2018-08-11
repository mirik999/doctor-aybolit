import React, {PureComponent, Fragment} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Fa } from 'mdbreact';


const mapState = { center: [40.391647, 49.832807], zoom: 15 };

const MyPlacemark = () => (
  <YMaps>
    <Map state={mapState} width='100%' height='100%'>

      <Placemark
        geometry={{
          coordinates: [40.392447, 49.831927]
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
      />

    </Map>
  </YMaps>
);

class Contact extends PureComponent {
  render() {
    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="y-map col-12 col-md-6 d-flex flex-column justify-content-center my-5 pb-4">
                <MyPlacemark />
                <div className="d-flex flex-column justify-content-center my-3">
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue ml-3 mr-2"><Fa icon="map-marker" /></span>
                    <span className="">Akademik Mirəsədulla Mirqasımov küçəsi 1 (1 saylı Şəhər Kliniki Xəstəxanası)</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue mx-2"><Fa icon="envelope" /></span>
                    <span className="">info@fermanhesenov.az</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue mx-2"><Fa icon="phone" /></span>
                    <span className="">+994 12 7654321 <br /> +994 55 7654321</span>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-end align-items-center">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;