import {TagProps } from "./Tag.props"
import styles from './Paragraph.module.css';
import cn from 'classNames';

export const Tag = ({children, size, color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div
        className={cn(styles.tag, className, {
            [styles.small]: size == 'S',
            [styles.medium]: size == 'M',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary'
        })}
        {...props}
        >{
            href ? <a href={href}>{children}</a> : <>{children}</>
        }{children}</div>
    );
};