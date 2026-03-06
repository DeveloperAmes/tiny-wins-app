import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import headerStyles from "../styles/header.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div>
        <Link href={"/"}>
          <Image
            src="/assets/tinywinslogo.png"
            width={100}
            height={100}
            alt="Tiny wins logo."
            className={headerStyles.logo}
            aria-label="Return to homepage"
          />
        </Link>
      </div>
      <nav className={headerStyles.header_nav}>
        <SignedOut>
          <SignInButton className="user-btn" />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignUpButton className="user-btn" />
        </SignedOut>
      </nav>
      <div className={headerStyles.buttons}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className={headerStyles.dropdown_btn} aria-label="Menu">
              <HamburgerMenuIcon className={headerStyles.hamburger} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={headerStyles.dropdown_menu}>
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <SignedOut>
                  <SignInButton className="user-btn" />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                  <SignOutButton />
                </SignedIn>
              </DropdownMenu.Item>
              <hr />
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <SignedOut>
                  <SignUpButton className="user-btn" />
                </SignedOut>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
