"use client";

import Image from "next/image";

const Avatar = () => {
    return ( 
        <Image 
            className="rounded-full"
            height="10"
            width="10"
            alt="Avatar"
            src="/images/placeholder.jpg"
        />
     );
}
 
export default Avatar;