import React, {Component, Fragment} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { injectIntl, intlShape } from 'react-intl';
import { Fa } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator';
//api requests
import api from '../../api';

const mapState = { center: [40.392438, 49.834122], zoom: 16 };

const MyPlacemark = () => (
  <YMaps>
    <Map state={mapState} width='100%' height='100%'>

      <Placemark
        geometry={{
          coordinates: [40.392438, 49.834122]
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
      />

    </Map>
  </YMaps>
);

// const AkifsMap = () => {
//     ymaps.ready(init);

//     return function init() {
//         var myMap = new ymaps.Map('xerite', { center: [40.392438, 49.834122], zoom: 16 });
//         myMap.balloon.open([40.41035, 49.95074], { contentBody: '<img src="/favicon.png" width="16px" height="" alt="image"> <b>Dr.Fərman Həsənov - Ağız və üz-çənə cərrahı</b><br/><div style="text-align: right;"><i class="fa fa-map-marker "></i> <b>Ünvan:</b> Bakı şəhəri, <br/>Səməd Vurğun küçəsi 155, ATU Tədris Cərrahiyyə Klinikası<br/></div><div style="background: #eee; border-radius: 10px; padding: 5px; text-align: center; margin-top: 5px;"><i class="fa fa-address-card"></i> <b>Əlaqə üçün:</b><br/><i class="fa fa-phone"></i> +994 50 318 4345<br/><i class="fa fa-phone"></i> +994 50 8805880<br/><i class="fa fa-envelope"></i> dr_farman59@mail.ru</div>' }, { closeButton: false }, );
//     }
// }

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
      sentEmail: false,
      btnDisable: true,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange = (e) => {
    this.setState({ ...this.state,  data: { ...this.state.data, [e.target.name]: e.target.value }, errors: {} })
  };

  onClick = async () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      try {
        const mail = await api.admin.sendMail(this.state.data);
        this.setState({ ...this.state, data: { fio: '', phone: '', email: '', theme: '', text: '' }, sentEmail: true, errors: {} });
      } catch(err) {
        this.setState({ errors: err.response.data.errors })
      }
    }
  };

  validate = (data) => {
    const errors = {};
    if (!validator.isLength(data.fio, { min: 3, max: 50 } )) {
      errors.fio = 'Name is too short';
    }
    if (!validator.isLength(data.theme, { min: 5, max: 50 } )) {
      errors.theme = 'Theme is too short';
    }
    if (!validator.isLength(data.text, { min: 5, max: 150 })) {
      errors.text = 'Text is too short';
    }
    if (!validator.isEmail(data.email)) {
      errors.email = 'email is not valid';
    }
    if (!validator.isNumeric(data.phone)) {
      errors.phone = 'phone is not valid';
    }
    return errors;
  };

  render() {
    const { data, btnDisable, errors } = this.state;
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
                    <span className="font-16">dr_farman59@mail.ru</span>
                  </div>
                  <div className="my-4"></div>
                  <div className="d-flex align-items-center">
                    <span className="contact-icon font-32 text-color-blue mx-2"><Fa icon="phone" /></span>
                    <span className="font-16">+994 50 8805880</span>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-center my-5 pb-4">
              <input type="text" className="contact-inp mb-2" name="fio" value={data.fio}
                     onChange={this.onChange} placeholder={ placeholder.fio } maxLength="50"
              />
              <div className="d-flex w-100 justify-content-center">
                <input type="tel" className="contact-inp-mini my-2 mr-2" name="phone" value={data.phone}
                       onChange={this.onChange} placeholder={ placeholder.phone } maxLength="50" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
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
        <ToastContainer />
      </div>
    );
  }
}

export default injectIntl(Contact);