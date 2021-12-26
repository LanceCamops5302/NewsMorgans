/* 
    Lance Campos
    11/20/2021

*/


// initialization 
require('dotenv').config();
const Twit = require('twit');
const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var T = new Twit({
    consumer_key:        process.env.TWITTER_API_KEY,
    consumer_secret:     process.env.TWITTER_API_KEY_SECRET,
    access_token:        process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms:          60*1000,
    strictSSL:           true,
})


// command prefix
const prefix = '$';


// Once bot is Online 
 client.once('ready', () => {
     console.log('Morgans is online');


    // var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID] })

    // stream.on('tweet', function(tweet){

    // var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;

    // try{
    //     let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID).then(channel => {
    //        channel.send(url) 
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // } catch (error) {
    //         console.error(error);
    // }


    // })
 })



 // read in a message 
client.on('messageCreate', messageCreate => {
    if(!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;

// takes out prefix and sets to lowercase
    const args = messageCreate.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

// reads in message and replies
    switch(command){
        case 'ping':
            messageCreate.channel.send('pong!');
            break;
        case 'cashapp':
            let role = messageCreate.guild.roles.cache.find(r => r.id === "913172395295113257");
            messageCreate.member.roles.add(role)
            messageCreate.channel.send(messageCreate.author.username + " has been given the Cash App role");
            break;
        default:
            messageCreate.channel.send('Invalid Command');
    }
});













// Connection to Discord profile
//client.login(process.env.DiscordToken);
client.login('OTExODI2NTI1MjI0MDY3MTAy.YZnCoA.Xmcl5IAgb38nRPsjke3TBV2MVVE');