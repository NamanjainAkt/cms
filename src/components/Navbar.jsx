import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="w-full flex justify-between px-8 h-12">
            <Link href={"/"} className="space-x-4 flex items-center px-4 font-semibold">
                <BrainCircuit className="w-6 h-6" />
                <p>MY_CMS</p>
            </Link>
            <div>
                <Link href="/sign-in" className="text-blue-500 hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    )
}

export default Navbar