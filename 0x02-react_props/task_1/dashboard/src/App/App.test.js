import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from '../Header/Header.test';
import Footer from '../Footer/Footer.test';
import Login from '../Login/Login.test';
import Notifications from '../Notifications/Notifications.test';

describe('App tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});
	<Header />;
	<Footer/>;
	<Login />;
	<Notifications />;
});