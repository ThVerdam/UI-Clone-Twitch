import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategories,
  TagRow,
  TagView,
  TagText,
  List 
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>ThVerdam</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            UI Twitch Clone com React Native
          </StreamDescription>

          <StreamCategories>
            Science & Technology
          </StreamCategories>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )
  
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
