import React from 'react';

const Video = ({ contactScreen, handleContact }) => {
    return (
        <main
            onClick={!!contactScreen && handleContact}
            className={`video ${contactScreen && 'show-contact'}`}
        >
            <video autoplay="true" loop>
                <source src="https://firebasestorage.googleapis.com/v0/b/ludus-3ac39.appspot.com/o/ludus.mp4?alt=media&token=a0dc4f18-b0ad-4e43-8775-15097b61f8b8" type="video/webm" />
            </video>

        </main>
    )
}

export default Video;
