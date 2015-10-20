import React from 'react';
import { IndexLink } from 'react-router'

export default class LinkCreator extends React.Component {
  render() {

    const name = this.props.name;
    const path = this.props.path;
    const id = this.props.id;

    return (
      <IndexLink to={ path } key= { id } >{ name }</IndexLink>
    );
  }
}
