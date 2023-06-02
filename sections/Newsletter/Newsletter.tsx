import Header from "$store/components/ui/SectionHeader.tsx";

export interface Form {
    placeholder?: string;
    buttonText?: string;
    /** @format textarea */
    helpText?: string;
}

export interface Props {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: Form;
    layout?: {
        headerFontSize?: "Large" | "Normal",
        content?: {
            border?: boolean;
            alignment?: "Center" | "Left" | "Side to side";
            bgColor?: "Normal" | "Reverse"
        }
    }
};
  
export default function Newsletter({ title, description, form, layout }: Props,) {
    const headerLayout = (
        <Header
            title={title}
            description={description}
            alignment={!layout?.content?.alignment || layout?.content?.alignment === 'Center' ? "center" : "left"}
            colorReverse={layout?.content?.bgColor === 'Reverse'}
            fontSize={layout?.headerFontSize}
        />
    )
    
    const formLayout = (
        <form action="/" class="flex flex-col gap-4">
            <div class="flex flex-col lg:flex-row gap-3">
                <input class="input input-bordered lg:w-[320px]" type="text" placeholder={form.placeholder} />
                <button class={`btn ${layout?.content?.bgColor === 'Reverse' ? "btn-accent" : ""}`} type="submit">{form.buttonText}</button>
            </div>
            <p class="text-sm" dangerouslySetInnerHTML={{ __html: form.helpText}}></p>
        </form>
    )

    const bgLayout = layout?.content?.bgColor === 'Reverse' ? "bg-secondary text-secondary-content" : ""

    const borderLayout = `
        ${layout?.content?.border ? "border-[1rem] lg:border-[4rem]" : ""}
        ${layout?.content?.border && layout?.content?.bgColor !== 'Reverse' ? "border-secondary" : ""}
        ${layout?.content?.border && layout?.content?.bgColor === 'Reverse' ? "border-secondary-content" : ""}
    `

    return (
        <>
            {
                (!layout?.content?.alignment || layout?.content?.alignment === "Center") && (
                    <div class={`flex flex-col p-4 gap-6 lg:p-16 lg:gap-12 ${bgLayout} ${borderLayout}`}>
                        {headerLayout}
                        <div class="flex justify-center">
                            {formLayout}
                        </div>
                    </div>
                )
            }
            {
                layout?.content?.alignment === "Left" && (
                    <div class={`flex flex-col p-4 gap-6 lg:p-16 lg:gap-12 ${bgLayout} ${borderLayout}`}>
                        {headerLayout}
                        <div class="flex justify-start">
                            {formLayout}
                        </div>
                    </div>
                )
            }
            {
                layout?.content?.alignment === "Side to side" && (
                    <div class={`flex flex-col lg:flex-row p-4 gap-6 lg:p-16 lg:gap-12 ${bgLayout} ${borderLayout}`}>
                        <div class="lg:w-1/2">
                            {headerLayout}
                        </div>
                        <div class="flex justify-end lg:w-1/2">
                            {formLayout}
                        </div>
                    </div>
                )
            }
        </>
    )
}

Newsletter.defaultProps = {
    title: "",
    description: "",
    form: {
        placeholder: "Digite seu email",
        buttonText: "Inscrever",
        helpText: 'Ao se inscrever, você concorda com nossa <a class="link" href="/politica-de-privacidade">Política de privacidade</a>.',
    },
    layout: {
        titleFontSize: 'Large',
        content : {
            border: false,
            alignment: 'Center'
        }
    }
}