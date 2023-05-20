import Icon from "$store/components/ui/Icon.tsx"

export interface FAQProps {
    title: string
    description: string
    questions: Array<{
        question: string
        answer: string
    }>
    contact: {
        title: string
        description: string
        button: {
            text: string
            link: string
        }
    }
}

export default function FAQ(
    { 
        questions = [],
        title,
        description,
        contact
    }: FAQProps) {
    return (
        <div className="my-4 mx-auto w-full sm:max-w-screen-md p-4">
            <div className="flex flex-col items-center">
                <div className="mb-20">
                    <h2 className='text-5xl text-center leading-10'>{ title }</h2>
                    <p className='text-lg text-center mt-6'>{ description }</p>
                </div>
                { questions.map((questionItem, index: number) => {
                    const question = questionItem?.question ?? ""
                    const answer = questionItem?.answer ?? ""
                    return (
                    <details key={index} className="py-2 w-full border-t border-gray-300">
                        <summary className="list-outside py-3 w-full pr-4 ml-4">
                            <h2 className="flex justify-end text-lg">{ question }</h2>
                        </summary>
                        <h5 className="py-2 text-center">{ answer }</h5>
                    </details>
                )}) }
                <div className="mt-20 flex flex-col items-center">
                    <h2 className="text-4xl">{contact?.title}</h2>
                    <p className="text-lg text-center mt-6">{contact?.description}</p>
                    <a
                        href={contact?.button?.link}
                        className="text-center mt-6 py-2 px-3 text-white bg-slate-700"
                    >
                        { contact?.button?.text }
                    </a>
                </div>
            </div>
        </div>
    )
}

FAQ.defaultProps = {
    title: "FAQ",
    description: "LOREM",
    questions: [
        { question: 'testando', answer: '123' },
        { question: 'testando', answer: '123' },
    ],
    contact: {
        title: 'Still have a question?',
        description: 'Lorem ipsum dilor sit amet .......',
        button : {
            text: 'Contact',
            link: '#'
        }
    }
}