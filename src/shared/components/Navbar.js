import React from 'react';
import LinkCreator from './LinkCreator.js'


export default class Navbar extends React.Component {
  render() {

    const linksData = [
      {id: 1, name: 'Home', path: '/'},
      {id: 2, name: 'Projects', path: '/projects'},
      {id: 3, name: 'Blog', path: '/blog'},
      {id: 4, name: 'Contact', path: '/contactme'}
    ];

    const links = linksData.map(link => {
      return (
        <li key={link.id} >
          <LinkCreator name={link.name} path={link.path} />
        </li>
      );
    });

    return (
      <ul>
        {links}
      </ul>
    );
  }
}
