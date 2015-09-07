Admin = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        Meteor.subscribe('playerCount');

        return {
            playerCount: Players.find({}).count()
        }
    },

    render() {
        return (
            <div className="container">
                <a className='button' href='/players'>Players [{this.data.playerCount}]</a>
            </div>
        )
    }
})
