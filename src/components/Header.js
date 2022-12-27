import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: timmynaike@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Tnaike',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/timilehin-adenaike',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/11666618/tnaike',
  },
];

const pageSection = [
  {
    id: 'projects',
    url: '#projects',
    title: 'Projects',
  },
  {
    id: 'contactme',
    url: '#contact-me',
    title: 'Contact Me',
  },
];

const Header = () => {
  const [transform, setTransform] = useState(0);
  const [position, setPosition] = useState('fixed');

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setTransform('-200px');
        setPosition('fixed');
      } else {
        setTransform('0');
        setPosition('static');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position={position}
      top={0}
      left={0}
      right={0}
      translateY={transform}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      zIndex={100}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            {socials.map((social, index) => {
              return (
                <a
                  href={social.url}
                  key={index}
                  style={{ display: 'inline-block', marginRight: '20px' }}
                >
                  <FontAwesomeIcon icon={social.icon} size='2x' />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {pageSection.map((item) => {
                return (
                  <a
                    href={item.url}
                    key={item.id}
                    onClick={handleClick(item.id)}
                  >
                    {item.title}
                  </a>
                );
              })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
