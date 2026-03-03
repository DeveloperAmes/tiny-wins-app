"use client";

import confetti from "canvas-confetti";
import Link from "next/link";
import confettiStyles from "@/app/styles/confetti.module.css";

export default function Confetti() {
  function handleConfetti() {
    confetti({
      particleCount: 200,
      spread: 360,
      origin: { y: 1 },
      colors: [
        "#B77A75",
        "#A05152",
        "#9e303F",
        "#B95955",
        "#CF7D63",
        "#D99A73",
      ],
      startVelocity: 25,
    });
    confetti({
      particleCount: 200,
      spread: 360,
      origin: { y: 0.3, x: 1 },
      colors: [
        "#B77A75",
        "#A05152",
        "#9e303F",
        "#B95955",
        "#CF7D63",
        "#D99A73",
      ],
      startVelocity: 25,
    });
    confetti({
      particleCount: 200,
      spread: 360,
      origin: { y: 0.3, x: 0 },
      colors: [
        "#B77A75",
        "#A05152",
        "#9e303F",
        "#B95955",
        "#CF7D63",
        "#D99A73",
      ],
      startVelocity: 25,
    });
  }
  return (
    <Link
      href={"/sign-up"}
      onMouseOver={handleConfetti}
      className={confettiStyles.link}
    >
      Start today 🎉
    </Link>
  );
}
