import React from 'react';
import "./_socials.css";
import { RiYoutubeLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiFacebookBoxLine } from "@remixicon/react";
import { RiGithubLine } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";

const Socials = () => {
  return (
    <div className='socials-wrapper'>
        <div className="copyright-wrapper">
            © 2024 StyleNest, Inc. All rights reserved.
        </div>
        <div className="socials__links">
            <button className="social">
                <RiYoutubeLine />
            </button>
            <button className="social">
                <RiInstagramLine />
            </button>
            <button className="social">
                <RiFacebookBoxLine />
            </button>
            <button className="social">
                <RiGithubLine />
            </button>
            <button className="social">
                <RiTwitterXLine />
            </button>
        </div>
    </div>
  )
}

export default Socials