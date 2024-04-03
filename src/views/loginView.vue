<template>

<nav class="mb-20 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../assets/icon-association-youcare.png" class="h-8" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">youcare</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div class="wrapper">
    <div class="mt-20 mx-auto flex w-full max-w-sm flex-col">
      <div class="mx-auto flex lg:hidden">
        <NuxtLogo />
      </div>
      <h1 class="mt-20 text-2xl font-semibold text-gray-700 lg:mt-0">
        Welcome back
      </h1>
      <p class="mt-2 text-sm text-gray-400">Please sign in below</p>
      <p class="mt-5 text-sm font-semibold text-gray-500">Email</p>
      <input class="mt-1 rounded border py-1 px-3 text-sm shadow" />
      <p class="mt-5 text-sm font-semibold text-gray-500">Password</p>
      <input
        class="mt-1 rounded border py-1 px-3 text-sm text-sm shadow"
        type="password"
      />
      <div class="mt-5 flex items-center">
        <input class="mr-2 align-middle text-sm text-sm" type="checkbox" />
        <p class="text-sm font-semibold text-gray-500">Remember me</p>
        <span class="flex-1" />
        <a
          href="#"
          class="text-sm font-semibold text-indigo-400 hover:text-indigo-500"
          >Forgot password?</a
        >
      </div>
      <button
        class="mt-5 rounded border bg-indigo-400 py-2 px-5 text-sm text-sm font-semibold text-gray-50 shadow hover:bg-indigo-500"
      >
        Sign in
      </button>
      <button
        class="mt-3 rounded border bg-white py-2 px-5 shadow hover:bg-gray-100"
      >
        <div class="flex items-center justify-center space-x-2">
          <GitHubLogo />
          <span class="text-sm font-semibold text-gray-700"
            >Sign in with GitHub</span
          >
        </div>
      </button>
      <div class="mt-8 flex items-center space-x-1">
        <p class="text-sm font-semibold text-gray-500">Don't have an account?</p>
        <a
          href="#"
          class="text-sm font-semibold text-indigo-400 hover:text-indigo-500"
          >Sign up</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
}
</style>






