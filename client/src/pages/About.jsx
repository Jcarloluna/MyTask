import React from "react";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <>
      <div
        id="features"
        className=" mt-[140px] lg:mt-[150px] pb-[80px] px-[40px] sm:px-[80px] lg:px-[160px] h-auto flex flex-col space-y-5"
      >
        <div className="flex flex-row justify-start items-center">
          <h2>About</h2>
          <span className="font-bold text-mainLightBlue text-[80px] md:text-[120px] ml-8">
            &gt;
          </span>
        </div>
        <div className="flex flex-col space-y-5 justify-start items-center">
          <div className="space-y-2">
            <h3>Reason</h3>
            <p className="p-0 m-0">
              <span className="text-mainLightBlue font-semibold">MyTask </span>
              was born out of a desire to delve into the intricacies of modern
              web technologies. As a passionate learner, I embarked on a journey
              to experience the <strong>MERN</strong> (MongoDB, Express.js,
              React, Node.js) stack and delve into GraphQL. This project became
              a canvas for me to experiment, learn, and implement the concepts I
              acquired throughout this immersive journey.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Vision</h3>
            <p className="p-0 m-0">
              <span className="text-mainLightBlue font-semibold">MyTask</span>’s
              vision was simple yet meaningful to create a practical application
              that showcases my progress as a developer and serves as a
              testament to my dedication to continuous improvement. While the
              app itself is focused on task management, it symbolizes the
              potential that learning and dedication hold in turning ideas into
              functional solutions.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Why MyTask Matters</h3>
            <p className="p-0 m-0">
              <span className="text-mainLightBlue font-semibold">MyTask</span>{" "}
              might not be the most complex application out there, but it's a
              reflection of my journey and the progress I've made in the field
              of web development. By sharing MyTask, I hope to inspire fellow
              learners and aspiring developers to embrace challenges, learn
              persistently, and create meaningful projects that resonate with
              their learning goals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
