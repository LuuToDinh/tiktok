import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

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
    large = false,
    onClick,
    ...passProps 
}) {
    let Compo = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    // Remove events listener when button is disabled
    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if(to) {
        Compo = Link
        props.to = to
    } else if(href) {
        Compo = 'a'
        props.href = href
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    })
    
    return (
        <Compo className={classes} {...props}>
            <span>{children}</span>
        </Compo>
    );
}

export default Button;