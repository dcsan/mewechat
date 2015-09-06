MainLayout = React.createClass({

    mixins: [],

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="three columns">
                        <ActiveChats />
                    </div>

                    <div className="nine columns">
                        <OneChat />
                    </div>
                </div>
            </div>

        )
    }
})
