import React from 'react';

export default class HTMLComponent extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Sean J. Conroy</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="description" content="www.seanconroy.co" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" />
          <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>

        </body>
      </html>
    );
  }
}
