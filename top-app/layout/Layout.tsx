import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.css';
import cn from 'classNames';

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};