import Image from "next/image";
import Confetti from "./components/Confetti";
import homepageStyles from "./homepage.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={homepageStyles.intro_section}>
        <h1>Welcome to Tiny Wins!</h1>
        <p>
          Tiny Wins is a community built on{" "}
          <span className={homepageStyles.span}>progress</span>, not perfection.
          <br />
          <br /> This is a space to celebrate the small victories that often go
          unnoticed:
        </p>
        <ul>
          <li className={homepageStyles.list_item}>
            the workout you{" "}
            <span className={homepageStyles.span}>didn&apos;t skip</span>
          </li>
          <li className={homepageStyles.list_item}>
            the task you <span className={homepageStyles.span}>finally</span>{" "}
            completed
          </li>
          <li className={homepageStyles.list_item}>
            the habit you&apos;re building{" "}
            <span className={homepageStyles.span}>one step at a time.</span>
          </li>
        </ul>
        <br />
        <p>
          Share your tiny win, support others, and build real momentum together.
          <br /> <br />
          Because when we recognize the small steps, big growth follows.
          <br />
        </p>
        <br />
        <span className={homepageStyles.span}>
          <Confetti />
        </span>
        <br />
        <br />
        <p>Your next win is waiting...</p>
      </section>
      <section className={homepageStyles.how_it_works_section}>
        <h2 className={homepageStyles.how_it_works_heading}>How It Works:</h2>
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
