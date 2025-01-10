'use client';
import { fegoItems, gemesItems, gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { FaLocationArrow } from 'react-icons/fa6';
import Link from '@/node_modules/next/link';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Grid = () => {
    return (
        <section className="flex flex-col items-start  w-full ">
            <h1 className="heading">
                Principales <span className="text-purple">proyectos</span>
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
                    <img
                        src="/ecloud-logo.webp"
                        alt="Ecloud4 Logo"
                        style={{
                            minWidth: '150px',
                            height: '180px',
                        }}
                    />
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
            <div
                style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    width: '100%', // Asegura que ocupe todo el ancho disponible
                    paddingTop: '1.25rem',
                    scrollBehavior: 'smooth',
                    overflowX: 'auto', // Habilita el scroll horizontal
                }}
            >
                {gridItems.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            paddingLeft: '0.25rem',
                            flex: '0 0 auto', // Mantiene el tamaño fijo
                        }}
                    >
                        <img
                            src={item.img}
                            alt={`Carousel Item ${i + 1}`}
                            style={{
                                height: '450px', // Altura fija
                                width: '200px', // Ancho fijo
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    </div>
                ))}
            </div>

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
                    <img
                        src="/gemes.png"
                        alt="Ecloud4 Logo"
                        style={{
                            minWidth: '150px',
                            height: '150px',
                        }}
                    />
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
                            Es una aplicación de domicilios. Los motorizados reciben ordenes en tiempo real.
                        </p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    width: '100%', // Asegura que ocupe todo el ancho disponible
                    paddingTop: '1.25rem',
                    scrollBehavior: 'smooth',
                    overflowX: 'auto', // Habilita el scroll horizontal
                }}
            >
                {gemesItems.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            paddingLeft: '0.25rem',
                            flex: '0 0 auto', // Mantiene el tamaño fijo
                        }}
                    >
                        <img
                            src={item.img}
                            alt={`Carousel Item ${i + 1}`}
                            style={{
                                height: '450px', // Altura fija
                                width: '200px', // Ancho fijo
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    </div>
                ))}
            </div>

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
                        alignItems: 'start',
                        gap: 15,
                    }}
                >
                    <div>
                        <img
                            src="/fego.png"
                            alt="Ecloud4 Logo"
                            style={{
                                minWidth: '150px',
                                height: '180px',
                            }}
                        />
                    </div>

                    <div
                        style={{
                            gap: 4,
                            display: 'flex',
                            flexDirection: 'column',
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
                            Es una aplicación para aprender inglés. Se basa en la teoría de la repetición espaciada para
                            poder generar recordación.
                        </p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    width: '100%', // Asegura que ocupe todo el ancho disponible
                    paddingTop: '1.25rem',
                    scrollBehavior: 'smooth',
                    overflowX: 'auto', // Habilita el scroll horizontal
                }}
            >
                {fegoItems.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            paddingLeft: '0.25rem',
                            flex: '0 0 auto', // Mantiene el tamaño fijo
                        }}
                    >
                        <img
                            src={item.img}
                            alt={`Carousel Item ${i + 1}`}
                            style={{
                                height: '450px', // Altura fija
                                width: '200px', // Ancho fijo
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Grid;
