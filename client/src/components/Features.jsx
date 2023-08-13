import React from "react";

export const Features = () => {
  return (
    <div
      id="features"
      className=" py-[80px] px-[20px] sm:px-[40px] lg:px-[80px] h-auto flex flex-col space-y-5"
    >
      <div className="flex flex-row justify-start items-center">
        <h2>Key Features</h2>
        <span className="font-bold text-mainLightBlue text-[120px] ml-10">
          &gt;
        </span>
      </div>
      <div className="flex flex-col space-y-5 justify-start items-center">
        <div className="space-y-2">
          <h3>
            Effortless Task Addition
          </h3>
          <p className="p-0 m-0">
            Seamlessly add tasks to your list with just a few taps. Whether it's
            a work assignment, a personal goal, or a shopping list, MyTask makes
            capturing tasks a breeze.
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            Priority at Your Fingertips{" "}
          </h3>
          <p className="p-0 m-0">
            Tailor your tasks to your needs by setting priority degrees. From
            high-priority tasks that demand immediate attention to low-priority
            ones that can wait, manage tasks based on their importance.
          </p>
        </div>
        <div className="space-y-2">
          <h3>User-Friendly Interface</h3>
          <p className="p-0 m-0">
            MyTask boasts a clean and intuitive interface that makes navigating
            through your tasks a pleasure. Spend less time figuring out the app
            and more time getting things done.
          </p>
        </div>
        <div className="space-y-2">
          <h3>
            Status Tracking Made Easy
          </h3>
          <p className="p-0 m-0">
            Keep track of your tasks' progress effortlessly. Whether they're
            "To-Do," "In Progress," or "Done," MyTask's intuitive status options
            help you visualize your accomplishments and stay motivated.
          </p>
        </div>
        <div className="space-y-2">
          <h3>Sync Across Devices</h3>
          <p className="p-0 m-0">
            Access your tasks from anywhere and stay updated on your progress.
            MyTask syncs seamlessly across all your devices, so you're always in
            control
          </p>
        </div>
      </div>
    </div>
  );
};
