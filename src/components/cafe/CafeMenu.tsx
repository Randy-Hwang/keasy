import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import CoffeeMenu from './CoffeeMenu';

const CafeMenu = () => {
  const [clickedTab, setClickedTab] = useState('recommend');

  const renderClickedTab = (clickedTab: string) => {
    switch (clickedTab) {
      case 'recommend':
        return <div>'recommend'</div>;
      case 'popular':
        return <div>'popular'</div>;
      case 'coffee':
        return (
          <div>
            <CoffeeMenu />
          </div>
        );
      case 'tea':
        return <div>'tea'</div>;
      case 'juice':
        return <div>'juice'</div>;
      case 'ade':
        return <div>'ade'</div>;
      case 'bread':
        return <div>'bread'</div>;
    }
  };

  return (
    <>
      <Box position="absolute" top={400}>
        <Button
          onClick={() => {
            setClickedTab('recommend');
          }}
        >
          추천
        </Button>
        <Button
          onClick={() => {
            setClickedTab('popular');
          }}
        >
          인기
        </Button>
        <Button
          onClick={() => {
            setClickedTab('coffee');
          }}
        >
          커피
        </Button>
        <Button
          onClick={() => {
            setClickedTab('juice');
          }}
        >
          주스/스무디
        </Button>
        <Button
          onClick={() => {
            setClickedTab('tea');
          }}
        >
          티
        </Button>
        <Button
          onClick={() => {
            setClickedTab('ade');
          }}
        >
          에이드
        </Button>
        <Button
          onClick={() => {
            setClickedTab('bread');
          }}
        >
          빵/디저트
        </Button>
      </Box>
      {renderClickedTab(clickedTab)}
    </>
  );
};

export default CafeMenu;
