import React from 'react'
import { text, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight, windowWidth} from '../utilis/Dimentions'

const FormButton = ({ buttonTitle, ...rest }) => {
	return (
		<TouchableOpacity style={styles.buttonContainer} {...rest}>
			<Text style={styles.buttonText}> {buttonTitle}</Text>
		</TouchableOpacity>
	)
}

export default FormButton

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 10,
		width: '100%',
		height: windowHeight / 15,
		backgroundColor: '#E88C6F',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#ffffff',
		fontFamily: 'Lato-Regular',
	},
})
