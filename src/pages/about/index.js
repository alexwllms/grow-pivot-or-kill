import React from 'react';
import Img from 'gatsby-image';

import Hero from '../../components/Hero/index';
import Article from '../../components/Article/index';
import Container from '../../components/Container/index';
import {
  ImageFeed,
  ImageFeedHeader,
  ImageFeedContainer,
} from '../../components/ImageFeed/index';
import { Title, HeadingTwo, SubTitle } from '../../components/Headings/index';
import { ExternalLink } from '../../components/Links/index';

import aboutHeaderImage from './about-header-image.jpg';

const AboutPage = () => (
  <div>
    <Hero>
      <Title>Alex Williams, The Proprietor</Title>
      <SubTitle>Written on January 25, 2018</SubTitle>
    </Hero>

    <Article>
      <p>
        A retrospective is essential for helping your team learn and improve as
        your product evolves. It is also a great opportunity to celebrate recent
        successes, and is indispensable in helping you identify frustrations
        within your team, resources they may…
      </p>

      <div className="gatsby-resp-image-wrapper">
        <img src={aboutHeaderImage} alt="" />
      </div>

      <p>
        A retrospective is essential for helping your team learn and improve as
        your product evolves. It is also a great opportunity to celebrate recent
        successes, and is indispensable in helping you identify frustrations
        within your team, resources they may be lacking, and blockers to your
        team’s progress.
      </p>

      <HeadingTwo>Personal History</HeadingTwo>

      <p>
        Set the context and the tone of the retrospective; Write down your
        successes, what your learned and your frustrations on a whiteboard;
        Group these ideas by topic and assign actions to team members;
      </p>

      <p>
        Don’t forget to follow-up with what’s been fixed the following week. To
        run an effective retrospective you should: set the context and the tone,
        discuss ideas with every member of your team, group these ideas, and
        make a plan of how to follow-up. Group these ideas by topic and assign
        actions to team members; Don’t forget to follow-up with what’s been
        fixed the following week. To run an effective retrospective you should:
        set the context and the tone, discuss ideas with every member of your
        team, group these ideas, and make a plan of how to follow-up.
      </p>

      <blockquote>
        <p>
          “Regardless of what we discover, we understand and truly believe that
          everyone did the best job they could, given what they knew at the
          time, their skills and abilities, the resources available, and the
          situation at hand.” - Norm Kerth, Project Retrospectives: A Handbook
          for Team Review
        </p>
      </blockquote>

      <p>
        Don’t forget to follow-up with what’s been fixed the following week. To
        run an effective retrospective you should: set the context and the tone,
        discuss ideas with every member of your team, group these ideas, and
        make a plan of how to follow-up. Group these ideas by topic and assign
        actions to team members; Don’t forget to follow-up with what’s been
        fixed the following week. To run an effective retrospective you should:
        set the context and the tone, discuss ideas with every member of your
        team, group these ideas, and make a plan of how to follow-up.
      </p>
    </Article>

    <ImageFeedContainer>
      <ImageFeedHeader>
        <HeadingTwo>&lsquo;grams</HeadingTwo>
      </ImageFeedHeader>

      <ImageFeed>
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
        <img src={aboutHeaderImage} alt="" width="300" height="300" />
      </ImageFeed>
    </ImageFeedContainer>

    <Article>
      <p>
        Group these ideas by topic and assign actions to team members; Don’t
        forget to follow-up with what’s been fixed the following week. To run an
        effective retrospective you should: set the context and the tone,
        discuss ideas with every member of your team, group these ideas, and
        make a plan of how to follow-up.
      </p>
    </Article>

    <Article>
      <HeadingTwo>Say Hello</HeadingTwo>
      <p>
        Group these ideas by topic and assign actions to team members; Don’t
        forget to follow-up with what’s been fixed the following week.
      </p>
      <p>
        Email me on{' '}
        <ExternalLink href="/">alex@growpivotorkill.com</ExternalLink>
      </p>
    </Article>
  </div>
);

export default AboutPage;
