import React from 'react';
import { View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from './Pulse';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';


export default class PulseAnim1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			circles: []
		};

		this.counter = 1;
		this.setInterval = null;
		this.anim = new Animated.Value(1);
	}

	componentDidMount() {
		this.setCircleInterval();
	}

	componentWillUnmount() {
		clearInterval(this.setInterval);
	}

	setCircleInterval() {
		this.setInterval = setInterval(this.addCircle.bind(this), this.props.interval);
		this.addCircle();
	}

	addCircle() {
		this.setState({ circles: [...this.state.circles, this.counter] });
		this.counter++;
	}

	onPressIn() {
		Animated.timing(this.anim, {
			toValue: this.props.pressInValue,
			duration: this.props.pressDuration,
			easing: this.props.pressInEasing,
		}).start(() => clearInterval(this.setInterval));
	}

	onPressOut() {
		Animated.timing(this.anim, {
			toValue: 1,
			duration: this.props.pressDuration,
			easing: this.props.pressOutEasing,
		}).start(this.setCircleInterval.bind(this));
	}

	render() {
		const { size, avatar, avatarBackgroundColor, interval } = this.props;

		return (
			<View style={{
				flex: 1,
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center',
				left:wp('30%'),

			}}>
				{this.state.circles.map((circle) => (
					<Pulse
						key={circle}
						{...this.props}
					/>
				))}

				<TouchableOpacity
					activeOpacity={1}
					// onPressIn={this.onPressIn.bind(this)}
					// onPressOut={this.onPressOut.bind(this)}
					style={{
						transform: [{
							scale: this.anim
						}]
					}}
				>
					<Image
						source={require('../images/business.png')} style={{height:27, width:27}}
						style={{
							width:wp('13%'),
							height: hp('8%'),
							//borderRadius: size/2,
							backgroundColor: avatarBackgroundColor
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

// LocationPulseLoader.propTypes = {
//   interval: React.PropTypes.number,
//   size: React.PropTypes.number,
//   pulseMaxSize: React.PropTypes.number,
//   avatar: React.PropTypes.string.isRequired,
//   avatarBackgroundColor: React.PropTypes.string,
//   pressInValue: React.PropTypes.number,
//   pressDuration: React.PropTypes.number,
//   borderColor: React.PropTypes.string,
//   backgroundColor: React.PropTypes.string,
//   getStyle: React.PropTypes.func,
// };

PulseAnim1.defaultProps = {
  interval: 2000,
  size: 100,
  pulseMaxSize: 200,
  avatar: undefined,
  avatarBackgroundColor: 'transparent',
  pressInValue: 0.8,
  pressDuration: 150,
  pressInEasing: Easing.in,
  pressOutEasing: Easing.in,
  borderColor: 'rgb(255,165,0)',
  backgroundColor: '#D1D1D1',
  getStyle: undefined,
};
