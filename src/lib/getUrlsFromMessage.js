
export default getUrlsFromMessage = (message) => {
	const urls = message.match(/\bhttps?:\/\/\S+/gi)

	return (urls !== null) ? urls : []
}