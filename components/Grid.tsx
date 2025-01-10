'use client';
import { fegoItems, gemesItems, gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { FaLocationArrow } from 'react-icons/fa6';
import Link from '@/node_modules/next/link';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Grid = () => {
    return (
        <section className="flex flex-col items-start max-h-[100vh] w-full" id="about">
            <h1 className="heading">
                Main <span className="text-purple">projects</span>
            </h1>
            <div
                style={{
                    marginTop: 180,
                }}
            ></div>
            <div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 15,
                    }}
                >
                    <img src="/ecloud-logo.webp" alt="Ecloud4 Logo" height={150} width={150} />
                    <div
                        style={{
                            gap: 4,
                        }}
                    >
                        <h1
                            style={{
                                color: 'white',
                                fontWeight: '800',
                                fontSize: 25,
                            }}
                        >
                            eCloud4
                        </h1>

                        <p
                            style={{
                                color: 'white',
                                fontWeight: '200',
                            }}
                        >
                            Es una aplicación donde principalmente puedes enviar y recibir dinero desde y hacia el
                            extranjero.
                        </p>

                        <a
                            href="https://apps.apple.com/us/app/ecloud4/id6447580403?platform=iphone"
                            style={{ textDecoration: 'underline', color: '#37AFE1' }}
                        >
                            <p>Ir a la App Store</p>
                        </a>
                    </div>
                </div>
            </div>
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="overflow-visible  py-5"
            >
                <CarouselContent className="overflow-visible ">
                    {gridItems.map((item, i) => (
                        <CarouselItem key={i} className="pl-1 basis-1/5  ">
                            <img
                                src={item.img}
                                className=" h-auto hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                                alt={`Carousel Item ${i + 1}`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* //// ///// ////// */}
            {/* //// ///// ////// */}

            {/* //// ///// ////// */}

            {/* //// ///// ////// */}

            <div
                style={{
                    marginTop: 180,
                }}
            ></div>
            <div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 15,
                    }}
                >
                    <img src="/gemes.png" alt="Ecloud4 Logo" height={150} width={150} />
                    <div
                        style={{
                            gap: 4,
                        }}
                    >
                        <h1
                            style={{
                                color: 'white',
                                fontWeight: '800',
                                fontSize: 25,
                            }}
                        >
                            Gemes
                        </h1>

                        <p
                            style={{
                                color: 'white',
                                fontWeight: '200',
                            }}
                        >
                            Es una aplicación de domicilios. La aplicación es para los riders. Ellos reciben ordenes en
                            tiempo real. Cuenta con un backoffice donde se pueden hacer seguimiento a los riders y a los
                            pedidos.
                        </p>

                        <a
                            href="https://apps.apple.com/us/app/ecloud4/id6447580403?platform=iphone"
                            style={{ textDecoration: 'underline', color: '#37AFE1' }}
                        >
                            <p>Ir a la App Store</p>
                        </a>
                    </div>
                </div>
            </div>
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="overflow-visible  py-5"
            >
                <CarouselContent className="overflow-visible ">
                    {gemesItems.map((item, i) => (
                        <CarouselItem key={i} className="pl-1 basis-1/5  ">
                            <img
                                src={item.img}
                                className=" h-auto hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                                alt={`Carousel Item ${i + 1}`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* //// ///// ////// */}
            {/* //// ///// ////// */}

            {/* //// ///// ////// */}

            {/* //// ///// ////// */}
            <div
                style={{
                    marginTop: 180,
                }}
            ></div>
            <div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 15,
                    }}
                >
                    <img src="/fego.png" alt="Ecloud4 Logo" height={150} width={150} />
                    <div
                        style={{
                            gap: 4,
                        }}
                    >
                        <h1
                            style={{
                                color: 'white',
                                fontWeight: '800',
                                fontSize: 25,
                            }}
                        >
                            Fego
                        </h1>

                        <p
                            style={{
                                color: 'white',
                                fontWeight: '200',
                            }}
                        >
                            Es una aplicación para aprender inglés. Se basa en la teoría científica de la repetición
                            espaciada para poder generar recordación.
                        </p>

                        <a
                            href="https://apps.apple.com/us/app/ecloud4/id6447580403?platform=iphone"
                            style={{ textDecoration: 'underline', color: '#37AFE1' }}
                        >
                            <p>Ir a la App Store</p>
                        </a>
                    </div>
                </div>
            </div>
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="overflow-visible  py-5"
            >
                <CarouselContent className="overflow-visible ">
                    {fegoItems.map((item, i) => (
                        <CarouselItem key={i} className="pl-1 basis-1/5  ">
                            <img
                                src={item.img}
                                className=" h-auto hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                                alt={`Carousel Item ${i + 1}`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Grid;
