import React from 'react';

const Video = ({ contactScreen, handleContact }) => {
    return (
        <main
            className={`video ${contactScreen && 'show-contact'}`}
        >
            <iframe src="https://player.vimeo.com/video/370305638?api=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowautoplay>
            </iframe>
        </main>
    )
}

export default Video;
