
export default getUrlsFromMessage = (message) => {
	const urls = message.toLowerCase().match(/\bhttps?:\/\/\S+/gi)

	return (urls !== null) ? urls : []
}