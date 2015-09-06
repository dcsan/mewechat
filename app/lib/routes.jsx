FlowRouter.route("/admin", {
    name: "admin",
    action(params) {
        ReactLayout.render(Admin);
    }
});



FlowRouter.route("/chats/:chatId?", {
    name: "main",

    subscriptions (params) {
        this.register('ChatList', Meteor.subscribe('ChatList'));
        this.register('ChatLogs', Meteor.subscribe('ChatLogs', params.chatId));
    },

    action(params) {
        ReactLayout.render(MainLayout, {
            activeChats: ActiveChats,
            content: {status: "OK"},
        });
    }

});
