import React, { ReactNode } from 'react';
import Head from 'next/head';
import NextBreadcrumb from '../shared/NextBreadcrumb';
import ButtonAppBar from '../shared/ButtonAppBar';

type Props = {
    children?: ReactNode;
    title?: string;
};

const DefaultLayout: React.FC<Props> = ({ children, title = 'Sim Status & Sale Order Summary Report' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Add any other meta tags or external CSS/JS links here */}
            </Head>
            <header>
                <ButtonAppBar />
            </header>
            <main>
                <NextBreadcrumb
                    title={title}
                    separator={<span>/</span>}
                    activeClasses='text-black'
                    containerClasses='flex'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                />
                {children}
            </main>
            <footer>
                {/* Add footer content here */}
            </footer>
        </div>
    );
};

export default DefaultLayout;
