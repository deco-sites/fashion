import Carousel from "../Carousel.tsx";
import ProductShelf from "../ProductShelf.tsx";

function CategoryList() {
  return (
    <section className="flex justify-evenly flex-col items-center w-full h-96 py-10 px-16 text-trueGray-800">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl mb-4">Category list</h1>
        <span className="text-lg">Description</span>
      </div>
      <div className="carousel flex h-80 border-trueGray-400">
        <Carousel />
      </div>
      <button className="btn btn-outline rounded-none w-80 h-9 flex normal-case text-base text-green-900
">
        View all
      </button>
    </section>
  );
}

export default CategoryList;
