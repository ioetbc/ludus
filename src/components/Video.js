import React from 'react';

const Video = ({ contactScreen, handleContact }) => {
    return (
        <main
            onClick={!!contactScreen && handleContact}
            className={`video ${contactScreen && 'show-contact'}`}
        >
            <iframe src="https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&byline=0&title=0"
                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
        </main>
    )
}

export default Video;
