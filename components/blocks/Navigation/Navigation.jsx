"use client";

import React from 'react';
import styles from '@/styles/navigation.module.scss';
import WebLogo from '@/public/Asura-Logo.webp';
import Logo from '@/components/elements/Logo/Logo';
import useResponsive from '@/hooks/useResponsive';

const Navigation = () => {
    let deviceType = useResponsive();

    const logoSize = {
        MOBILE: 42,
        TABLET: 46,
        DESKTOP: 48
    }

    return (
        <nav>
            <Logo
                logo={WebLogo}
                logoW={logoSize[deviceType]}
                logoH={logoSize[deviceType]}
            />
        </nav>
    )
}

export default Navigation;