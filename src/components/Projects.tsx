import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import projectImage1 from '../public/assets/Screenshot from 2024-10-09 15-22-16.png'; 
import projectImage2 from '../public/assets/IACC_LOGO.png';
import projectImage3 from '../public/assets/conversor.png';
import projectImage4 from '../public/assets/file_cropped.png';

import  '../styles/Projects.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="projects">
        <div className="projects-title">
          <h2>{t('projectsTitleAges')}</h2>
          <h3>{t('aboutSubtitleAges')}</h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="card-project-ages">
            <div className="img-project">
              <a href="/">
                <img src={projectImage1} alt="img-Conversor" />
              </a>
            </div>
            <span>Free From Club</span>
            <p>{t('project1Description')}</p>
            <div className="cta-project">
              <a href="https://tools.ages.pucrs.br/free-from-club" target="_blank" rel="noopener noreferrer">
                Gitlab
                <i className="fa-brands fa-square-gitlab"></i>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card-project-ages">
            <div className="img-project">
              <a href="/">
                <img src={projectImage2} alt="img-Projeto2" />
              </a>
            </div>
            <span>Instrumento para a Avaliação das Competências Clínicas (IACC)</span>
            <p>{t('project2Description')}</p>
            <div className="cta-project">
              <a href="https://tools.ages.pucrs.br/instrumento-para-avaliacao-de-competencias-clinicas" target="_blank" rel="noopener noreferrer">
                Gitlab
                <i className="fa-brands fa-square-gitlab"></i>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="projects">
        <div className="projects-title">
          <h2>{t('projectsTitle')}</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="card-project">
            <div className="img-project">
              <a href="/">
                <img src={projectImage3} alt="img-Conversor" />
              </a>
            </div>
            <span>{t('project3Title')}</span>
            <p>{t('project3Description')}</p>
            <div className="cta-project">
              <a href="https://github.com/AugustoPBaldino/Crud_Authentication_JWT" target="_blank" rel="noopener noreferrer">
                {t('code')}
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="card-project">
            <div className="img-project">
              <a href="/">
                <img src={projectImage4} alt="img-Projeto2" />
              </a>
            </div>
            <span>{t('project4Title')}</span>
            <p>{t('project4Description')}</p>
            <div className="cta-project">
              <a href="https://github.com/AugustoPBaldino/grupo-de-estudos-sprint-2" target="_blank" rel="noopener noreferrer">
                {t('code')}
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide className="card-project">
                        <div className="img-project">
                            <a href="/">
                                <img src={projectImage3} alt="img-Projeto3" />
                            </a>
                        </div>
                        <span>{t('project5Title')}</span> 
                        <p>{t('project5Description')}</p>
                        <div className="cta-project">
                            <a href="https://github.com/AugustoPBaldino/Personal_Blog" target="_blank" rel="noopener noreferrer">
                                {t('code')}
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Projects;
