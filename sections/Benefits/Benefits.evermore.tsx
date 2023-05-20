export interface Props {
    title: string;
    subtitle: string;
}
export default function Benefits(
    {
        title,
        subtitle,
    }: Props,
) {
   <div class="bg-slate-50 justify-center">
       <h1 class="font-semibold text-xl">{title}</h1>
       <p class="font-light text-lg">{subtitle}</p>
       <div class="flex flex-row">
           <div class="flex flex-row">
               <image src="https://avatars.githubusercontent.com/u/117045675?s=280&v=4" />
               <div>
                   <h2 class="font-semibond text-base"></h2>
                   <p class="font-light text-sm"></p>
               </div>
           </div>
       </div>
       <div class="divider divider-horizontal"></div>
       <div class="flex flex-row">
           <div class="flex flex-row">
               <image src="https://avatars.githubusercontent.com/u/117045675?s=280&v=4" />
               <div>
                   <h2 class="font-semibond text-base"></h2>
                   <p class="font-light text-sm"></p>
               </div>
           </div>
       </div>
       <div class="divider divider-horizontal"></div>
       <div class="flex flex-row">
           <div class="flex flex-row">
               <image src="https://avatars.githubusercontent.com/u/117045675?s=280&v=4" />
               <div>
                   <h2 class="font-semibond text-base"></h2>
                   <p class="font-light text-sm"></p>
               </div>
           </div>
       </div>
   </div>
}