import  Link from "next/link"
import React from "react"
 
function Country(){
    return (
        <>
        <h1 className="font-semibold text-gray-500">List of Countries</h1>
        <br></br>
        <ul className="flex justify-center">
       <u><li><Link href="country/china">China</Link></li></u>
       <u><li><Link href="country/pakistan">pakistan</Link></li></u>
       <u><li><Link href="country/India">India</Link></li></u>
       <u> <li><Link href="country/Switzerland">Switzerland</Link></li></u>
        </ul>
        </>
    )
}
export default Country;