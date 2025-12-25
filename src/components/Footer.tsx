import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center text-center sm:text-start gap-4 sm:justify-between p-8 bg-gray-900 rounded-md text-white">
            <div className="flex flex-col gap-3">
                <Link href="/" className="flex items-center gap-1 justify-center">
                    <Image src="/logo.png" width={42} height={42} alt="TrendLama" />
                    <p className="text-md font-medium">TRENDLAMA.</p>
                </Link>
                <p className="text-sm font-small text-gray-500">© Ashif Industries Pvt. Ltd.</p>
                <p className="text-sm font-small text-gray-500">All right reserved.</p>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-medium">Links</p>
                <Link href="/" className="text-sm font-small text-gray-500">Homepage</Link>
                <p className="text-sm font-small text-gray-500">Contact</p>
                <p className="text-sm font-small text-gray-500">Terms of Service</p>
                <p className="text-sm font-small text-gray-500">Privacy Policy</p>

            </div>

            <div className="flex flex-col gap-3">
                <p className="font-medium">Products</p>
                <Link href="/" className="text-sm font-small text-gray-500">All Products</Link>
                <p className="text-sm font-small text-gray-500">New Arrivals</p>
                <p className="text-sm font-small text-gray-500">Best Sellers</p>
                <p className="text-sm font-small text-gray-500">Sale</p>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-medium">Company</p>
                <Link href="/" className="text-sm font-small text-gray-500">About</Link>
                <p className="text-sm font-small text-gray-500">Contact</p>
                <p className="text-sm font-small text-gray-500">Blog</p>
                <p className="text-sm font-small text-gray-500">Affiliate Program</p>
            </div>
        </div>
    )
}
export default Footer
