ActiveChats = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        Meteor.subscribe('ChatList');

        return {
            activeChats: ChatList.find({}).fetch()
        }
    },

    render() {

        var chatId = FlowRouter.getParam('chatId');

        var chatList = this.data.activeChats.map( elem => {
            var buttonClass = 'button u-full-width';
            if (elem.chatId == chatId) {
                buttonClass += " button-primary"
            }
            return (
                <a key={elem._id} className={buttonClass} href={elem.chatId}>
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
