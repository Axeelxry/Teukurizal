import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import TiltedCard from './effect/TiltedCard';

const DevCard: React.FC = () => (
  <AnimationContainer customClassName="w-full">
    <div className="mb-12">
    <div className="flex justify-center items-center mb-8">
    <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Teuku Rizal - GNX Album Cover"
    captionText="Teuku Rizal - GNX"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Teuku Rizal - GNX
      </p>
    }
  />
  </div>
      <SectionHeader
        title="Devcard"
        content="This Devcard represents my daily reading experience and provides insights into the topics I am currently exploring. I use the Daily.dev platform to stay up-to-date with the latest trends in software development and technology."
      />{' '}
      <Link
        href={`https://app.daily.dev/${siteConfig.social.daily_dev.username}`}
      >
        <Image
          src={`${siteConfig.social.daily_dev.card}`}
          alt={`${siteConfig.author}'s DevCard`}
          className="mx-auto mt-8"
          width={652}
          height={300}
        />
      </Link>
    </div>
  </AnimationContainer>
);

export default DevCard;
