import Nav from "../Components/Nav";

export default function AboutMe() {
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
          <div className="sm:w-full w-1/2 m-auto p-8">
            <p>
              Welcome to my corner of the internet! I'm a multifaceted
              professional with a vibrant tapestry of experiences that range
              from digital content creation and live streaming on Twitch, to
              pioneering my own makeup brand that has brought smiles to
              countless faces online. My adventurous spirit and creative
              endeavors have recently steered me towards the fascinating world
              of software engineering.
              <p>
                My journey into tech was ignited by a curiosity for the
                mechanisms that power our online experiences. Motivated by the
                remarkable talent in the tech industry, I took the leap into
                software development through a comprehensive coding bootcamp.
                This adventure has not only expanded my skill set but also
                fueled my passion for continuous learning and personal growth.
                When I'm not immersed in coding, you can find me exploring
                virtual worlds in PC games. Whether it's the adrenaline rush of
                FPS games or the tranquil pleasure of simulation games, I'm
                always on the lookout for my next favorite title. Currently,
                Overwatch 2 and Palworld top my list of must-plays.
              </p>
              <p>
                But my interests don't stop at gaming; I have a profound love
                for culinary exploration and fashion, constantly drawing
                inspiration from the world around me. As I look to the future, I
                dream of embracing the hustle and bustle of New York City life,
                imagining a quaint apartment that boasts an inspiring view of
                the skyline. This city's vibrant energy and endless
                possibilities resonate with my aspirations and zest for life.
                Thank you for visiting my site. Whether you're here to explore
                my professional portfolio, share in my gaming adventures, or
                just passing through, I'm glad you're here.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
