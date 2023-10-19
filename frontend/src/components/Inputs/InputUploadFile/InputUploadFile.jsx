import React from "react";

import { Input } from "@chakra-ui/input";
import {
  AspectRatio,
  Box,
  Flex,
  forwardRef,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/form-control";

import { toast } from "react-hot-toast";

import { motion, useAnimation } from "framer-motion";

import { SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import TextContent from "../../Texts/TextContent";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

const InputUploadFile = ({
  disabled,
  error = false,
  success = false,
  errors = "",
  key_name,
  label = "",
  marginBottom = "",
  marginTop = "",
  imagesToDelete = [],
  images,
  setImages,
  setImagesToDelete,
  isUpdate = false,
  linkImage = false,
}) => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();

  useEffect(() => {
    return () => {
      setImages([]);
    };
  }, [setImages]);

  return (
    <>
      <FormControl isInvalid={errors[key_name]}>
        {label && <FormLabel>{label}</FormLabel>}

        <AspectRatio width="" ratio="2">
          <Box
            borderColor="brand.gray"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            transition="all 150ms ease-in-out"
            _hover={{
              borderColor: "brand.primary",
            }}
            as={motion.div}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justify="center"
                  spacing="4"
                >
                  <Box height="16" width="12" top="6" position="relative">
                    <PreviewImage
                      variants={first}
                      backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
                    />
                    <PreviewImage
                      variants={second}
                      backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
                    />
                    <PreviewImage
                      variants={third}
                      backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
                    />
                  </Box>
                  <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      Arrastra y suelta tus imágenes
                    </Heading>
                    <Text fontWeight="light">
                      o haz click para seleccionarlas
                    </Text>
                  </Stack>
                </Stack>
              </Box>
              <Input
                height="100%"
                width="100%"
                id={key_name}
                borderColor={
                  error
                    ? "brand.error"
                    : success
                    ? "brand.success"
                    : "brand.gray"
                }
                disabled={disabled}
                _disabled={{
                  backgroundColor: "brand.disabled",
                  cursor: "not-allowed",
                  _hover: { borderColor: "brand.gray" },
                }}
                type="file"
                onChange={(e) => {
                  // uploadImage(e.target.files[0]);

                  // set if type file is an image
                  if (e.target.files[0].type.includes("image"))
                    setImages([...images, e.target.files[0]]);
                  else toast.error("El archivo no es una imagen");
                  // console.log(e.target.files);
                }}
                marginBottom={marginBottom}
                marginTop={marginTop}
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                onDragEnter={startAnimation}
                onDragLeave={stopAnimation}
              />
            </Box>
          </Box>
        </AspectRatio>

        <Grid
          templateColumns={
            isUpdate ? "repeat(auto-fill, 100px)" : "repeat(auto-fill, 75px)"
          }
          gap={6}
          marginTop="6"
        >
          {images.length > 0 ? (
            images.map((image, index) => {
              const image_url =
                typeof image === "string" ? image : URL.createObjectURL(image);
              return (
                <Flex flexDirection="column" position="relative" key={index}>
                  <Icon
                    as={SmallCloseIcon}
                    w={8}
                    h={8}
                    p="1"
                    position="absolute"
                    top="-2"
                    right="-4"
                    color="brand.gray"
                    cursor="pointer"
                    borderRadius="md"
                    transition={disabled ? "none" : "all 150ms ease-in-out"}
                    _hover={
                      !disabled && {
                        // backgroundColor: "brand.disabled",
                        color: "brand.error",
                        transition: "all 150ms ease-in-out",
                      }
                    }
                    onClick={() => {
                      const newImages = images.filter(
                        (image, i) => i !== index
                      );
                      setImages(newImages);
                      if (isUpdate)
                        setImagesToDelete([...imagesToDelete, image]);
                    }}
                  />

                  {linkImage ? (
                    <a href={image_url} target="_blank">
                      <Image
                        src={image_url}
                        minWidth={isUpdate ? "100px" : "70px"}
                        maxWidth={isUpdate ? "100px" : "70px"}
                        height={isUpdate ? "100px" : "70px"}
                        objectFit="cover"
                        rounded="md"
                        marginRight="2"
                      />
                    </a>
                  ) : (
                    <Image
                      src={image_url}
                      minWidth={isUpdate ? "100px" : "70px"}
                      maxWidth={isUpdate ? "100px" : "70px"}
                      height={isUpdate ? "100px" : "70px"}
                      objectFit="cover"
                      rounded="md"
                      marginRight="2"
                    />
                  )}
                  {/* <TextContent small>{image.name}</TextContent> */}
                </Flex>
              );
            })
          ) : (
            <TextContent small>No hay imágenes cargadas</TextContent>
          )}
        </Grid>
      </FormControl>
    </>
  );
};

export default InputUploadFile;
