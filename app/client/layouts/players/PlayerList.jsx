PlayerList = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        Meteor.subscribe('NewPlayers', {limit: 20} );

        return {
            players: Players.find({},
                {sort: {updated_at: -1}},
                {limit: 20}
            ).fetch()
        }
    },

    render() {

        console.log("player ex", this.data.players[0]);
        var c = 0;
        var playerList = this.data.players.map( elem => {
            c++;
            // if (elem.chatId == chatId) {
            //     buttonClass += " button-primary"
            // }
            var dwell = Math.floor((elem.updated_at - elem.created_at)/(60*60)) || 0;
            // console.log(elem);
            return (
                <tr key={elem._id}>
                    <td>{c}</td>
                    <td>{elem.username}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.bot}</td>
                    <td>{elem.hits}</td>
                    <td>{dwell}</td>
                    <td>{elem.group ? "⚫️" : "⚪️" }</td>
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
                            <th>#</th>
                            <th>username</th>
                            <th>userId</th>
                            <th>bot</th>
                            <th>hits</th>
                            <th>dwell</th>
                            <th>group</th>
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
