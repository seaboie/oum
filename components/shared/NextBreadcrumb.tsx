'use client'

import React, { ReactNode } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link';

type TBreadCrumbProps = {
    title?: string,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({ title, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {

    const paths = useRouter().pathname
    const pathNames = paths.split('/').filter(path => path)

    return (
        <Box component="section" sx={{ p: 2 }}>
            <div>
                <ul className={containerClasses}>
                    {
                        pathNames.map((link, index) => {
                            let href = `/${pathNames.slice(0, index + 1).join('/')}`
                            let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : `${listClasses} text-true-red`
                            return (
                                <React.Fragment key={index} >

                                    <li className={itemClasses}>
                                        <Link href={href}>
                                            <Typography>
                                                {index === pathNames.length - 1 ? title : (capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link)}
                                            </Typography>
                                        </Link>
                                    </li>
                                    <Typography>
                                        {pathNames.length !== index + 1 && separator}
                                    </Typography>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </Box>
    )
}

export default NextBreadcrumb