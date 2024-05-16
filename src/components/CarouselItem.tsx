// CarouselItem.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const CarouselItem = ({ image, isSelected, onClick }:any) => {
  return (
    <div
      className={`${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <Image width={50} height={50} className='h-[50px] w-[50px]' src={image.url} alt={image.alt} />
      <p>{image.caption}</p>
    </div>
  );
};

export default CarouselItem;
