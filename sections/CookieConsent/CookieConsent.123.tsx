import Button from "$store/components/ui/Button.tsx";

export interface Props {
  title: string;
  paragraph: string;
  textToLink: string;
  url: string; 
}

export default function LatestPosts({ title, paragraph, url, textToLink }: Props) {
  return (
    
    <div class="container">
       

      <div class="firstLine">

       <h1 class="font-bold">{title}</h1>
       
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
       </button>     
             
     </div>
   
     <div class="secondLine">

        <span class="paragraph">{paragraph}</span>

        <link src={url}>{textToLink}</link>
         
         <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Aceitar
         </button>

     </div>

    </div>
  );
}