module.exports = (client, axios, embed) => {
    client.on('message', async (msg) => {
        if (msg.author.bot) return;
        if (msg.content.startsWith(process.env.PREFIX)) {
            const [CMD_NAME, ...args] = msg.content
                .trim()
                .substring(process.env.PREFIX.length)
                .split(/\s+/);

            if (args[0] === 'space') {
                await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_TOKEN}`)
                    .then((res) => {
                        embed
                            .setTitle(res.data.title)
                            .setDescription(res.data.explanation)
                            .setColor(13936639)
                            .setImage('https://apod.nasa.gov/apod/image/2106/DistortedSunrise_Chasiotis_1080.jpg')
                            .setAuthor(res.data.copyright, 'https://api.nasa.gov/')
                        msg.channel.send(embed)
                    })
            }
        }
    })
}