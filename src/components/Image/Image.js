import classNames from "classnames/bind";
import { forwardRef, useState } from 'react'
// import PropTypes from 'prop-types';

import styles from './Image.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(styles)

function Image({ className, src, fallback: customFallback = images.noImage, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('')
    
    const handelErrorImage = () => {
        setFallback(customFallback)
    }
    
    return ( 
        <img
            className={cx('wrapper', className)} 
            ref = {ref}
            src={fallback || src}
            onError = {handelErrorImage}
            {...props}
            alt={alt}
        />
     );
}

// Image.propTypes = {
//     className: PropTypes.string,
//     src: PropTypes.string,
//     fallback: PropTypes.string,
// }

export default forwardRef(Image);