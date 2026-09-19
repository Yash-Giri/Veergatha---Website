'use client';

import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import IdeaSection from '@/components/home/IdeaSection';
import HeritageWorldsSection from '@/components/home/HeritageWorldsSection';
import ArchetypeSection from '@/components/home/ArchetypeSection';
import FeaturedStorySection from '@/components/home/FeaturedStorySection';
import ConceptualExpressionsSection from '@/components/home/ConceptualExpressionsSection';
import OurApproachSection from '@/components/home/OurApproachSection';
import JoinTheJourneySection from '@/components/home/JoinTheJourneySection';
import { logEvent } from '@/lib/analytics';

export default function HomePage() {
  useEffect(() => {
    // Log page view event per PRD §9.1
    logEvent('page_view', { page: '/' });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Idea */}
      <IdeaSection />

      {/* 3. Heritage Worlds */}
      <HeritageWorldsSection />

      {/* 4. What Draws You In? */}
      <ArchetypeSection />

      {/* 5. One Featured Story */}
      <FeaturedStorySection />

      {/* 6. What Could a Story Become? */}
      <ConceptualExpressionsSection />

      {/* 7. Our Approach */}
      <OurApproachSection />

      {/* 8. Join the Journey */}
      <JoinTheJourneySection />
    </div>
  );
}