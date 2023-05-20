export interface Props {
  user: Array<{
    userName: string;
    position: string;
    comment: string;
  }>;
}

export default function Testimonails({ user }: Props) {
  return (
    <div class="container sm:p-10 text-center py-10 px-4">
      <h2 class="text-6xl pb-6">Testimonials</h2>
      <p class="pb-10 text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-10 gap-x-10">
        {user.map(({ userName, position, comment }) => (
          <article class="flex flex-col items-center">
            <img
              src="/deco.png"
              width={92}
              height={32}
            />
            <p class="text-2xl py-9">
              {comment}
            </p>
            <img
              class="rounded-[40px]"
              src="/user-image-not-found.png"
              height={60}
              width={60}
            />
            <h3 class="text-lg pt-3">
              {userName}
            </h3>
            <h4 class="text-lg">
              {position}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
}
