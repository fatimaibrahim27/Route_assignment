import { ImageError } from "next/dist/server/image-optimizer";
import Link from "next/link";
import React from "react"


function Header(){
    return (
        <div>
        <ul>
        <li className="text-blue-500"><Link href="/">Home</Link></li>
        <li className="text-blue-500"><Link href="/About">About</Link></li>
        <li className="text-blue-500"><Link href="/Contact">Contact</Link></li>
        <li className="text-blue-500" ><Link href="/country">Country</Link></li>
    
        </ul>
    
        </div>
    )
}
export default Header
