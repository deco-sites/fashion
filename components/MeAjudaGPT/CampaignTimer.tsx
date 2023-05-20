import { useState, useEffect } from 'preact/hooks';

export default function CampaignTimer () {
  const [data, setData] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  const refreshDate = () => {
    const dataAtual = new Date();
    const hour = dataAtual.getHours();
    const minutes = dataAtual.getMinutes();
    const seconds = dataAtual.getSeconds();

    setData({
      hour: hour,
      minutes: minutes,
      seconds: seconds
    });
  };

  useEffect(() => {
    const intervalId = setInterval(refreshDate, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return( 
    <div className="flex flex-col py-2 px-4 h-auto w-auto gap-4 text-black bg-green-200 items-center justify-center lg:flex-row font-sans lg:justify-center lg:items-center lg:py-4 lg:px-16 lg:h-76 lg:w-1440 lg:gap-16 text-white bg-accent-standard">
      <span className='font-normal text-sm-standard'>Time left for a campaign to end wth a <a>link</a></span>
      <div className='flex flex-row'>
      <div className="flex items-center text-center font-normal text-sm text-white leading-7 ">
        <div className='flex flex-row gap-6'>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="countdown items-center font-sans font-normal text-sm-standard">
              <span style={{"--value":`${data.hour}`}}></span>
            </span>
            <span className='font-normal font-sans text-xs items-center'>Hours</span>
          </div> 
          <div className='flex font-normal text-sm-standard items-center'>
          <span>:</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="countdown items-center font-sans font-normal text-sm-standard">
              <span style={{"--value":`${data.minutes}`}}></span>
            </span>
            <span className='font-normal font-sans text-xs items-center'>Minutes</span>
          </div> 
          <div className='flex font-normal text-sm-standard items-center'>
          <span>:</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="countdown items-center font-sans font-normal text-sm-standard">
              <span style={{"--value":`${data.seconds}`}}></span>
            </span>
            <span className='font-normal font-sans text-xs items-center'>Seconds</span>
          </div>
        </div>
      </div>
      <button className="btn rounded-none gap-2 h-10 w-[4.625rem] px-2 py-3 text-base bg-button-timer ml-6">
        <span className="top-2 left-3 items-center text-base font-normal normal-case">Button</span>
      </button>
      </div>
    </div>
  )

}