import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import getUrlsFromMessage from './lib/getUrlsFromMessage'
import getMessageSegments from './lib/getMessageSegments'


export default class extends Component {

	constructor(props) {
		super(props)

		const urls = getUrlsFromMessage(this.props.children)
		const messageWords = this.props.children.split(/(?=[\s+])/)
		const messageSegments = getMessageSegments(messageWords,urls)

		this.state = {
			urls,
			messageSegments
		}
	}

	render() {
		if(this.isUrlMessage()){
			return this.renderUrlMessage()
		} else {
			return this.renderBasicMessage()
		}
	}

	renderBasicMessage = () =>
		<View style={[Styles.container,this.props.containerStyle]}>
			<Text style={[this.props.textStyle]}>
				{this.props.children}
			</Text>
		</View>

	renderUrlMessage = () =>
		<View style={[Styles.container,this.props.containerStyle]}>
			{ this.state.messageSegments.map((segment,key) => this.renderMessageSegment(segment,key)) }
		</View>

	renderMessageSegment = (segment, key) => {
		const { urls } = this.state

		segment.toLowerCase().trim()
		if(urls.indexOf(segment.toLowerCase().trim()) >= 0){
			return this.renderLink(segment,key)
		} else {
			return <Text style={[this.props.textStyle]} key={key}>{segment} </Text>
		}
	}


	renderLink = (link, key) =>
		<TouchableHighlight
			onPress={ () => this.props.onLinkPress(link.toLowerCase().trim()) }
			underlayColor={ this.props.hasOwnProperty("underlayColor") ? this.props.underlayColor : "#fcfcfc" }
			key={key}
		>
			<Text style={[Styles.linkText,this.props.linkStyle]}>
				{link.toLowerCase().trim()}
			</Text>
		</TouchableHighlight>

	isUrlMessage = () =>
		this.state.urls.length > 0

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