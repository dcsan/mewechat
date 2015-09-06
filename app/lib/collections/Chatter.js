ChatList = new Meteor.Collection("ChatList");
ChatLogs = new Meteor.Collection("ChatLogs");

if (Meteor.isServer) {

    Meteor.startup( function() {

        console.log("server startup");
        ChatList.remove({});
        var data = [
            {
                chatId: 100
            },
            {
                chatId: 101
            },
            {chatId: 102}
        ]
        data.map( (elem) => {
            ChatList.insert(elem);
        })
        Meteor.publish("ChatList", function(opts={}) {
            console.log("subscribe ChatList", opts);
            return ChatList.find(opts);
        })

        ChatLogs.remove({});
        var logs = [
            {
                chatId: 100,
                t: "well idk 100",
            },
            {
                chatId: 101,
                t: "other chat 101",
            },
            {
                chatId: 102,
                t: "chat num 102",
            }
        ]
        logs.map( log => {
            ChatLogs.insert(log);
        })

        Meteor.publish("ChatLogs", function(chatId) {
            chatId = parseInt(chatId);
            var res = ChatLogs.find({chatId: chatId});
            console.log("subscribe ChatLogs chatId", chatId, res.fetch() );
            return res;
        })


    });

}
