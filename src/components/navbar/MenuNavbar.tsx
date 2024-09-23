'use client'

import React, { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';

export const MenuNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Open Menu
      </Button>

      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right" // Puedes cambiar a "right", "top" o "bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            as={'nav'}
          >
            {/* Aquí puedes añadir tus enlaces o elementos del menú */}
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

