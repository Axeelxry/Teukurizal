'use client';
import React from 'react';
import GitHubStreak from '@/components/content/GitHubStreak';
import GitHubTrophies from '@/components/content/GitHubTrophies';
import GitHubContributionHistory from '@/components/content/GitHubContributionHistory';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimationContainer from '@/components/utils/AnimationContainer';

const StatsSection: React.FC = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className=" w-full h-full  text-black dark:text-white bg-transparent">
        <SectionHeader
          title="GitHub Stats"
          content="Explore some of my key stats, achievements, and contributions on GitHub. Here's a snapshot of my journey on GitHub."
        />

        <GitHubStreak />

        <GitHubContributionHistory />

        <GitHubTrophies />
      </div>
    </AnimationContainer>
  );
};

export default StatsSection;
