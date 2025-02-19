import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    <>
        <Head>
            <title>City Traveler</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
};

export default Layout;