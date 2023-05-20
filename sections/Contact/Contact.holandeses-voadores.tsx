export interface Props {
    title: string;
    text: string;
    checkboxMessage: string;
    checkboxLink: string;
    checkboxLabelLink: string;
  }
  
  export default function Contact({title, text, checkboxMessage, checkboxLink, checkboxLabelLink}: Props) {

    return (
      <div className="relative w-screen h-screen py-40 px-0">
        <dialog open className="bg-white flex justify-center items-center">
            <form method="dialog" className="absolute top-0 right-0">
                    <button>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-AkxKJv3zDMiZzcZtdfIpbTWM5Tcy__6Nfcz9edb_rtqCbjsX7Uhprz8pmEo3LUqwTQ&usqp=CAU" width="40px" height="40px"/>
                    </button>
            </form>
            
            <form method="POST" className="w-4/6 flex flex-col gap-6 ">
                <h1 className="text-5xl font-sans text-center ">{title}</h1>
                <h2 className="text-lg font-sans text-center ">{text}</h2>
                
                <div className="flex flex-row flex-wrap justify-between gap-6">
                    <div className="form-control w-64">
                        <label className="label">
                            <span className="label-text">First name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="outline-none h-10 px-3 py-2 border-gray-300 border  w-full max-w-xs" />
                    </div>

                    <div className="form-control w-64 ">
                        <label className="label">
                            <span className="label-text">Last name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="outline-none h-10 px-3 py-2 border-gray-300 border  w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-between gap-6">
                    <div className="form-control w-64">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="outline-none h-10 px-3 py-2 border-gray-300 border  w-full max-w-xs" />
                    </div>

                    <div className="form-control w-64">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type="phone" placeholder="Type here" className="outline-none h-10 px-3 py-2 border-gray-300 border  w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex flex-row flex-wrap gap-6">

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <textarea class="textarea border-gray-300 border rounded-none outline-none h-24" placeholder="Message"></textarea>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer flex justify-center gap-4">
                        <input type="checkbox" className="checkbox checkbox-sm " />
                        <span className="label-text">{checkboxMessage} <a href={checkboxLink} className="link">{checkboxLabelLink}</a></span> 
                    </label>
                </div>

                <button type="submit" className="btn w-full rounded-none">
                    Submit
                </button>
            </form>
            
        </dialog>
      </div>
    );
  }