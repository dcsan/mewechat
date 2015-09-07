FlowRouter.route("/admin", {
    name: "admin",
    action(params) {
        ReactLayout.render(Admin);
    }
});



FlowRouter.route("/chats/:chatId?", {
    name: "main",

    action(params) {
        ReactLayout.render(MainLayout, {
            activeChats: ActiveChats,
            content: {status: "OK"},
        });
    }

});


FlowRouter.route("/OneChat/:chatId?", {
    name: "admin",
    action(params) {
        ReactLayout.render(OneChat);
    }
});
