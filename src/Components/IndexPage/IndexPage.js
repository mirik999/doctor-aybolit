import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import DoctorIndexImage from './DoctorIndexImage';
import DoctorInfo from './DoctorInfo';
import Sertificats from './Sertificats';
import GalleryKoshk from './GalleryKoshk';
//css
import './IndexPage.css';


class IndexPage extends PureComponent {
	render() {
		return (
			<Wrapper>
        <DoctorIndexImage />
        <DoctorInfo />
        <Sertificats />
        <GalleryKoshk />
      </Wrapper>
		);
	}
}

export default IndexPage;