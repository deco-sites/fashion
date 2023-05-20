export default function CookieConsent(){
    return(
        <div class="w-full h-full flex justify-center content-end">
            <div class="w-4/5 flex justify-between flex-col shadow-md p-6 absolute bottom-4">
                <div>
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl">Cookie policy</h2>
                        <button>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#292929"/>
                            </svg>
                        </button>
                    </div>
                    <p class="my-2 text-base">We use third-party cookies order to personalize your experience.</p>
                </div>
                <div class="flex justify-between flex-col sm:flex-row">
                    <a href="#" class="text-sm text-[#6d8b61] flex items-center underline">Read our cookie policy
                        <svg class="ml-1" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910742 0.410704C1.23618 0.0852667 1.76382 0.0852667 2.08925 0.410704L7.08925 5.4107C7.41469 5.73614 7.41469 6.26378 7.08925 6.58922L2.08925 11.5892C1.76382 11.9147 1.23618 11.9147 0.910742 11.5892C0.585305 11.2638 0.585305 10.7361 0.910742 10.4107L5.32149 5.99996L0.910742 1.58922C0.585305 1.26378 0.585305 0.736141 0.910742 0.410704Z" fill="#6D8B61"/>
                        </svg>
                    </a>
                    <button class="btn rounded-none text-white normal-case mt-2 sm:mt-0 p">Allow</button>
                </div>
            </div>
        </div>
    )
}
