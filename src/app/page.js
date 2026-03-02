import Image from "next/image";
import Confetti from "./components/Confetti";
import homepageStyles from "./homepage.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={homepageStyles.intro_section}>
        <Confetti />
        <h1>Welcome to Tiny Wins!</h1>
        <p>
          Tiny Wins is a community built on progress, not perfection.
          <br />
          <br /> This is a space to celebrate the small victories that often go
          unnoticed:
          <ul>
            <li className={homepageStyles.list_item}>
              the workout you didn&apos;t skip
            </li>
            <li className={homepageStyles.list_item}>
              the task you finally completed
            </li>
            <li className={homepageStyles.list_item}>
              the habit you&apos;re building one step at a time.
            </li>
          </ul>
          <br /> Share your tiny win, support others, and build real momentum
          together.
          <br /> <br />
          Because when we recognize the small steps, big growth follows. Start
          today. Your next win is waiting.
        </p>
      </section>
      <section className={homepageStyles.how_it_works_section}>
        <h3>How It Works:</h3>
        <ul className="post-container">
          <li className="post">
            <Image
              src="/assets/flameicon.png"
              alt=""
              width={25}
              height={25}
              className="m-auto mt-2"
            />
            Create a profile and add your small wins each day. You can share
            more than one a day if you like!
          </li>
          <li className="post">
            <Image
              src="/assets/flameicon.png"
              alt=""
              width={25}
              height={25}
              className="m-auto mt-2"
            />
            Your small wins are added to the main feed so others can see what
            you have posted and celebrate with you too!
          </li>
          <li className="post">
            <Image
              src="/assets/flameicon.png"
              alt=""
              width={25}
              height={25}
              className="m-auto mt-2"
            />
            Celebrate others&apos; small wins by liking their posts on the main
            feed.
          </li>
        </ul>
      </section>
    </main>
  );
}
