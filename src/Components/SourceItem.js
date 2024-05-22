import PropTypes from "prop-types";
import React from "react";

export const SourceItem = ({name='Source Name', desc='Description.', url="", image='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}) => {
  return (
    <button
        alt={name}
        className='flex w-full items center gap-4 px-4 py-3 relative bg-grey rounded-2xl overflow-hidden transition-all hover:bg-black hover:ring-2 ring-0 ring-white'
        onClick={() => url ? window.open(url, '_blank') : console.log("URL wasn't provided")}
    >
        <img alt={name} className='relative w-[80px] h-[80px] object-cover rounded-2xl bg-white bg-opacity-20' src={image}/>
        <div className="flex flex-col items-start relative flex-1 grow">
            <p className="relative self-stretch w-full font-sans font-semibold text-left text-white text-xl tracking-[0]">
                {name}
            </p>
            <p className="relative self-stretch w-full font-sans font-medium text-left text-white text-xs tracking-[0] leading-[normal]">
                {desc}
            </p>
        </div>
    </button>
  );
};

SourceItem.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.any,
};
