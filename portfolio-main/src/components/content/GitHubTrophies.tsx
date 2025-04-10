import React from 'react';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import Ballpit from './effect/Ballpit';

const GitHubTrophies: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="mb-12">
      <h3 className="text-3xl font-medium mb-6 text-center">GitHub Trophies</h3>
    </div>
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
      <Ballpit
        count={200}
        gravity={0.7}
        friction={0.8}
        wallBounce={0.95}
        followCursor={true}
      />
    </div>
  </AnimationContainer>
);

export default GitHubTrophies;