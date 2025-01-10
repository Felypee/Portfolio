import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './MagicButton';

const Footer = () => {
    return (
        <footer
            className=" w-full pt-8 pb-10"
            id="contact"
            style={{
                marginTop: 200,
            }}
        >
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">Imagina algo increíble</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Creémos eso juntos</p>
                <a href="mailto:felipearango9701@gmail.com">
                    <MagicButton title="Envíame un correo" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Felipe Arango</p>
            </div>
        </footer>
    );
};

export default Footer;
