import Image from "next/image";
import Confetti from "./components/Confetti";
import homepageStyles from "./homepage.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={homepageStyles.intro_section}>
        <div className={homepageStyles.textSection}>
          <h1>
            Welcome to Tiny Wins - a community built on progress, not
            perfection.
          </h1>
          <p>
            This is a space to celebrate the small victories that often go
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
          <div className={homepageStyles.people_div}>
            <Image
              src="/assets/blonde1.png"
              alt="blonde woman celebrating with a big smile and a fist pump"
              width={300}
              height={300}
              className={homepageStyles.person_img}
            />
            <Image
              src="/assets/2peopledancing.png"
              alt="two people dancing and smiling"
              width={300}
              height={300}
              className={homepageStyles.person_img}
            />
          </div>
          <p>
            Share your tiny win, support others, and build real momentum
            together.
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
        </div>
        <div className={homepageStyles.imageSection}>
          <Image
            src="/assets/TinyWinsPhoneAppFinal.png"
            alt="A mobile phone displaying the Tiny Wins App."
            width={239}
            height={362}
            className={homepageStyles.hero_image}
          />
        </div>
      </section>
      <section className={homepageStyles.how_it_works_section}>
        <h2 className={homepageStyles.how_it_works_heading}>How It Works:</h2>
        <ul className={homepageStyles.how_it_works_container}>
          <li className={homepageStyles.how_it_works_card}>
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
          <li className={homepageStyles.how_it_works_card}>
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
          <li className={homepageStyles.how_it_works_card}>
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
