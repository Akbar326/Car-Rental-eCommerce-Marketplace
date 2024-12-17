export default function Footer() {
  return (
      <div className="w-full max-w-[1440px] mx-auto relative bg-white px-8 py-8">

          {/* Footer Top Section */}
          <div className="flex flex-col items-start gap-4">
              <h1 className="text-2xl sm:text-[32px] text-[#3563e9] font-bold leading-[48px]">
                  MORENT
              </h1>
              <p className="w-full max-w-[292px] text-[#131313]/60 text-base font-medium">
                  Our vision is to provide convenience and help increase your sales business.
              </p>


          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-between mt-10 sm:-mt-32 sm:ml-[780px] sm:gap-x-16">

              {/* About Section */}
              <div className="sm:w-[152px] sm:h-[244px] mb-4 md:mb-0">
                  <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">About</h2>
                  <ul className="text-[#131313]/60 text-base font-medium space-y-4 cursor-pointer">
                      <li>How it works</li>
                      <li>Featured</li>
                      <li>Partnership</li>
                      <li>Business Relation</li>
                  </ul>
              </div>

              {/* Community Section */}
              <div className="sm:w-[152px] sm:h-[244px] mb-4 md:mb-0">
                  <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">Community</h2>
                  <ul className="text-[#131313]/60 text-base font-medium space-y-4 cursor-pointer">
                      <li>Events</li>
                      <li>Blog</li>
                      <li>Podcast</li>
                      <li>Invite a Friend</li>
                  </ul>
              </div>

              {/* Socials Section */}
              <div className="sm:w-[152px] sm:h-[244px] mb-4 md:mb-0 ml-[200px] sm:ml-0 -mt-[430px] sm:-mt-0">
                  <h2 className="text-xl text-[#1a202c] font-semibold leading-[30px] mb-6">Socials</h2>
                  <ul className="text-[#131313]/60 text-base font-medium space-y-4 cursor-pointer ">
                      <li>Discord</li>
                      <li>Instagram</li>
                      <li>Twitter</li>
                      <li>Facebook</li>
                  </ul>
              </div>
          </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex border-t border-[#131313]/20 mb-4"></div>

          <div className="flex flex-col sm:flex-row justify-between text-[#1a202c] text-xs sm:text-base font-semibold mt-[250px] sm:mt-0 ">

              {/* Copyright Information */}
              <span className="mt-2 sm:mt-0">©{new Date().getFullYear()} MORENT. All rights reserved</span>

              {/* Privacy & Policy and Terms & Condition Links for Small Screens */}
              <div className="flex flex-col sm:flex-row justify-between w-full sm:w-auto space-x-48 sm:space-x-16 -mt-12 sm:-mt-0">
                  <span className="cursor-pointer">Privacy & Policy</span>
                  <span className="-mt-4 sm:-mt-0 text-nowrap cursor-pointer">Terms & Condition</span>
              </div>
          </div>


      </div>
  );
}
