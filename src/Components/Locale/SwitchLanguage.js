import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//actions
import { setlocale } from '../../Actions/locale';
// css
import './SwitchLanguage.css';


class SwitchLanguage extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		}

		this.onSelectLang = this.onSelectLang.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return { 
			visible: nextProps.visible, 
		}
	}

	componentDidMount() {
		this.setState({ visible: this.props.visible })
	}

	onSelectLang = (e) => {
		if(e === "az") {
			this.props.setlocale("az")
			this.props.setFalse()
		}
		if(e === "en") {
			this.props.setlocale("en")
			this.props.setFalse()
		}
		if(e === "ru") {
			this.props.setlocale("ru")
			this.props.setFalse()
		}
		if(e === "tr") {
			this.props.setlocale("tr")
			this.props.setFalse()
		}
	}

	render() {
		const { lang } = this.props;
		const { visible } = this.state;

		return(
			<section className={classnames({
				"language-popup-wrapper d-inline-block hide-lang": !visible,
				"language-popup-wrapper d-inline-block show-lang": visible,
			})}>
				{ lang !== "en" ? <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("en") }
					>EN</span> : <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("az") }
					>AZ</span>
				}
				{  lang !== "ru" ? <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("ru") }
					>RU</span> : <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("az") }
					>AZ</span>
				}
				{ lang !== "tr" ? <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("tr") }
					>TR</span> : <span className="ml-2 cursor-pointer text-secondary"
						onClick={ () => this.onSelectLang("az") }
					>AZ</span>
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

export default connect(mapSTateToProps, { setlocale })(SwitchLanguage);
