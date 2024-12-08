export default function Footer() {
    return (
      <div className="w-full max-w-[1440px] h-[480px] mx-auto relative bg-white px-8">

        {/* Footer Top Section */}
        <div className="absolute left-8 top-20 flex flex-col items-start gap-4">
          <h1 className="text-[32px] text-[#3563e9] font-bold leading-[48px]">
            MORENT
          </h1>
          <p className="w-[292px] text-[#131313]/60 text-base font-medium">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
  
        {/* About Section */}
        <div className="absolute top-20 left-[804px] w-[152px]">
          <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">
            About
          </h2>
          <ul className="text-[#131313]/60 text-base font-medium space-y-6 cursor-pointer">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
  
        {/* Community Section */}
        <div className="absolute top-20 left-[1016px] w-[152px]">
          <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">
            Community
          </h2>
          <ul className="text-[#131313]/60 text-base font-medium space-y-6 cursor-pointer">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
          </ul>
        </div>
  
        {/* Socials Section */}
        <div className="absolute top-20 left-[1228px] w-[152px]">
          <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">
            Socials
          </h2>
          <ul className="text-[#131313]/60 text-base font-medium space-y-6 cursor-pointer">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
  
        {/* Divider */}
        <div className="absolute top-[360px] left-8 w-[1320px] border-t border-[#131313]/20"></div>
  
        {/* Footer Bottom Section */}
        <div className="absolute bottom-[24px] left-8 text-[#1a202c] text-base font-semibold">
          ©2024 MORENT. All rights reserved
        </div>
        <div className="absolute bottom-[24px] right-[200px] text-[#1a202c] text-base font-semibold">
          Privacy & Policy
        </div>
        <div className="absolute bottom-[24px] right-[60px] text-[#1a202c] text-base font-semibold">
          Terms & Condition
        </div>
      </div>
    );
  }
  