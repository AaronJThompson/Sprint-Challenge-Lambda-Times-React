import React from 'react';

export default function withAuthentication(Component, Login) {
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                loggedIn: false,
            }
        }

        updateAuthentication= () => {
            if (localStorage.getItem('user')) {
                this.setState({loggedIn: true});
            }
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({loggedIn: true});
            }
        }

        render() {
            return (
                <div>
                    <Component {...this.props} />
                    <Login updateAuth={this.updateAuthentication} showLogin={!this.state.loggedIn} />
                </div>
            );
        }
    }
}