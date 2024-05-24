"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

type YearPickerProps = {
  skipLength: number;
  focusElement?: number;
  position?: ScrollLogicalPosition;
  spacing?: number;
};

export function YearPicker({
  children,
  skipLength,
  focusElement = 0,
  position = "start",
  spacing = 0,
}: PropsWithChildren<YearPickerProps>) {
  const ref = useRef<HTMLDivElement>(null!);
  const selectedRef = useRef<HTMLLIElement>(null!);

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  useEffect(() => {
    selectedRef.current &&
      selectedRef.current.scrollIntoView &&
      selectedRef.current.scrollIntoView({
        inline: position,
        block: "nearest",
      });
  }, [position]);

  useEffect(() => {
    const e = ref.current;

    const f = () => {
      setLeft(Math.abs(e.scrollLeft) < 1);
      setRight(Math.abs(e.scrollLeft - (e.scrollWidth - e.clientWidth)) < 1);
    };

    e.addEventListener("scroll", f);

    f();

    return () => {
      e.removeEventListener("scroll", f);
    };
  }, []);

  return (
    <section className="relative bg-white pt-3 pb-4 px-0">
      <div className="p-0 m-0 border-0">
        <div className="relative">
          <div
            ref={ref}
            className="overflow-x-scroll scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            <ul className="list-none flex">
              {Children.map(children, (child, i) => (
                <div className="Row">
                  <li
                    key={i}
                    ref={i === focusElement ? selectedRef : null}
                    className="mr-4"
                  >
                    {child}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          {!left && (
            <>
              <div className="bg-gradient-to-r from-white w-24 absolute left-0 top-0 right-auto h-full pointer-events-none"></div>
              <div className="absolute right-auto left-0 bottom-1/2 translate-y-1/2">
                <button
                  onClick={() => {
                    const e = ref.current;

                    e.scrollLeft -= skipLength;
                  }}
                >
                  <span>
                    <svg
                      viewBox="0 0 32 32"
                      width="1em"
                      height="1em"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M10.4 14.3 26.5 31h-6.4L5.5 16 20.1 1h6.4L10.4 17.7z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </>
          )}
          {!right && (
            <>
              <div className="bg-gradient-to-l from-white w-24 absolute right-0 top-0 left-auto h-full pointer-events-none"></div>
              <div className="absolute right-0 left-auto bottom-1/2 translate-y-1/2">
                <button
                  onClick={() => {
                    const e = ref.current;

                    e.scrollLeft += skipLength;
                  }}
                >
                  <span>
                    <svg
                      viewBox="0 0 32 32"
                      width="1em"
                      height="1em"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
