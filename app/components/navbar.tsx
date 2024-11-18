import Link from 'next/link';
export default function(){
    return (
        <ul className="flex justify-center gap-5">
        <Link href="#"><li className="text-2xl p-2">Home</li></Link>
        <Link href="#"><li className="text-2xl p-2">About Us</li></Link>
        <Link href="#"><li className="text-2xl p-2">Projects</li></Link>
        <Link href="#"><li className="text-2xl p-2">Skills</li></Link>
        <Link href="#"><li className="text-2xl p-2">Contact Us</li></Link>
    </ul>
    )
}