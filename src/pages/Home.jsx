import React, { useEffect, useState } from "react";
import cat from "../assets/cat.png";
import heart from "../assets/heart_icon.png";
import calendar from "../assets/calendar.png";
import valenti2 from '../assets/loadcat1.gif';
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css'; // Importa Animate.css
import { Carrousel } from "../components/carrousel/Carrousel";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const urlImg = "https://res.cloudinary.com/dbumluo1v/image/upload/";
  const arrayImg = [
    {
      src: "v1739497409/IMG_6970_bqf4qg.jpg",
      alt: "imagen 1",
      text: "Si el amor fuera una estrella, tu serias mi constelacion favorita",
    },
    {
      src: "IMG_8527_yxpcn7.jpg",
      alt: "imagen 2",
      text: "como nos conociois no se me va olvidar. Eres la mejor historia que tengo para contar",
    },
    {
      src: "v1739497406/IMG_8322_m1q7s2.jpg",
      alt: "imagen 3",
      text: "Me gusta mucho una mujer, pero no te voy a decir quien eres",
    },
    {
      src: "ultimate_hmwanh.png",
      alt: "imagen 4",
      text: "Eres el tipo de mujer por lo que vale la pena perder la nocio del tiempo",
    },
  ];

  useEffect(() => {
    const timmer = setTimeout(() => {
      setIsLoading(false); // oculta gif
    }, 7000);
    return () => {
      clearTimeout(timmer);
    };
  }, []);

  return (
    <>    
      <div className="loader">
        {isLoading ? (
          <div className="loader-screen">
            <img  className="loader-valentin"  src={valenti2} alt="Loading..." />
            <p className="text-center">Esperanding a la aplicacion...</p>            
          </div>
        ) : (
          <main className="main-body animate__animated animate__fadeInUpBig">
            <section className="header gallery-section">
              <img className="icon" src={cat} alt="" />
              <h2>Michelle and Marco </h2>
              <img className="icon" src={cat} alt="" />
            </section>

            <Carrousel />

            <section className="container-text-icons">
              <div className="icon-text">
                <img className="icon" src={heart} alt="" />
                <p className="text">
                  Hagan todo com amor <strong> 1 Corintio 16:14</strong>{" "}
                </p>
                <img className="icon" src={heart} alt="" />
              </div>

              <h3 className="since">Conociendonos desde </h3>
              <div className="icon-text onlyIcons">
                <img className="icon" src={calendar} alt="" />
                <img className="icon" src={calendar} alt="" />
                <img className="icon" src={calendar} alt="" />
              </div>

              <div className="icon-text onlyIcons">
                <p className="bold">13</p>
                <p className="bold">junio</p>
                <p className="bold">2024</p>
              </div>
            </section>

            <p className="introuce-text">
              Michellette de mi Cora, han sido tantos buenos momentos gratos a
              tu lado, que solo se me ocurrio realizar este pequeño presente
            </p>
            <section className="gallery-section">
              <div className="divider"></div>
              <div className="gallery">
                {arrayImg.map((image, index) => {
                  return (
                    <>
                      <div key={index} className="gallery-item">
                        <img src={`${urlImg}${image.src}`} alt={image.alt} />
                        <p className="descriptionimg">{image.text}</p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="divider"></div>
              <h4 className="finally">
                Prodria desearte tantas cosas pero si elijo una deseo, La
                presencia de Dios en tu vida. Porque si esta Dios, lo tienesd
                todo
              </h4>
              <div className="divider"></div>
            </section>
          </main>
        )}
      </div>
    </>
  );
};
