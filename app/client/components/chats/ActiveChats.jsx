ActiveChats = React.createClass({
    // mixins: [ReactiveMixin, DDPMixin],

    render() {

        var list = ChatList.find({}).fetch();
        console.log("found chatList:", list.length);

        var chatId = FlowRouter.getParam('chatId');

        var logs = ChatLogs.find({chatId}).fetch();
        console.log("found ChatLogs:", chatId, logs.length);

        var chatList = list.map( elem => {
            return (
                <a key={elem._id} className='button u-full-width' href={elem.chatId}>
                {elem.chatId}
                {elem.link}
                </a>
            )
        });

        return (
            <div>
                {chatList}
            </div>
        );

    }
});
