import React, {Component, Fragment} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { injectIntl, intlShape } from 'react-intl';
import { Fa } from 'mdbreact';
//api requests
import api from '../../api';

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

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        fio: '',
        phone: '',
        email: '',
        theme: '',
        text: ''
      },
      sentEmail: false
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
  };

  onClick = async () => {
    const mail = await api.admin.sendMail(this.state.data);
    this.setState({ ...this.state, data: { fio: '', phone: '', email: '', theme: '', text: '' }, sentEmail: true });
  };

  render() {
    const { data } = this.state;
    const { txt } = this.props;

    const placeholder = {
      fio: this.props.intl.formatMessage({id: 'contact.fio'}),
      phone: this.props.intl.formatMessage({id: 'contact.phone'}),
      email: this.props.intl.formatMessage({id: 'contact.email'}),
      theme: this.props.intl.formatMessage({id: 'contact.theme'}),
      msg: this.props.intl.formatMessage({id: 'contact.msg'}),
    };

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="y-map col-12 col-md-6 d-flex flex-column justify-content-center my-2 pb-2 my-md-5 pb-md-4">
                <MyPlacemark />
                <div className="my-3"></div>
                <div className="d-flex flex-column justify-content-center my-3">
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue ml-3 mr-2"><Fa icon="map-marker" /></span>
                    <span className="font-16">{ txt.adress }</span>
                  </div>
                  <div className="my-4"></div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue mx-2"><Fa icon="envelope" /></span>
                    <span className="font-16">hekim@fermanhesenov.az</span>
                  </div>
                  <div className="my-4"></div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue mx-2"><Fa icon="phone" /></span>
                    <span className="font-16">+994 12 7654321 <br /> +994 55 7654321</span>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-center my-5 pb-4">
              <input type="text" className="contact-inp mb-2" name="fio" value={data.fio}
                     onChange={this.onChange} placeholder={ placeholder.fio } maxLength="50"
              />
              <div className="d-flex w-100 justify-content-center">
                <input type="number" className="contact-inp-mini my-2 mr-2" name="phone" value={data.phone}
                       onChange={this.onChange} placeholder={ placeholder.phone } maxLength="50"
                />
                <input type="email" className="contact-inp-mini my-2 ml-2" name="email" value={data.email}
                       onChange={this.onChange} placeholder={ placeholder.email } maxLength="50"
                />
              </div>
              <input type="text" className="contact-inp my-2" name="theme" value={data.theme}
                     onChange={this.onChange} placeholder={ placeholder.theme } maxLength="50"
              />
              <textarea name="contact-message" className="contact-txtarea my-2" name="text" value={data.text}
                        onChange={this.onChange} placeholder={ placeholder.msg } maxLength="250"></textarea>
              <div className="d-flex w-100 justify-content-end my-2">
                <button type="button" className="contact-btn" onClick={this.onClick}>{ txt.sendmsg }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Contact);