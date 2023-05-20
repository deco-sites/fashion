import { useState, useEffect } from 'preact/hooks';

export interface Props {
    descriptionWithOptionalAnchors: string
    timeLeft: {
        hours: number
        minutes: number
        seconds: number
      }
    buttonText: string
    buttonLink: string
  }

  function stringToHTML(stringText: string) {
    return (
      <p dangerouslySetInnerHTML={{ __html: stringText }} />
    );
  }



function CampaignTimer({ descriptionWithOptionalAnchors, timeLeft, buttonText, buttonLink }: Props) {
    const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        // Time reached zero, do something here
        console.log('Time is up!');
        // You can perform any action or state update when the time reaches zero

        // Stop the timer
        clearTimeout(timer);
      } else {
        // Decrement the time by 1 second
        const updatedTime = {
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1,
        };

        // Adjust minutes and hours when seconds reach zero
        if (updatedTime.seconds < 0) {
          updatedTime.seconds = 59;
          updatedTime.minutes -= 1;
        }
        if (updatedTime.minutes < 0) {
          updatedTime.minutes = 59;
          updatedTime.hours -= 1;
        }

        // Update the state with the updated time
        setTime(updatedTime);
      }
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup the timer when the component unmounts or when timeLeft changes
    return () => clearTimeout(timer);
  }, [time]);

  const formattedTime = {
    hours: time.hours.toString().padStart(2, '0'),
    minutes: time.minutes.toString().padStart(2, '0'),
    seconds: time.seconds.toString().padStart(2, '0'),
  };

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

    return (
        <div class="col-span-1 flex flex-col h-auto w-full  bg-[#E37A69] text-white items-center p-4">
            <div class="row w-full text-center bottom-2 ">
                <h1 class="text-sm">{stringToHTML(descriptionWithOptionalAnchors)}</h1>
            </div>
            <div class="row mt-4">
                <div class="columns-2 gap-4 flex">
                <div class="col1 flex flex-row columns-5 space-x-4 text-center align-middle  ">
                    <div class="hora h-full">
                        <div class="numero">{formattedTime.hours}</div>
                        <div class="numeroText">Horas</div>
                    </div>
                    <div class='flex font-normal text-sm-standard items-center'>
                        <span>:</span>
                    </div>
                    <div class="hora">
                        <div class="numero">{formattedTime.minutes}</div>
                        <div class="numeroText">Min</div>
                    </div>
                                <div class='flex font-normal text-sm-standard items-center'>
                        <span>:</span>
                    </div>
                    <div class="hora">
                        <div class="numero">{formattedTime.seconds}</div>
                        <div class="numeroText">Segundos</div>
                    </div>
                </div>
                <div class="col">
                    <button onClick={() => handleLinkClick(buttonLink)}class="bg-[#273746] p-2 right-0 h-full">{buttonText}</button> 
                </div>
                </div>
            </div>
        </div>
    )
}

CampaignTimer.defaultProps = {
    descriptionWithOptionalAnchors: 'Time left for a campaign to end with a <a href="https://www.example.com">link</a>',
    timeLeft: { hours: 0, minutes: 0, seconds: 30 },
    buttonText: 'Button',
    buttonLink: 'https://tailwindcss.com/docs'
}

export default CampaignTimer;