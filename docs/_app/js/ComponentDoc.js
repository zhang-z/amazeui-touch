import React from 'react';
import {
  Container,
} from '../../../src/js';
import Sidebar from './Sidebar';

const isSM = matchMedia('(max-width: 640px)').matches;

function isNodeInTree(node, tree) {
  while (node) {
    if (node === tree) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
};

let docs = {
  container: require('../../container'),
  normalize: require('../../normalize'),
  grid: require('../../grid'),
  accordion: require('../../accordion'),
  badge: require('../../badge'),
  button: require('../../button'),
  card: require('../../card'),
  icon: require('../../icon'),
  form: require('../../form'),
  group: require('../../group'),
  list: require('../../list'),
  loader: require('../../loader'),
  modal: require('../../modal'),
  navbar: require('../../navbar'),
  notification: require('../../notification'),
  offcanvas: require('../../offcanvas'),
  popover: require('../../popover'),
  slider: require('../../slider'),
  tabbar: require('../../tabbar'),
  tabs: require('../../tabs'),
  typography: require('../../typography'),
  utility: require('../../utility'),
  'getting-started': require('../../gettin-started'),
};

const ComponentDoc = React.createClass({
  getInitialState() {
    return {
      sidebarActive: false,
    };
  },

  componentDidMount() {
    document.addEventListener('click' , this._clickHandler);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this._clickHandler)
  },

  _clickHandler(e) {
    if (isSM && !isNodeInTree(e.target, this.refs.sidebarToggle) &&
      this.state.sidebarActive) {
      this.setState({
        sidebarActive: !this.state.sidebarActive,
      });
    }
  },

  sidebarToggle(e) {
    e && e.preventDefault();

    this.setState({
      sidebarActive: !this.state.sidebarActive,
    });
  },

  render() {
    let {
      component,
      params,
      ...props,
      } = this.props;
    // Getting URL Parameters
    component = component || params.component;

    const Doc = docs[component] || React.createClass({
        render() {
          return <h2>Not Found.</h2>;
        }
      });

    const activeClassName = this.state.sidebarActive ? ' active' : '';

    return (
      <Container
        direction="row"
        fill
        role="doc-main"
      >
        <Sidebar className={activeClassName} />
        <Doc />
        <a
          ref="sidebarToggle"
          onClick={this.sidebarToggle}
          href="#sidebar"
          className={`sidebar-toggle ${activeClassName}`}>
          <span></span>
        </a>
      </Container>
    );
  }
});

export default ComponentDoc;
