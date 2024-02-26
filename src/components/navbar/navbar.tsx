'use client'
import { Bars4Icon, HomeIcon, FireIcon, CommandLineIcon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import styles from './navbar.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const links = [
        { url: '/', title: 'Home', icon: <HomeIcon /> },
        { url: '/about', title: 'About', icon: <FireIcon /> },
        { url: '/projects', title: 'Projects', icon: <CommandLineIcon /> },
        { url: '/contact', title: 'Contact me', icon: <EnvelopeIcon /> }
    ]

    links.forEach(link => {
        link.icon = React.cloneElement(link.icon, { className: 'h-4 w-4 ' });
    });

    const [clicked, setClicked] = useState(false);

    const pathname = usePathname();

    const handlerClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className={styles.navContainer}>
            <div className='flex md:hidden justify-end pr-5 cursor-pointer '>
                {
                    clicked ? <XMarkIcon onClick={handlerClick} className="h-8 w-8 text-white" /> : <Bars4Icon onClick={handlerClick} className="h-8 w-8 text-white" />
                }
            </div>

            <nav className={`${styles.linkContainer} ${clicked ? styles.active : ''}`}>
                {links.map(link => (
                    <Link href={link.url} key={link.title}>
                        <div className='p-3 flex justify-end'>
                            <div className={`${styles.navLink} ${pathname == link.url ? styles.actual : ''}`}  onClick={handlerClick}>
                                <div>{link.title}</div>
                                <div>{link.icon}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </nav>

        </div>
    )
}