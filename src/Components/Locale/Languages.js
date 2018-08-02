import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
//actions
import { setlocale } from '../../Actions/locale';
// css
import './SwitchLanguage.css';


class Languages extends PureComponent {
	constructor(props) {
		super(props);

		this.onSelectLang = this.onSelectLang.bind(this);
	}

	onSelectLang = (e) => {
		if(e === "az") {
			this.props.setlocale("az")
		}
		if(e === "en") {
			this.props.setlocale("en")
		}
		if(e === "ru") {
			this.props.setlocale("ru")
		}
		if(e === "tr") {
			this.props.setlocale("tr")
		}
	}

	render() {
		const { lang } = this.props;

		return(
			<section className="d-inline-flex justify-content-center">
				{
					lang === "az" ? <img src={require('../../lib/images/img/azerbaijan-big.png')} className="selected-flag"/> :
						<img src={require('../../lib/images/img/azerbaijan.png')} className="flag az-flag"
						     onClick={() => this.onSelectLang("az")}/>
				}
				{
					lang === "en" ? <img src={require('../../lib/images/img/united-kingdom-big.png')} className="selected-flag"/> :
						<img src={require('../../lib/images/img/united-kingdom.png')} className="flag uk-flag"
						     onClick={() => this.onSelectLang("en")}/>
				}
				{
					lang === "tr" ? <img src={require('../../lib/images/img/turkey-big.png')} className="selected-flag"/> :
						<img src={require('../../lib/images/img/turkey.png')} className="flag tr-flag"
						     onClick={() => this.onSelectLang("tr")}/>
				}
				{
					lang === "ru" ? <img src={require('../../lib/images/img/russia-big.png')} className="selected-flag"/> :
						<img src={require('../../lib/images/img/russia.png')} className="flag ru-flag"
						     onClick={() => this.onSelectLang("ru")}/>
				}
			</section>
		)
	}
}

function mapSTateToProps(state) {
	return {
		lang: state.locale.lang
	}
}

export default connect(mapSTateToProps, { setlocale })(Languages);
