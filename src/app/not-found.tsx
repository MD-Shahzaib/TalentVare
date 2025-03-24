import Link from "next/link";
import { Navbar } from "@/components";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-[1440px] mx-auto px-4 py-16">
                <div className="bg-white rounded-lg p-10 max-w-lg mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[#0050aa] mb-4">404</h1>
                    <p className="text-xl text-[#333333] mb-6">This page is under construction</p>
                    <p className="text-[#666666] mb-8 text-[15px]">
                        The page you&apos;re looking for is currently being developed. Please check back later.
                    </p>
                    <Link href="/" className="text-white py-2 px-4 rounded-md bg-[#0050aa] hover:bg-blue-700 transition-colors duration-200 text-sm font-medium inline-block">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;