import React from "react";

const Services = () => {
  return (
    <section class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-10 mx-auto">
        {/* <div class="mt-2">
          <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>

          <span class="inline-block w-[64rem] h-1 bg-blue-500 rounded-full ml-1"></span>

          <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div> */}
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mt-12">
          Get <span class="text-blue-500 py-1">Personalised</span> help <br />{" "}
          with{" "}
        </h1>

        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Irregular or Missed Periods
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Irregular or missed periods are common menstrual issues. They can
              result from factors like stress or hormonal changes. Consult a
              healthcare provider for evaluation and guidance.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              STIs
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              If you're noticing symptoms like painful urination, abnormal
              discharge, or bumps, consider a virtual consultation with us. Even
              if you don't have symptoms after exposure, a provider can
              prescribe antibiotics through a virtual visit, depending on recent
              intimacy
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Yeast Infections
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Vaginal yeast infections, caused by Candida overgrowth, are common
              and uncomfortable. Symptoms include itching, swelling, irritation,
              and thick discharge. Seek online gynecology consultation for
              treatment options.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Pre-menstrual Syndrome(PMS)
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Learn about symptoms, coping strategies, and effective management
              techniques for a more comfortable menstrual experience.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Birth Control
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Virtual gynecologists can help you choose the right birth control
              and prescribe medication if needed.
            </p>
          </div>

          <div class="space-y-3">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              General Sexual Health
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Explore general sexual health information: Learn about maintaining
              sexual wellness, common concerns, and preventive measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
