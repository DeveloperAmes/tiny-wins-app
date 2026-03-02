import Image from "next/image";
import homepageStyles from "./homepage.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={homepageStyles.intro_section}>
        <h1>Welcome to Tiny Wins!</h1>
        <h2>
          The ultimate dopamine boost =
          <br />
          Share your small daily accomplishments to feel good about yourself and
          celebrate other&apos;s wins!
        </h2>
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
