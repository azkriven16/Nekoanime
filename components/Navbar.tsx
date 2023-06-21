"use client";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "@/public/logo.svg";
import Link from "next/link";
declare global {
  interface Window {
    my_modal_2: HTMLDialogElement;
  }
}

const closeModal = (): void => {
  const modalElement = document.getElementById(
    "my-modal-4"
  ) as HTMLInputElement | null;
  if (modalElement) {
    modalElement.checked = true;
  }
};

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 sticky top-0 z-10">
      <div className="navbar-start">
        <button
          className="btn flex sm:hidden"
          onClick={() => window.my_modal_2.showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <ul
              tabIndex={0}
              onClick={closeModal}
              className="menu menu-lg dropdown-content mt-3 p-5 rounded-box flex items-center"
            >
              <li>
                <Link href="/recent">Recent</Link>
              </li>

              <li>
                <Link href="/trending">Trending</Link>
              </li>

              <li>
                <Link href="/popular">Popular</Link>
              </li>
            </ul>
          </form>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <div className="flex gap-1 items-center">
            <img src={Logo.src} className="h-10 w-10" />
            Nekoanime
          </div>
        </Link>
        <ul className="menu menu-horizontal tracking-wide hidden sm:flex flex-nowrap font-semibold">
          <li>
            <Link href="/recent">Recent</Link>
          </li>

          <li>
            <Link href="/trending">Trending</Link>
          </li>

          <li>
            <Link href="/popular">Popular</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link href="/search" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ThemeToggle />
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-5 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
