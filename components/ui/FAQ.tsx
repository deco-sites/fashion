import Icon from "$store/components/ui/Icon.tsx"
import { useState } from "preact/hooks";

export interface FAQProps {
    questions: Array<{
        question: string
        answer: string
    }>
}

export default function FAQ({ questions = [] }: FAQProps) {
    const [height, setHeight] = useState(0)
    console.log(height)
    return (
        <div className="my-4 mx-auto w-full sm:max-w-screen-md">
            <div className="flex flex-col">
                FAQ
                { questions.map((questionItem, index: number) => {
                    const question = questionItem?.question ?? ""
                    const answer = questionItem?.answer ?? ""
                    return (
                    <button key={index} className="flex flex-col h-auto" onClick={() => setHeight(height ? 0 : 1)}>
                        <div className="flex justify-between">
                            <h2>{ question }</h2>
                            <Icon id="ChevronDown" width={21} height={10} />
                        </div>
                        <div className={ `${height ? 'block' : 'hidden'} transition-all delay-1000` }>
                            <h5>{ answer }</h5>
                        </div>
                    </button>
                )}) }
            </div>
        </div>
    )
}
