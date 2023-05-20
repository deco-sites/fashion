export interface Props {
    title: string;
    descripty: string;
   
   }
   
   
   export default function ImageGallery(
    { title="Image Gallery", descripty="Lorem ipsum dolor sit amet, consectetur adipiscing elit." }: Props,
   ) {
    return (
   
     <div class="container mx-auto py-8">
      <div class="text-center mb-4">
       <h1 class="text-4xl font-bold">{title}</h1>
       <p class="text-lg">{descripty}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
   
       <div class="flex justify-center items-center">
        <img src="/vector.png" alt="Imagem 1" class="w-full md:w-auto"></img>
       </div>
   
       <div class="flex justify-center items-center">
        <img src="/vector.png" alt="Imagem 2" class="w-full md:w-auto"></img>
       </div>
   
       <div class="flex justify-center items-center">
        <img src="/vector.png" alt="Imagem 3" class="w-full md:w-auto"></img>
       </div>
   
       <div class="flex justify-center items-center">
        <img src="/vector.png" alt="Imagem 4" class="w-full md:w-auto"></img>
       </div>
   
      </div>
     </div>
   
    );
   }