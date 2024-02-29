import Nav from "./Nav";

export default function HomeCard() {
  return (
    <>
      <div className="sm:w-1/2 bg-pink-50 mt-20 border border-4 border-pink-300 flex justify-center flex-wrap p-4 w-10/12 rounded-3xl m-auto">
        <Nav />
        <div className="flex flex-wrap justify-center p-2">
          <img
            src="/images/pfp.jpg"
            alt=""
            className="w-1/2 rounded-full border-pink-400 border-solid border-2"
          />
          <h1 className="text-3xl p-2 bold">Julie Luangpraxay</h1>
          <h3 className="text-xl p-2 pb-20">Front-End Developer</h3>
        </div>
        <img src="/images/pixelgif.gif" alt="" className="rounded-3xl" />

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
    </>
  );
}
