import classNames from "classnames/bind";
import { forwardRef, useState } from 'react'

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

export default forwardRef(Image);