import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Image from './Image';
import DoctorInfo from './DoctorInfo';
import Sertificats from './Sertificats';
import GalleryKoshk from './GalleryKoshk';
//css
import './Main.css';


class Content extends PureComponent {
	render() {
		return (
			<Wrapper>
        <Image />
        <DoctorInfo />
        <Sertificats />
        <GalleryKoshk />
      </Wrapper>
		);
	}
}

export default Content;