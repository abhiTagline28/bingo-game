import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountDown = () => {
    return (
        <div style={{ marginTop: '15px', marginLeft: '850px' }} className="text-center">
            <CountdownCircleTimer
                /* onComplete={() => {
                    // do your stuff here
                    return [true, 1000] // repeat animation in 1.5 seconds
                }} */
                isPlaying
                duration={5}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>

        </div>
    )
}

export default CountDown


