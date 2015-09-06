ChatList = new Meteor.Collection("ChatList");

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

    });

}
