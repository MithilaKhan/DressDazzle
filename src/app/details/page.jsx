import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import DetailsSlider from './DetailsSlider/DetailsSlider';
import YouMightLike from './YouMightLike/YouMightLike';

const details = () => {
    return (
        <div className='max-w-[1580px] mx-auto font-[Poppins] pb-20 mt-8'>
            <div className='grid grid-cols-2'>
                <div>
                    <ImageSlider />
                </div>
                <div>
                    <DetailsSlider/>
                   
                </div>
            </div>

            <div>
                <YouMightLike/>
            </div>
        </div>
    );
};
export default details ;