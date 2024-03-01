import Nav from "./Nav";

export default function HomeCard() {
  return (
    <>
      <div className="sm:w-3/4 bg-pink-50 mt-20 border border-4 border-pink-400 flex justify-center flex-wrap p-4 w-10/12 rounded m-auto">
        <div className="sm:w-full border border-4 bg-white border-pink-300 flex justify-between flex-wrap w-10/12 rounded m-auto p-1">
          <p>https://www.julie.codes</p>
          <div className="relative w-3 h-6 mx-2">
            <div className="w-2 h-0.5 bg-white border border-black right-5 absolute p-2 top-0.5 m-0.5"></div>

            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto rotate-45"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto -rotate-45"></div>
          </div>
        </div>
        <div className="sm:w-full border border-4 border-pink-300 flex justify-center flex-wrap p-4 w-10/12 rounded m-auto">
          <Nav />
          {/* <div className="flex justify-center pt-8">
            <img
              src="/images/pfp.jpg"
              alt=""
              className="w-1/4 rounded-full border-pink-400 border-solid border-2"
            />
          </div>
          <div className="flex md:flex-col flex-wrap text-center p-8 justify-center">
            <h1 className="text-3xl p-2 font-bold text-center">
              Julie Luangpraxay
            </h1>
            <h3 className="text-xl p-2 text-center">Front-End Developer</h3>
          </div> */}
          <div className="flex flex-col justify-center pt-8 items-center">
            <img
              src="/images/pfp.jpg"
              alt=""
              className="w-1/4 rounded-full border-pink-400 border-solid border-2 mb-4"
            />
            <div className="text-center p-8">
              <h1 className="text-3xl p-2 font-bold">Julie Luangpraxay</h1>
              <h3 className="text-xl p-2">Front-End Developer</h3>
            </div>
          </div>

          <img
            src="/images/pixelgif.gif"
            alt=""
            className="rounded-3xl w-3/4"
          />

          <div className="w-full flex justify-between">
            <div className="p-8 flex flex-wrap gap-5">
              <a
                href="https://www.linkedin.com/in/julieluangpraxay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/linkedinblue.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>LinkedIn</h3>
                </div>
              </a>

              <a
                href="https://www.github.com/julieluangpraxay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/github.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>GitHub</h3>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@jooliekawaii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/tiktok.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>TikTok</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
