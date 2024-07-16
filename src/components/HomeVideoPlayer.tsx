import React from 'react';

const HomeVideoPlayer = () => {
  return (
    <div className="relative w-full h-[565px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          type="video/webm"
          src="https://res.cloudinary.com/dni4hpqo3/video/upload/af_8000,c_scale,h_385,q_auto,vc_auto/v1720997476/WashMe_Car_Wash_Video_-_Edited_emahsr.webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVideoPlayer;