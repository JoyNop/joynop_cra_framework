import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, } from 'react-router-dom';
import App from '../../App';

const renderMiddleware = () => (req, res) => {
  let html = req.html;
  const routerContext = {};
  const htmlContent = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={routerContext?routerContext
      :null}
    >
      <App />
    </StaticRouter>
  );

  // const htmlContent = ReactDOMServer.renderToString(<App />);
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });


  if (routerContext.url) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    res.redirect(302, routerContext.url);
  } else {
    res.send(html);
  }
};

export default renderMiddleware;
