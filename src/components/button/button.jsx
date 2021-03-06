import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './button.scss';

function Button({
  variant,
  block,
  disabled,
  className,
  children,
  modifier,
  href,
  size,
  ...rest,
}) {
  const Element = href ? 'a' : 'button';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isLink = variant === 'link';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';
  const classes = classNames({
    'btn--block': block,
    'btn-primary': isPrimary,
    'btn-primary--success': isPrimary && isSuccess,
    'btn-primary--warning': isPrimary && isWarning,
    'btn-primary--danger': isPrimary && isDanger,
    'btn-secondary': isSecondary,
    'btn-secondary--success': isSecondary && isSuccess,
    'btn-secondary--warning': isSecondary && isWarning,
    'btn-secondary--danger': isSecondary && isDanger,
    'btn-link': isLink,
    'btn-link--success': isLink && isSuccess,
    'btn-link--warning': isLink && isWarning,
    'btn-link--danger': isLink && isDanger,
  }, `btn--${size}`, className);

  return (
    <Element { ...rest } className={ classes } disabled={ disabled } href={ href }>
      { children }
    </Element>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Block level button that spans the full width of its parent */
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
