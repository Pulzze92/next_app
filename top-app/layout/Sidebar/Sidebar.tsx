import { SidebarProps } from "./Sidebar.props"
import styles from './Sidebar.module.css';
import cn from 'classNames';

export const Layout = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};