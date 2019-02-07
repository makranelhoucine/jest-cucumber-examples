import React from 'react';
import env from './environment';

const EnvironmentContext = React.createContext();

export const EnvironmentConsumer = EnvironmentContext.Consumer;

export const withEnvironment = Component => props => (
  <EnvironmentConsumer>
    {store => <Component {...props} {...store} />}
  </EnvironmentConsumer>
);

export default class EnvironmentProvider extends React.Component {
  state = {
    environment: null
  };
  componentDidMount() {
    this.setState({ environment: env });
  }
  render() {
    return (
      <EnvironmentContext.Provider value={this.state}>
        {this.props.children}
      </EnvironmentContext.Provider>
    );
  }
}
