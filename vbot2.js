const Discord = require('discord.js');
const bot = new Discord.Client();

const token = ('your token');



bot.on('message', msg => {
  bot.pog
  let content = msg.content.split(" ");
  console.log(bot.pog)
  if(content[0] === "/shush") {
  let args = content.slice(1)
  let id = args[0]
  if(!id) return msg.reply('provide an id')
  bot.pog = id
  msg.reply('stopping that dickhead ' + bot.pog)
}
  if(parseInt(msg.author.id) === parseInt(bot.pog)) {
msg.reply('shushhhh you dummy ass looking')
  }
});

bot.on('message', msg=>{

    if(msg.content === "/sup"){
        msg.reply('SUP!')
    }
})


bot.on('message', msg=>{
    bot.pog
    let content = msg.content.split(" ");
    console.log(bot.pog)
    if(content[0] === "/spam"){
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
        message.delete()
        var saytext = args.join(" ");
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
    if(msg.content === "/help"){
         msg.channel.send({embed: {
         color: 0x0000ff,

         title: "Help",
         url: "http://www.v1modzzz.xyz",
         fields: [{
            name: "/say",
            value: "To make bot say something ."
         },
        {
           name: "/spam",
           value: "for spamming."
        },

       ],
       timestamp: new Date(),
       footer: {
      
           text: "© V1MoDzZz - 2020 "
    }
  }
});
        
    }
})

bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('/kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked this dickhead ${user.tag}`);
            })
            .catch(err => {
              message.reply('I cant kick him, maybe he have admin role, dont waste my time again you dummy');
              console.error(err);
            });
        } else {
          message.reply("User not found!");
        }
      } else {
        message.reply("You didn't mention the user to kick, dumbass bitch");
      }
    }
  });

bot.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply('pong');
    msg.channel.send('pong');
  }
});


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
        msg.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtxRXJckki9ST5W4yzr0CuYFwy_h191XIKA&usqp=CAU')
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
