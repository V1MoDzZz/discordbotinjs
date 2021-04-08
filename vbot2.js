



const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs");

const prefix = "/";

bot.commands = new Discord.Collection();

const token = ('Your token');

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('retard')) {

   msg.channel.send('Yes, Nathan is a Retard.');
    }
    })

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('donkey')) {

   msg.channel.send('Yes, Demon is donkey.');
    }
    })

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('indian')) {

   msg.channel.send('Yes, Nathan is indian');
    }
    })

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('israel')) {

   msg.channel.send('yes, Israel is gay.');
    }
    })

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('gay')) {

   msg.channel.send('yes, Israel is gay.');
    }
    })

bot.on('message', msg=>{

if (msg.author.bot) return; if(msg.content.toLowerCase().includes('nathan')) {

   msg.channel.send('Yes, Nathan is gay.');
    }
    })

var things = ['shushhhh you dummy ass looking', 'idiot', 'Yes Israel is gay', 'Israel Is Gay', 'Israel Is Gay Like You', 'Ballooon', 'stfu', 'I'll rape your mum', 'nathan is gay like you', 'shushhhh you dummy ass looking', 'shushhhh you dummy ass looking', 'shushhhh you dummy ass looking', 'shushhh you hmar ass looking'];

bot.on('message', msg => {

  bot.pog
  let content = msg.content.split(" ");
  console.log(bot.pog)
  if(content[0] === "/shush") {
  if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply(`You can\'t use this command.`);
  let args = content.slice(1)
  let id = args[0]
  if(!id) return msg.reply('provide an id')
  bot.pog = id
  msg.reply('stopping that dickhead ' + bot.pog)
}
  if(parseInt(msg.author.id) === parseInt(bot.pog)) {
var thing = things[Math.floor(Math.random()*things.length)];
msg.reply(thing)
  }
});

bot.on('message', msg => {

  bot.pogs
  let contents = msg.content.split(" ");
  console.log(bot.pogs)
  if(contents[0] === "/mute") {
  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply(`You can't use this command.`);
  let argss = contents.slice(1)
  let ids = argss[0]
  if(!ids) return msg.reply('provide an id')
  bot.pogs = ids
  msg.reply('stopping that dickhead ' + bot.pogs)
}
  if(parseInt(msg.author.id) === parseInt(bot.pogs)) {
msg.delete();
  }
});

bot.on('message', msg => {

  bot.pogss
  let contentss = msg.content.split(" ");
  console.log(bot.pogss)
  if(contentss[0] === "/annoy") {
  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply(`You can't use this command.`);
  let argsss = contentss.slice(1)
  let idss = argsss[0]
  if(!idss) return msg.reply('provide an id')
  bot.pogss = idss
  msg.reply('stopping that dickhead ' + bot.pogss)
}
  if(parseInt(msg.author.id) === parseInt(bot.pogss)) {
var things1 = things[Math.floor(Math.random()*things.length)];
msg.reply(things1);
msg.delete();
  }
});

bot.on('message', msg=>{

    if(msg.content === "/sup"){
        msg.reply('SUP!')
    }
})


bot.on('message', msg=>{

    if(msg.content === "/invite"){
        msg.reply('https://discord.gg/DZR5T57H')
    }
})

bot.on('message', msg=>{

    if(msg.content === "/bot"){
        msg.reply('https://discord.com/api/oauth2/authorize?client_id=764946769426645002&scope=bot&permissions=8')
    }
})

bot.on('message', msg=>{

    bot.pog
    let content = msg.content.split(" ");
    console.log(bot.pog)
    if(content[0] === "/spam"){
    if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply(`You can't use this command.`);
    let args = content.slice(1)
    let id = args[0]
       for (i = 0; i < content[2]; i++){
            msg.channel.send(content[1]);
       }
    }
})





bot.on('message', message => {

    
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('/say')) {

        msg.member.hasPermission("ADMINISTRATOR")) return msg.reply(`only admins can use this command, but you can still use /embed command to make bot say something`);
        message.delete()
        var saytext = args.join(" ");

        if (msg.author.bot) return; 
        message.channel.send(saytext)
    };
  } )


bot.on('message', msg=>{
    if(msg.content === "/goodnight"){
       for (i = 0; i < 4000; i++){
            msg.reply('@everyone GOODNIGHT!')
       }
    }
})

bot.on('message', msg=>{
    if(msg.content === "/wakeup"){
       for (i = 0; i < 40000; i++){
            msg.reply('@everyone WAKEUP BITCHES!')
       }
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is virgin?"){
        msg.channel.send('DEMON_MODZ420!')
    }
})


bot.on('message', msg=>{
    if(msg.content === "/you are dumb"){
        msg.reply('STFU!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Retarded bot"){
        msg.reply('did somebody said retarded bot????')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Retarded bots"){
        msg.reply('did somebody said retarded bots????')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is violatedopp?"){
        msg.reply('he is a skid!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is your creator?"){
        msg.reply('V1MoDzZz!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who are TR33?"){
        msg.reply('TR33 is a hacking group!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is angeln909?"){
        msg.reply('HE IS AN ALIEN!')
    }
})


bot.on('message', msg=>{
    if(msg.content === "/who is xdog?"){
        msg.reply('xdog is a pedo who thinks he is best!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is jason?"){
        msg.reply('you mean gayson?')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/who is codingurlife?"){
        msg.reply('i dont talk about skids')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/"){
        msg.reply('talk fast i dont have whole day, you dummy')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/you are brainless"){
        msg.reply('what did you just said????')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/ass"){
       if(msg.channel.nsfw){
        msg.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtxRXJckki9ST5W4yzr0CuYFwy_h191XIKA&usqp=CAU')
    }
    else { 
   msg.channel.send('Dumbass retard turn on nsfw to use this command!!!')
            }
    }
})


bot.on('message', msg=>{
    if(msg.content === "/who is your dad?"){
        msg.reply('V1!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/you are gay"){
        msg.reply('STFU you virgin!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "/you are retarded bot"){
        msg.reply('who you calling retarded? you dummy!')
    }
})


bot.login(token);
