import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    leftIcon,
    rightIcon,
    large = false,
    className,
    onClick,
    ...passProps
}) {
    let Compo = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove events listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Compo = Link;
        props.to = to;
    } else if (href) {
        Compo = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Compo className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Compo>
    );
}

export default Button;
