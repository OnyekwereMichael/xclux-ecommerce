import React, {useState} from 'react'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query';
import { IoIosArrowDropright } from 'react-icons/io';
import assets from '../assets/asset';

const HeroBanner = () => {
    const [activeLink, setActiveLink] = useState("All"); 

    const handleClick = (category) => {
      setActiveLink(category); // Set the clicked link as active
    };
    const fetchBannerDetails = async () => {
        const query = `  *[_type == "banner"] | order(_createdAt desc)[0]{
        _id,
        smallText,
        buttonText,
        "imageUrl": image.asset->url,
      }`;
        const data = await client.fetch(query);
        return data;
    };

    const { data: banner, isLoading, isError, error } = useQuery({
        queryKey: ['banner'],
        queryFn: fetchBannerDetails,
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data {error}</div>;
    }

    return (
        <div className="relative px-10 max-sm:px-0">
            <div className="relative max-h-[3840px] h-[calc(100%-58px)] max-sm:max-h-[1000px] max-sm:h-[calc(100%-48px)]">
                <img src={banner.imageUrl} alt="" className="object-cover object-left-top h-[90%] w-[100%] max-xl:hidden" />
                <img src="https://shorturl.at/zBGeY" alt="" className='hidden max-md:flex'/>
                <div className="absolute inset-0 flex flex-col  items-center justify-end pb-[168px] text-center text-white ">
                    <p className="text-[28px] uppercase font-medium   mb-2">{banner.smallText}</p>
                    <div className="flex items-center gap-2 font-extralight text-[16px] px-4 py-2 text-white border border-white w-[fit-content] h-[fit-content] hover:border-[#A3A1A1] rounded-[24px]">
                   <img src={assets.arrow} alt="" width={30}/>
                    <button type="submit" className=" uppercase font-extralight text-[18px]">
                        {banner.buttonText}
                    </button>
                    </div>
                  
                </div>
            </div>

            <div className='flex items-center gap-5 uppercase text-[20px] font-extralight mt-5 max-sm:gap-2 max-sm:mb-8 max-sm:text-[20px]'>
      {['All', 'Tops', 'Bottom'].map((category) => (
        <p
          key={category}
          className={`font-semibold whitespace-nowrap p-1 cursor-pointer max-sm:mx-2 ${
            activeLink === category ? 'border-b-4 border-black max-sm:mx-2' : 'border-none'
          }`}
          onClick={() => handleClick(category)}
        >
          <a href="#">{category}</a>
        </p>
      ))}
    </div>

        </div>

    )
}

export default HeroBanner
