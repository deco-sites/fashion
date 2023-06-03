export interface PropsCard {
    placeholder: string;
}

export interface Props {
    quantityHeader: number;
    priceRemains: number;
    value: number;
}

function ProductCard(props: PropsCard) {
    return (
        <div class="flex flex-col my-4 px-4">
            <div class="flex justify-center items-center h-36 w-auto border-dashed border-2 border-gray-400">
                <p class="text-xl font-albert-sans text-gray-900">
                    {props.placeholder}
                </p>
            </div>
        </div>
    );
}

function dev() {
    alert("Function in development");
}

export default function CartSideBar(
    { quantityHeader = 2, priceRemains = 361.55, value = 459.55 }: Props,
) {
    return (
        <div class="max-w-[400] sm:max-w-[360px] lg:max-w-[400]">
            <div class="flex flex-col justify-center h-full w-full]">
                {/* Header */}
                <div class="flex flex-row gap-2 p-4 items-center">
                    <img
                        src="https://i.imgur.com/jeyINVe.png"
                        alt="Minha imagem"
                        class="w-5 h-6"
                    />
                    <h2 class="font-albert-sans text-2xl text-gray-900">Your Cart</h2>
                    <button class="h-7 w-7 bg-blue-100 rounded-2xl">
                        <p class="font-albert-sans text-lg text-blue-500">
                            {quantityHeader}
                        </p>
                    </button>
                </div>

                <div class="w-full h-0.5 bg-gray-300" />
                {/* Header End */}

                {/* Info */}
                <div class="flex flex-col p-4">
                    <div class="flex flex-row gap-2 items-center">
                        <img
                            src="https://i.imgur.com/VoES1Cu.png"
                            alt="Minha imagem"
                            class="w-5 h-3.8"
                        />
                        <p class="text-sm text-green-800">
                            Faltam R$ {priceRemains.toFixed(2)} para ganhar frete gratis.
                        </p>
                    </div>

                    <div class="relative w-auto rounded-full h-1.5 mb-4 bg-teal-100 mt-3 ">
                        <div class="bg-green-800 h-1.5 rounded-full w-1/2" />
                        <div class="bg-white w-3.5 h-3.5 rounded-full border absolute right-[50%] -top-1/2" />
                    </div>
                </div>
            </div>
            {/* Info End */}

            {/* Products Cards */}
            <ProductCard placeholder="Product Card Placeholder" />
            <ProductCard placeholder="Product Card Placeholder" />
            {/* Products End */}

            {/* Info Buy */}
            <div class="w-full h-0.5 bg-gray-300" />

            <div class="flex flex-col gap-1.5 p-4">
                <div class="flex justify-between w-auto my-1">
                    <p class="text-sm font-albert-sans text-gray-900">Subtotal</p>
                    <p class="text-sm font-albert-sans text-gray-900">
                        {value.toFixed(2)}
                    </p>
                </div>

                <div class="flex justify-between w-auto my-1">
                    <p class="text-sm font-albert-sans text-gray-900">
                        Cupom de Desconto
                    </p>
                    <p class="text-sm font-albert-sans text-gray-900">Adicionar</p>
                </div>

                <div class="flex justify-between w-auto my-1">
                    <p class="text-sm font-albert-sans text-gray-900">
                        Codigo do Vendedor
                    </p>
                    <p class="text-sm font-albert-sans text-gray-900">Adicionar</p>
                </div>
            </div>

            {/* Price */}
            <div class="flex flex-col justify-center w-[100%] px-3">
                <div class="w-[100%] h-0.5 bg-gray-300" />

                <div class="flex justify-between w-auto my-3">
                    <p>Total</p>
                    <p>{value.toFixed(2)}</p>
                </div>

                <div class="flex justify-end">
                    <p class="text-sm font-albert-sans text-gray-500">
                        Taxas e fretes são calculados no checkout
                    </p>
                </div>
                {/* Price  End*/}

                {/* Buttoes Buy */}
                <button
                    class="flex justify-center items-center bg-gray-800 w-full h-7 my-2"
                    onClick={dev}
                >
                    <p class="text-base font-albert-sans text-white">Fechar Pedido</p>
                </button>

                <button
                    class="flex justify-center items-center border-2 border-gray-400 w-full h-7 my-2"
                    onClick={dev}
                >
                    <p class="text-base font-albert-sans text-gray-500">
                        Continuar comprando
                    </p>
                </button>
                {/* Buttoes Buy End */}

                {/* Info Buy End */}
            </div>
        </div>
    );
}
