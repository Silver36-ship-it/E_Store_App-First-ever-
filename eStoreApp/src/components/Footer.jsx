const Footer = () => {
  return (
    <footer className="gradient-ink text-white pt-16 pb-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">SILVER.CO</h2>
            <p className="text-white/65 text-sm mb-6 max-w-sm">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
                X
              </div>
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
                F
              </div>
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
                in
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-white/65 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-white/65 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-white/65 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/55 border-t border-white/15 pt-8">
          <p>Siler.co 2000-2026, All Rights Reserved</p>
          <div className="flex gap-3">
            <div className="bg-white/10 px-3 py-2 rounded border border-white/15">
              Visa
            </div>
            <div className="bg-white/10 px-3 py-2 rounded border border-white/15">
              Mastercard
            </div>
            <div className="bg-white/10 px-3 py-2 rounded border border-white/15">
              PayPal
            </div>
            <div className="bg-white/10 px-3 py-2 rounded border border-white/15">
              Apple Pay
            </div>
            <div className="bg-white/10 px-3 py-2 rounded border border-white/15">
              Google Pay
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
