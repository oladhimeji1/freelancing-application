import Image from 'next/image'
import konectarIcon from '../images/konecter-white.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

export default function Footer() {
    const d = new Date()
    const year = d.getFullYear()
    return (
        <div className='bg-orange-500 text-white w-[100vw] text-sm pt-10 pb-6 px-10 block md:grid grid-cols-3 items-start'>
           <Image src={konectarIcon} alt="" className='w-40 m-auto md:m-0'></Image>
           {/* Copyright &copy; Dhim {year} */}
            <div className='md:m-0 m-auto border-b md:border-0 my-2 w-32 '>
                <ul>
                    <li className='my-1 '><a className='decoration-line hover:decoration-gray-500' href="#">About</a></li>
                    <li className='my-1'><a href='#'>Products</a></li>
                    <li className='my-1'><a href='#'>Find Farmer</a></li>
                    <li className='my-1'><a href="#">Find Business</a></li>
                    <li className='my-1'><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className='md:m-0 m-auto my-2 w-32'>
                <p className='mb-4'>Contact Us</p>
                <p>12b, Capital Road, Lagos</p>
                <p>Phone +2348065125745</p>
                <div className='flex justify-between w-32 mt-4'>
                    <Image className='w-4' src={instagram} alt=""></Image>
                    <Image className='w-4' src={twitter} alt=""></Image>
                    <Image className='w-4' src={linkedin} alt=""></Image>
                </div>
            </div>
        </div>
    )
}
