Players = new Meteor.Collection("players");

if (Meteor.isServer) {

    Meteor.startup( function() {

        console.log("server startup");

	Meteor.publish("NewPlayers", function(opts) {
            opts = opts || {};
            opts.limit = opts.limit || 20;
            opts.sort = {updated_at: -1} ;
            console.log("sub: NewPlayers", opts);
            return Players.find({}, opts);
        })

        Meteor.publish("players", function(opts={}) {
            console.log("sub: players");
            return Players.find(opts,
                {sort: {updated_at: -1}},
                {limit: 20}
            );
        })

        Meteor.publish("playerCount", function(opts={}) {
            var pcount = Players.find( {}, {_id:1} );
            console.log("sub: playerCount", pcount.count() );
            return pcount;
        })


    });

}
