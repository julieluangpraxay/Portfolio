export default function Hero() {
  return (
    <>
      <div className="w-full flex flex-col items-center p-8">
        <h1 className="text-5xl p-2">Julie Luangpraxay</h1>
        <h3 className="text-xl p-2">Front-End Developer</h3>
        <img
          src="/images/Gif.gif"
          alt=""
          className="w-1/2 flex justify-center m-auto mb-20 rounded-3xl"
        />
      </div>
      <div className="box">
        <div className="head">
          <div className="ear-left">
            <div className="inner-ear"></div>
          </div>
          <div className="ear-right">
            <div className="inner-ear"></div>
          </div>
          <div className="eye-left animated pulse">
            <div className="pupil animated pulse"></div>
          </div>
          <div className="eye-right animated pulse">
            <div className="pupil animated pulse"></div>
          </div>
          <div className="nose">
            <div className="line"></div>
          </div>
          <div className="blush-left"></div>
          <div className="blush-right"></div>
          <h1 className="flex flex-wrap relative ml-40">hello, welcome to my portfolio!</h1>
        </div>
      </div>
    </>
  );
}
