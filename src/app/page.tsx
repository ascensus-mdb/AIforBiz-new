"use client";
import { LampDemo } from "./components/sections/hero";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Button } from "./components/ui/moving-border";
import { TERipple } from "tw-elements-react";

export default function Home() {
  return (
    <main>
      <LampDemo />

      <div
        id="section-how-it-works"
        className="h-[80rem] lg:h-[68rem] w-full dark:bg-slate-1000 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.1] relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-1000 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto md:px-6">
          <section className="mb-20">
            <h2 className="mb-16 text-center text-3xl font-bold text-neutral-600 dark:text-neutral-200">
              How it works
            </h2>

            <div className="flex flex-wrap items-center">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12  hidden lg:block">
                <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img src="/photos/176.jpg" className="w-full h-[600px]" />

                  <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,0%,0.6)] bg-fixed antialiased">
                    <BackgroundBeams />
                    <div className="flex h-full items-center justify-center">
                      <div className="px-6 py-12 text-center text-white md:px-12">
                        <h3 className="relative z-10 text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                          The future is
                          <u className="text-[hsl(210,12%,80%)] ml-1">now</u>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[#1a335b] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                      You contact us{" "}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Contact us to kickstart your AI journey and unlock the
                      potential of advanced technology for your business.
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[#1a335b] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                      We analyze your business
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Our experts analyze your unique business needs to tailor
                      an AI solution that fits seamlessly into your operations.
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[#1a335b] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                      We provide proof of concept
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      We provide you with a proof of concept, demonstrating the
                      potential of AI in your business and paving the way for
                      future success.
                    </p>
                  </div>
                </div>

                <div className="flex mb-12 ">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[#1a335b] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                      We deliver first AI-driven solution for you
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      We deliver your first AI-driven solution, revolutionizing
                      your processes and driving efficiency and growth.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[#1a335b] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                      Together we evaluate, iterate and scale AI in your company
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Together, we evaluate, iterate, and scale AI in your
                      company, leveraging our expertise to drive continuous
                      improvement and achieve optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center pb-32 lg:pb-0">
            <TERipple rippleColor="light">
              <a
                target="_blank"
                href="https://cognivis.ai/book-a-call/"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none  focus:ring-offset-slate-50"
              >
                Book a call
              </a>
            </TERipple>
          </div>
        </div>
      </div>
    </main>
  );
}
