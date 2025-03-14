import React from 'react';
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='about' className='w-full h-64' />
        <article>
          <SectionTitle text='code and music' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vero
            perferendis facere similique doloribus alias fugit nisi sint
            repellendus, culpa ducimus nam autem dicta distinctio architecto
            beatae eos dolorem molestiae vitae neque! Optio nemo.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
