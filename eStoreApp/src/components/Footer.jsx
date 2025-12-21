const Footer = () => {
    return ( <footer className="bg-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">SILVER.CO</h2>
                    <p className="text-gray-600 text-sm mb-6">
                        We have clothes that suits your style and which you're proud to wear. From women to men.
                    </p>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
                            X
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
                            F
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointerhover:bg-gray-100">
                            in
                        </div>
                    </div>
                </div>
                <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Works</a></li>
                <li><a href="#" className="hover:text-black">Career</a></li>
            </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4">HELP</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="#" className="hover:text-black">Customer Support</a></li>
                    <li><a href="#" className="hover:text-black">Delivery Details</a></li>
                    <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4">RESOURCES</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="#" className="hover:text-black">Free eBooks</a></li>
                    <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
                    <li><a href="#" className="hover:text-black">How to - Blog</a></li>
                    <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
                </ul>
            </div>
             </div> 

             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                <p>Siler.co 2000-2026, All Rights Reserved</p>
                <div className="flex gap-3">
                    <div className="bg-white px-3 py-2 rounded border">Visa</div>
                    <div className="bg-white px-3 py-2 rounded border">Mastercard</div>
                    <div className="bg-white px-3 py-2 rounded border">PayPal</div>
                    <div className="bg-white px-3 py-2 rounded border">Apple Pay</div>
                    <div className="bg-white px-3 py-2 rounded border">Google Pay</div>
                </div>
             </div>
              </div>

    </footer> );
}
 
export default Footer;