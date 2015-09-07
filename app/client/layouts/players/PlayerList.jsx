PlayerList = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        Meteor.subscribe('players', {} );

        return {
            players: Players.find({},
                {sort: {updated_at: -1}},
                {limit: 20}
            ).fetch()
        }
    },

    render() {

        var playerList = this.data.players.map( elem => {
            // if (elem.chatId == chatId) {
            //     buttonClass += " button-primary"
            // }
            var dwell = Math.floor((elem.updated_at - elem.created_at)/(60*60)) || 0;
            console.log(elem);
            return (
                <tr>
                    <td>{elem.username}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.bot}</td>
                    <td>{elem.hits}</td>
                    <td>{dwell}</td>
                </tr>
            )
        });

        return (

            <div className='container'>
                <div className="row">
                    <div className="ten columns">
                        <table className='u-full-width'>
                        <thead>
                        <tr>
                            <th>username</th>
                            <th>userId</th>
                            <th>bot</th>
                            <th>hits</th>
                            <th>dwell</th>
                        </tr>
                        </thead>
                        <tbody>
                            {playerList}
                        </tbody>
                        </table>

                    </div>

                    <div className="two columns">
                        player details
                    </div>
                </div>
            </div>
        );

    }
});
