import styled from 'styled-components';

import { remCalc } from '../../utils/units';

const ImageFeedHeader = styled.section`
  max-width: 600px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;

  @media screen and (min-width: 48em) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageFeedContainer = styled.section`
  width: 100%;
`;

const ImageFeed = styled.section`
  display: flex;
  overflow-x: hidden;
  margin-bottom: ${remCalc(110)};

  img {
    margin-bottom: 0;
  }
`;

export { ImageFeed, ImageFeedHeader, ImageFeedContainer };
