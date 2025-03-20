import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({logo, logoW, logoH}) => {
    return (
        <>
            <Link
                href={'/'}
            >
                <Image
                    src={logo}
                    width={logoW}
                    height={logoH}
                    alt='logo'
                />
            </Link>
        </>
    )
}

export default Logo;