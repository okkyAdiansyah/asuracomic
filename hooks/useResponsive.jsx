import React from "react";
import { useState, useEffect } from "react";

const useResponsive = () => {
    const [deviceType, setDeviceType] = useState();

    const device = {
        MOBILE: "MOBILE",
        TABLET: "TABLET",
        DESKTOP: "DESKTOP"
    };

    const getDeviceType = () => {
        if(typeof window !== "undefined"){
            const screenWidth = window.innerWidth;
            if(screenWidth <= 640) return device.MOBILE;
            if(screenWidth > 640 && screenWidth < 1024) return device.TABLET;
        }
        
        return device.DESKTOP;
    }

    useEffect(() => {
        setDeviceType(getDeviceType());

        const handleResize = () => {
            setDeviceType(getDeviceType());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceType;
}

export default useResponsive;