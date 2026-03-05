import { PersonIcon, PlusIcon, FileTextIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import footerStyles from "@/app/styles/footer.module.css";

export default async function Footer({ params }) {
  const { userId } = await auth();
  return (
    <footer className={footerStyles.footer}>
      <nav className={footerStyles.footer_nav}>
        <Link href={"/feed"} className={footerStyles.footer_nav_link}>
          <FileTextIcon
            aria-label="feed"
            className={footerStyles.footer_icon}
          />
          Feed
        </Link>
        <Link
          href={`/profile/${userId}/create-post`}
          className={footerStyles.footer_nav_link}
        >
          <PlusIcon
            aria-label="add a new win"
            className={footerStyles.footer_icon}
          />
          Add Win
        </Link>
        <Link
          href={`/profile/${userId}`}
          className={footerStyles.footer_nav_link}
        >
          <PersonIcon
            aria-label="profile page"
            className={footerStyles.footer_icon}
          />
          Profile
        </Link>
      </nav>
      <p>DeveloperAmes &copy; 2026</p>
    </footer>
  );
}
