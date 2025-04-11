'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/configs/config';
import SectionHeader from '@/components/ui/SectionHeader';
import ImageTrail from './effect/ImageTrail';
import ASCIIText from './effect/ASCIIText';

const AboutMe = () => {
  return (
    
    <AnimationContainer customClassName="w-full mb-16">
       <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>

        <ASCIIText
          text='Axeeelyn'
          enableWaves={true}
          asciiFontSize={8}
          textFontSize={400}
          planeBaseHeight={5}
          
        />
     
      <ImageTrail
        items={[
          'https://picsum.photos/id/287/300/300',
          'https://picsum.photos/id/1001/300/300',
          'https://picsum.photos/id/1025/300/300',
          'https://picsum.photos/id/1026/300/300',
          'https://picsum.photos/id/1027/300/300',
          'https://picsum.photos/id/1028/300/300',
          'https://picsum.photos/id/1029/300/300',
          'https://picsum.photos/id/1030/300/300',
          // ...
        ]}
        variant={1}
      />
    </div>
    <SectionHeader
      id="aboutme"
      title="About Me"
      content={`Here is a little bit about me and my journey as a developer.`}
    />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , Saya sudah menggemari coding sejak saya masih duduk di bangku SMA. Saya jatuh cinta dengan pemrograman sejak usia muda, menghabiskan waktu berjam-jam untuk belajar, bereksperimen, dan membuat proyek-proyek kecil. Selama bertahun-tahun, minat ini telah berkembang menjadi karier sebagai Web Developer, di mana saya terus membangun solusi inovatif yang memecahkan suatu masalah..
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      Seiring dengan perkembangan karier saya, saya telah memperluas keahlian saya ke area baru seperti membelajari Mesin Learning (ML) dan Kecerdasan Buatan (AI), mendalami jaringan saraf dan teknologi canggih lainnya. Namun, tidak peduli seberapa banyak saya belajar, saya selalu memiliki kegembiraan dan rasa ingin tahu yang sama seperti saat saya masih kecil, menjelajahi bidang dan teknologi baru yang mendorong batas-batas kemungkinan pada diri saya sendiri.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Saat ini, saya tidak hanya fokus membangun aplikasi situs web saja; saya juga mengeksplorasi perangkat seperti Docker, Osin, Ubuntu, PostgreSQL, Metasploit, WireShark dan NMAP untuk mengoptimalkan dan meningkatkan skala proyek dan produktivitas saya. Saya percaya pada pembelajaran dan pertumbuhan berkelanjutan, dan saya selalu mencari tantangan baru yang membantu saya mengembangkan keterampilan saya lebih dalam.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
       Jika Anda tertarik untuk berkolaborasi dalam sesuatu yang menarik atau butuh bantuan untuk sebuah proyek, jangan ragu untuk menghubungi kami. Mari kita ciptakan sesuatu yang luar biasa bersama-sama!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
