import { ParagraphProps } from "./Paragraph.props"
import styles from './Paragraph.module.css';
import cn from 'classNames';

export const Paragraph = ({children, size, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p 
        className={cn(styles.p, className, {
            [styles.small]: size == 'S',
            [styles.medium]: size == 'M',
            [styles.large]: size == 'L'
        })}
        {...props}
        >{children}</p>
    );
};