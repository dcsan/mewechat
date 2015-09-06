OneChat = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        var chatId = FlowRouter.getParam('chatId')
        var handle = Meteor.subscribe("ChatLogs", chatId);
        var logs = ChatLogs.find({chatId}).fetch();
        var blob = {
            loading: ! handle.ready(),
            chatId,
            logs
        }
        console.log(blob);
        return blob;
    },

    render() {

        if (this.data.loading) {
            return <div>Loading</div>
        }

        // else
        return(
            <div id="main" className="stuff">

                <p>chatId: {this.data.chatId}</p>
                <p>loading: {this.data.loading}</p>
                <p>rows: {this.data.logs.length}</p>

                <div id='chatContent' className='chatContent'>
                text: {this.data.logs.t}
                </div>

            </div>
        )
    }

});
