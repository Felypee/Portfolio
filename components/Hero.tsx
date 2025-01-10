import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
    return (
        <section className="relative h-[100vh] w-full  overflow-hidden">
            <div>
                <Spotlight className="-left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] top-10 " fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-screen" fill="blue" />
            </div>

            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 z-[0] flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                    position: 'absolute',
                }}
            >
                <img
                    src="/profilePicture.jpeg"
                    alt="Profile picture"
                    style={{
                        height: 150,
                        width: 150,
                        borderRadius: 30,
                    }}
                />
                <h1
                    style={{
                        color: 'white',
                        fontSize: 50,
                        fontWeight: '800',
                    }}
                >
                    Mobile developer
                </h1>

                <p
                    style={{
                        color: 'white',
                        fontSize: 30,
                        fontWeight: '600',
                    }}
                >
                    FLUTTER | REACT NATIVE | AWS | NODEJS
                </p>

                <p
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '400',
                    }}
                >
                    Felipe Arango
                </p>
            </div>
        </section>
    );
};

export default Hero;
