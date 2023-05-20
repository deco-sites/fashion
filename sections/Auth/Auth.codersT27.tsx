export default function Auth() {
  return (
    <div class="flex justify-center items-center h-screen p-4">
      <div class="flex flex-col items-center gap-4 max-w-md">
        <h1 class="text-4xl mb-4">Sign up</h1>
        <div class="w-3/4 lg:w-full">
          <h2 class="w-full text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <form class="flex flex-col gap-2 justify-left w-full" action="">
          <p>Name</p>
          <input
            type="text"
            class="input rounded-none border border-[#AAAAAA] w-full"
          >
          </input>
          <p>Email</p>
          <input type="text" class="input rounded-none border border-[#AAAAAA]">
          </input>
          <p>Password</p>
          <input
            type="text"
            class="input rounded-none border border-[#AAAAAA] mb-5"
          >
          </input>
          <button
            class="btn rounded-none bg-[#273746] text-[#FFFFFF] p-2 hover:bg-[#293e52]"
            type="submit"
          >
            Sign up
          </button>
          <button class="btn rounded-none bg-transparent text-[#546F4A] hover:bg-[#273746] hover:text-gray-50">
            Sign up with Google
          </button>
          <p class="text-[#787878] text-center mt-2">
            Already havean account?{""} <span class="underline">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
}
