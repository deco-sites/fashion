import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Question {
    question: string
    /** @format textarea */
    answer: string
}

export interface Contact {
    title?: string
    /** @format textarea */
    description?: string
    button?: {
        text: string
        link: string
    }
}

export interface FAQProps {
    title?: string
    description?: string
    questions?: Array<Question>
    contact?: Contact
    layout?: {
        variation?: "Compact" | "Full" | "Side to side";
        headerAlignment?: "center" | "left";
    };
}

export default function FAQ(
    { 
        questions = [],
        title,
        description,
        contact,
        layout,
    }: FAQProps) {
    
    function listOfQuestions(question: string, answer: string, index: number) {
        return (
            <details key={index} className="group w-full border-t border-gray-300 [open]:rotate-caret">
                <summary class="flex items-start gap-2 py-5 list-outside cursor-pointer group-hover:text-primary">
                    <h3 className="flex-auto flex text-lg">{ question }</h3>
                    <div class="flex-none mt-1">
                        <Icon id="ChevronDown" size={20} class="duration-100" />
                    </div>
                </summary>
                <p className="pb-5">{ answer }</p>
            </details>
        )
    }

    function contactBlock(title: string, description: string, buttonLink: string, buttonText: string) {
        return (
            <>
                {
                    (title || description) && (
                        <div class="flex flex-col gap-2">
                            { title && <h2 className="text-xl lg:text-3xl">{title}</h2> }
                            { description && <p className="text-lg lg:text-xl">{description}</p> }
                        </div>
                    )
                }
                { buttonText && buttonLink && <a href={buttonLink} className="btn">{ buttonText }</a> }
                
            </>
        )
    }

    return (
        <>
            {
                (!layout?.variation || layout?.variation === "Compact") && (
                    <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-60">
                        <div class="flex flex-col gap-8 lg:gap-10">
                            <Header title={title || ""} description={description || ""} alignment={layout?.headerAlignment || "center"} />
                            <div className="flex flex-col items-center">
                                { questions.map((questionItem, index: number) => {
                                    return( listOfQuestions(questionItem?.question ?? "", questionItem?.answer ?? "", index) )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center text-center">
                            { contactBlock(contact?.title || "", contact?.description || "", contact?.button?.link || "", contact?.button?.text || "") } 
                        </div>
                    </div>
                )
            }
            {
                layout?.variation === "Full" && (
                    <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-0">
                        <div class="flex flex-col gap-8 lg:gap-10">
                            <Header title={title || ""} description={description || ""} alignment={layout?.headerAlignment || "center"} />
                            <div className="flex flex-col items-center">
                                { questions.map((questionItem, index: number) => {
                                    return( listOfQuestions(questionItem?.question ?? "", questionItem?.answer ?? "", index) )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-start">
                            { contactBlock(contact?.title || "", contact?.description || "", contact?.button?.link || "", contact?.button?.text || "") } 
                        </div>
                    </div>
                )
            }
            {
                layout?.variation === "Side to side" && (
                    <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:flex-row lg:gap-20 lg:py-10 lg:px-0">
                        <div class="lg:w-1/2 flex flex-col gap-8 lg:gap-10">
                            <Header title={title || ""} description={description || ""} alignment={layout?.headerAlignment || "center"} />
                            <div className="lg:hidden flex flex-col items-center">
                                { questions.map((questionItem, index: number) => {
                                    return( listOfQuestions(questionItem?.question ?? "", questionItem?.answer ?? "", index) )
                                })}
                            </div>
                            <div className="hidden lg:flex flex-col gap-6 items-start">
                                { contactBlock(contact?.title || "", contact?.description || "", contact?.button?.link || "", contact?.button?.text || "") } 
                            </div>
                        </div>
                        <div className="lg:hidden flex flex-col gap-6 items-start">
                            { contactBlock(contact?.title || "", contact?.description || "", contact?.button?.link || "", contact?.button?.text || "") } 
                        </div>
                        <div className="hidden lg:flex lg:w-1/2 flex-col items-center">
                            { questions.map((questionItem, index: number) => {
                                return( listOfQuestions(questionItem?.question ?? "", questionItem?.answer ?? "", index) )
                            })}
                        </div>
                    </div>
                )
            }
        </>
    )
}

FAQ.defaultProps = {
    title: "",
    description: "",
    questions: [
        { question: 'Como faço para acompanhar o meu pedido?', answer: 'Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.' },
        { question: 'Qual é a política de devolução?', answer: 'Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.' },
    ],
    contact: {
        title: '',
        description: '',
        button : {
            text: '',
            link: ''
        }
    }
}