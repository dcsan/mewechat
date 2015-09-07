OneChat = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        var chatId = FlowRouter.getParam('chatId');
        chatId = parseInt(chatId);  // drive me crazy!
        var handle = Meteor.subscribe("ChatLogs", chatId);

        var blob = {
            loading: ! handle.ready(),
            chatId,
            logs: ChatLogs.find({chatId}).fetch()
        }

        console.log(blob);
        return blob;
    },

    getInitialState() {
        return {};
    },

    chatRows() {
        var rows = this.data.logs.map( row => {
            return <div className='chatrow'>{row.t}</div>
        })
        return rows;
    },

    render() {

        // if (this.data.loading) {
        //     return <div>Loading</div>
        // }

        // else
        return(
            <div id="main" className="stuff">

                <span className='chatinfo'>chatId: {this.data.chatId}</span>
                <span className='chatinfo'>rows: {this.data.logs.length}</span>
                <span className='chatinfo'>loading: {this.data.loading}</span>

                <div id='chatContent' className='chatContent'>
                    {this.chatRows() }
                </div>

            </div>
        )
    }

});
