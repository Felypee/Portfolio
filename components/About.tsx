import React from 'react';

const About = () => {
    return (
        <section
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                marginTop: 200,
            }}
        >
            <h1 className="heading">
                Sobre <span className="text-purple">mí</span>
            </h1>
            <div
                style={{
                    marginTop: 30,
                }}
            ></div>
            <h1>
                En el mundo de la programación me he especializado en desarrollo de aplicaciones móviles. Cuento una
                experiencia de casi 4 años en el negocio de las billeteras financieras, app de domicilios e impulso mi
                propia aplicación para aprender idiomas. También las necesidades de distintos proyectos me han llevado a
                adquirir conocimientos en la parte de backend y bases de datos.
            </h1>
            <div
                style={{
                    marginTop: 20,
                }}
            ></div>
            <h1>
                Toda mi vida he sido un apasionado por la tecnología y por crear cosas que transformen el mundo. Aunque
                sé que no he llegado a donde quiero, sé que con constancia, disciplina y amor al arte se superará
                cualquier barrera.
            </h1>

            <div
                style={{
                    marginTop: 20,
                }}
            ></div>
            <p>Felipe Arango</p>
            <p>Felipearango9701@gmail.com</p>
            <p>+57 3114740716</p>
        </section>
    );
};

export default About;
