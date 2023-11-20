import React from "react";
import Yusa from "../assets/yusa.jpeg";
import Arya from "../assets/Arya.jpeg";
import Adit from "../assets/adit5.jpeg";
import InstagramIcon from "../assets/instagram.png";
import EmailIcon from "../assets/gmail.png";
import background from "../assets/bg_img.png";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(60px)",
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const ImageAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(80px)",
    config: config.slow,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const Member = () => {
  return (
    <div
      id="contact"
      className="w-full py-20 px-4 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <TextAnimation>
        <h1 className="text-5xl font-sans font-bold text-center mb-14 text-white">
          Member of Groups
        </h1>
      </TextAnimation>
      <ImageAnimation>
        <div className="max-w-full overflow-x-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10">
            {/*  1 */}
            <div className="w-full md:w-96 shadow-xl bg-zinc-100 flex flex-col p-6 my-4 rounded-xl transform hover:scale-105 duration-300">
              <img
                className="w-full h-60 object-cover object-bottom mb-4 rounded-xl"
                src={Arya}
                alt="Arya Ahmad Caesar"
              />
              <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
                Developer
              </h2>
              <p className="text-center text-xl font-bold text-gray-900">
                Arya Achmad Caesar
              </p>
              <div className="text-center font-medium mt-4">
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/aryaacaesar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    <img
                      className="w-6 h-6"
                      src={InstagramIcon}
                      alt="Instagram"
                    />
                  </a>
                  <a href="#" className="mx-2">
                    <img className="w-6 h-6" src={EmailIcon} alt="Email" />
                  </a>
                </div>
              </div>
            </div>

            {/*  2 */}
            <div className="w-full md:w-96 shadow-xl bg-gray-100 flex flex-col p-8 my-4 rounded-xl transform hover:scale-105 duration-300">
              <img
                className="w-full h-60 object-cover object-bottom  mb-4 rounded-xl"
                src={Adit}
                alt="Ginanjar Aditiya Prianata"
              />
              <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
                Developer
              </h2>
              <p className="text-center text-xl font-bold text-gray-900">
                Ginanjar Aditiya Prianata
              </p>
              <div className="text-center font-medium mt-4">
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/g.adty_/#"
                    rel="noreferrer"
                    target="_blank"
                    className="mx-2"
                  >
                    <img
                      className="w-6 h-6"
                      src={InstagramIcon}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="mailto:ginanjar.aditya15@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="mx-2"
                  >
                    <img className="w-6 h-6" src={EmailIcon} alt="Email" />
                  </a>
                </div>
              </div>
            </div>

            {/*  3 */}
            <div className="w-full md:w-96 shadow-xl bg-zinc-100 flex flex-col p-6 my-4 rounded-xl transform hover:scale-105 duration-300">
              <img
                className="w-full h-60 object-cover mb-4 rounded-xl"
                src={Yusa}
                alt="Yusa Putra Rosdiana"
              />
              <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
                Developer
              </h2>
              <p className="text-center text-xl font-bold text-gray-900">
                Yusa Putra Rosdiana
              </p>
              <div className="text-center font-medium mt-4">
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/yusa.rosdiana/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    <img
                      className="w-6 h-6"
                      src={InstagramIcon}
                      alt="Instagram"
                    />
                  </a>
                  <a href="#" className="mx-2">
                    <img className="w-6 h-6" src={EmailIcon} alt="Email" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ImageAnimation>
    </div>
  );
};

export default Member;
