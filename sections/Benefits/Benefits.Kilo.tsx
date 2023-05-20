export interface Props {
  benefits?: Array<{
    srcImg: string;
    benefitsTitle: string;
    benefitsDesc: string;
  }>;
}

export default function Benefits({ benefits }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-3xl w-fit text-[#292929]">
        Benefits Title
      </div>
      <div className="text-lg w-fit my-4 text-neutral-500">
        Description of benefits
      </div>
      <div className="flex flex-col gap-2 w-[100%] md:flex-row">
        {benefits === undefined
          ? <div>adiciona algo no library</div>
          : (benefits.map((benefit, idx) => {
            if (idx !== benefits.length - 1) {
              return (
                <>
                  <div className="flex flex-row items-center gap-4 mx-auto w-[80%]">
                    <div>
                      <img src={benefit.srcImg} alt="benefit img" />
                    </div>
                    <div className="content">
                      <p className="text-[#292929]">{benefit.benefitsTitle}</p>
                      <span className="text-neutral-500">
                        {benefit.benefitsDesc}
                      </span>
                    </div>
                  </div>
                  <div className="divider md:divider-horizontal"></div>
                </>
              );
            } else {return (
                <div className="flex flex-row items-center gap-4 mx-auto w-[80%]">
                  <div>
                    <img src={benefit.srcImg} alt="benefit img" />
                  </div>
                  <div className="content">
                    <p className="text-[#292929]">{benefit.benefitsTitle}</p>
                    <span className="text-neutral-500">
                      {benefit.benefitsDesc}
                    </span>
                  </div>
                </div>
              );}
          }))}

        {/*  */}
      </div>
    </div>
  );
}
