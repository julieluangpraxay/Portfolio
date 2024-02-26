import Nav from "./Nav";

export default function HomeCard() {
  return (
    <>
      <div className="bg-pink-50 mt-20 border border-4 border-pink-300 flex justify-center flex-wrap p-4 w-2/5 rounded-3xl m-auto">
        <div>
          <h1 className="text-3xl p-2 bold">Julie Luangpraxay</h1>
          <h3 className="text-xl p-2 pb-20">Front-End Developer</h3>
        </div>
        <video
          src="/images/herovid2.MP4"
          autoPlay
          loop
          muted
          className="w-11/12 rounded-3xl"
        ></video>
        <div className="w-full flex justify-between">
          {/* <div className="w-18">
            <img
              src="/images/pfp.jpg"
              alt="julie's profile picture"
              className="w-full rounded-full border border-black border-2"
            />
          </div> */}

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
          </div>
        </div>
        <Nav />
      </div>
    </>
  );
}
