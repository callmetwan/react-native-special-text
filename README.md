# react-native-special-text
A react native component that displays text with special enhancements.

The component parses the content of the text and extracts links and visually highlights them.  It also exposes methods for detecting when the link is tapped.

## Example:
This component converts the top message into the bottom message in the image below:

![](screenshots/example.png)


## Installation
You can install this component in your project by typing the following command:

```
npm install react-native-special-text --save
```

## Usage


```
<SpecialText
    containerStyle={Style.postTextContainer}
    textStyle={Style.postText}
    linkStyle={Style.linkStyle}
    underlayColor={"#fcfcfc"}
    onLinkPress={(url) => console.log(url)}
>
    You can input your text here as a child of the component.
    Simply include your URLs here as well.  
    https://github.com/Digitova/react-native-special-text.git
</SpecialText>
```

## Props
| Prop        | Description           |
| :------------- |:-------------| 
| containerStyle | a simple style object for the wrapping container |
| textStyle | a simple style object for the text of the component |
| linkStyle | a simple style object link text. |
| underlayColor | a color string for for background of link when tapped |
| onLinkPress | a function for handling link tap events.  navigate to web browser on your own. |



## License


This component is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).