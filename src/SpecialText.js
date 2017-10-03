import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import getUrlsFromMessage from './lib/getUrlsFromMessage'
import getMessageSegments from './lib/getMessageSegments'


export default class extends Component {
	constructor(props) {
		super(props)
	}

	render = () => {
		const urls = getUrlsFromMessage(this.props.children)

		if(urls.length > 0){
			return <View style={[Styles.container,this.props.style]}>{ this.renderUrlMessage(this.props.children,urls) }</View>
		} else {
			return <View style={[this.props.style]}><Text style={[this.props.textStyle]}>{this.props.children}</Text></View>
		}
	}

	renderUrlMessage = (message, urls) => {

		const messageWords = message.split(" ")
		const messageSegments = getMessageSegments(messageWords,urls)

		return <View style={Styles.container}>
			{
				messageSegments.map((segment,key) => {
					if(urls.indexOf(segment) >= 0){
						return <TouchableHighlight
								onPress={() => this.props.onLinkPress(segment)}
								key={key}
							>
							<Text style={[Styles.linkText]}>{segment} </Text>
						</TouchableHighlight>
					} else {
						return <Text style={[this.props.textStyle]} key={key}>{segment} </Text>
					}
				})
			}
		</View>
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	linkText: {
		color: '#0F1BA4'
	}
})