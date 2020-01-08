const Chat = require('../../models/chatSchema')

module.exports = {
    Query: {
        async getChats(){
            try{
                const chats = await Chat.find();
                return chats;
            }
            catch(err)
            {
                throw new Error(err)
            }
        }
    }
}