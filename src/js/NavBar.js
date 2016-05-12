import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Icon from './Icon';

const NavBar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    title: React.PropTypes.node,
    leftNav: React.PropTypes.array,
    rightNav: React.PropTypes.array,
    titleOnLeft: React.PropTypes.bool,
    onAction: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'navbar',
      onAction: () => {
      },
    };
  },

  renderTitle() {
    let {
      titleOnLeft,
      title,
    } = this.props;
    let titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

    return title ? (
      <h2
        className={classNames(this.prefixClass('title'), titlePosition)}
      >
        {title}
      </h2>
    ) : this.props.children;
  },

  renderNav(position) {
    let nav = this.props[position + 'Nav'];
    this._navPosition = position;

    return nav && Array.isArray(nav) ? (
      <div
        className={classNames(this.prefixClass('nav'),
        this.prefixClass(position))}
      >
        {nav.map(this.renderNavItem)}
      </div>
    ) : null;
  },

  renderNavItem(item, index) {
    let Component = item.component || 'a';
    let itemProps = item.props || {};
    let children = [];

    item.title && children.push(
      <span
        className={this.prefixClass('nav-title')}
        key='title'
      >
        {item.title}
      </span>
    );

    const navIconKey = 'icon';
    const iconClassName = {
      [this.prefixClass('icon')]: true,
      // affected by order and icon order changing
      // .navbar-nav-title ~ .navbar-icon not works
      // add an className to set styles
      [this.prefixClass('icon-sibling-of-title')]: !!item.title,
    };
    let navIcon = item.customIcon ? (
      <img
        src={item.customIcon}
        className={classNames(iconClassName)}
        alt={item.title || null}
        key={navIconKey}
      />
    ) : item.icon ? (
      <Icon
        className={classNames(iconClassName)}
        name={item.icon}
        key={navIconKey}
      />
    ) : null;

    // adjust title and icon order for Android UC
    // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
    if (navIcon) {
      const action = this._navPosition === 'left' ? 'unshift' : 'push';
      Array.prototype[action].call(children, navIcon);
    }
    // navIcon && children.push(navIcon);

    let {
      itemClassName,
      ...otherProps
    } = itemProps;
    let props = {
      href: item.href,
      key: 'navbarNavItem' + index,
      onClick: this.props.onAction.bind(this, item),
      ...otherProps,
      className: classNames(this.prefixClass('nav-item'), itemClassName),
    };
    let renderChildren = () => {
      // #40
      // if `Component` is a cloning type like OffCanvasTrigger,
      // this should return a element with the className.
      // TBC: should other props be transferred to the span element?
      return item.isCloning ? (
        <span
          className={props.className}
        >
          {children}
        </span>
      ) : children;
    };

    return (
      <Component {...props}>
        {renderChildren()}
      </Component>
    );
  },

  render() {
    let classSet = this.getClassSet();
    let {
      title,
      className,
      ...props
    } = this.props;

    return (
      <header
        {...props}
        className={classNames(classSet, className)}
      >
        {this.renderTitle()}
        {this.renderNav('left')}
        {this.renderNav('right')}
      </header>
    );
  }
});

export default NavBar;
