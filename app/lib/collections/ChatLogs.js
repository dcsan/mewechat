ChatLogs = new Meteor.Collection("ChatLogs");

if (Meteor.isServer) {

    Meteor.startup( function() {

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
            },
            {
                chatId: 102,
                t: "another 102",
            },
            {
                chatId: 102,
                t: "102 has lots of text",
            }

        ]
        logs.map( log => {
            ChatLogs.insert(log);
        })

        Meteor.publish("ChatLogs", function(chatId) {
            chatId = parseInt(chatId);
            var res = ChatLogs.find({chatId});
            console.log("subscribe ChatLogs chatId", chatId, res.count() );
            return res;
        })

    });

}
