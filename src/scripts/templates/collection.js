import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";
import React from 'react';
import ReactDOM from 'react-dom';
import { client } from "../../react/Init.js";
import Collection from "../../react/components/collection/Collection.jsx";

ReactDOM.render(
  <Collection client={client}/>,
  document.getElementById('collection')
);
