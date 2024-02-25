import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experience() {
  const images = [
    "/images/cyberbabepalette.png",
    "/images/darling1.png",
    "/images/home3.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Enable swipe to slide
  };

  const images2 = [
    "/images/package.jpg",
    "/images/Gif.gif",
    "/images/home3.png",
  ];

  return (
    <>
      <h1 className="text-4xl p-20">Experience</h1>
      <div className="flex items-center justify-center">
        <div className="bg-white border-gray-300 w-96 border rounded-3xl mb-16">
          <header className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">
            <div>
              <img
                src="/images/darlinglogo.png"
                className="rounded-full w-10 h-10"
                alt="Avatar"
              />
            </div>
            <div className="col-span-4 text-sm font-semibold">
              E-ccomerece Business Owner
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </header>
          <div>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Photo ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col p-4 gap-3">
            <div className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">11,552 Likes</div>
            <div className="text-sm">
              <span className="font-semibold">E-ccomerce Business Owner</span>
              <ul>
                <li>
                  • Leveraged paid social and organic content marketing
                  strategies on Shopify, contributing to revenue growth
                  surpassing $103K+ while growing 70,000+ followers online
                </li>
                <li>
                  • Customized existing themes on Shopify, meticulously
                  integrating brand-specific elements and refining user
                  experience components
                </li>
                <li>
                  • Collaborated closely with freelancers and manufacturers
                  overseas on product design and branding initiatives to uphold
                  quality and brand consistency
                </li>
              </ul>
            </div>
            <div className="text-gray-500 text-sm">View all 877 comments</div>
            <div className="text-gray-400 text-xs"> Oct 2020 - Present</div>
          </div>
        </div>
      </div>
      {/* exp 2 */}
      <div className="flex items-center justify-center">
        <div className="bg-white border-gray-300 w-96 border rounded-3xl">
          <header className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">
            <div>
              <img
                src="/images/darlinglogo.png"
                className="rounded-full w-10 h-10"
                alt="Avatar"
              />
            </div>
            <div className="col-span-4 text-sm font-semibold">
              Social Media Specialist
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </header>
          <div>
            <Slider {...settings}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Photo ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col p-4 gap-3">
            <div className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">11,552 Likes</div>
            <div className="text-sm">
              <span className="font-semibold">CulinaryLab Cooking School</span>
              <ul>
                <li>
                  Achieved exceptional growth of 494% on the TikTok account,
                  expanding the following from 1.9K to 11.6K, and garnered
                  significant brand exposure through a highly viewed video with
                  over 1.8 million views
                </li>
                <li>
                  Developed content calendars, effectively coordinating the
                  scheduling and publication of content across multiple
                  platforms using Hootsuite in a dynamic startup environment
                </li>
                <li>
                  Collaborated seamlessly with my manager to execute projects
                  with precision and exemplified a track record of consistently
                  meeting project deadlines
                </li>
              </ul>
            </div>
            <div className="text-gray-500 text-sm">View all 877 comments</div>
            <div className="text-gray-400 text-xs"> Feb 2022 - Apr 2023</div>
          </div>
        </div>
      </div>
    </>
  );
}
