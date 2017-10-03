import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'


export default class extends Component {
	constructor(props) {
		super(props)

	}

	render = () => {
		return <Text>{this.props.children}</Text>
	}


}

const Styles = StyleSheet.create({
	QuestionTypes: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignContent: 'stretch',
		justifyContent: 'space-between',
		height: 40
	}
})