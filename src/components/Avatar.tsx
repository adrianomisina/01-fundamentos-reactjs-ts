import { ImgHTMLAttributes } from 'react'; 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

const Avatar = ({hasBorder = true, ...props}:AvatarProps) => {
  return (
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    // src={src} 
    // alt={alt}
    // title={title}
    {...props}
    />
  )
}

export default Avatar