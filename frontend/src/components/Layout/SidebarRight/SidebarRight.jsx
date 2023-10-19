import React, { useEffect, useState } from "react";

import { Box, Flex, Grid, GridItem, Image, Tag } from "@chakra-ui/react";
import { ClockIcon, ReloadIcon } from "../../../Utils/icons";
import Button from "../../Buttons/Button";
import Subtitle from "../../Texts/Subtitle";
import TextContent from "../../Texts/TextContent/TextContent";

import "./max_text.css";
import EventDefaultBaner from "../../../assets/img/img/event_default_baner.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getClosestEvents,
  getEvent,
  selectClosestEvent,
  selectClosestEventTimeDiff,
  selectLoadingClosestEvents,
  selectTodayEvents,
} from "../../../redux/features/eventSlice";
import SidebarRightLoading from "./SidebarRightLoading";
import { onOpenModal } from "../../../redux/features/modalEventSlice";

const SidebarRight = ({ area = "" }) => {
  const [showEventCard, setShowEventCard] = useState(true);
  const { innerHeight: height } = window;

  const dispatch = useDispatch();

  const closest_event = useSelector(selectClosestEvent);
  const diference_time = useSelector(selectClosestEventTimeDiff);
  const todays_events = useSelector(selectTodayEvents);
  const loading_sidebar_right = useSelector(selectLoadingClosestEvents);

  const getEventDetail = (id) => dispatch(getEvent(id));
  const onOpenModalViewEvent = () => dispatch(onOpenModal());

  // if showEventCard is false, slice todays_events to 4
  const events = showEventCard ? todays_events : todays_events.slice(0, 4);

  useEffect(() => {
    dispatch(getClosestEvents());
    if (height <= 920) {
      setShowEventCard(false);
    }

    return () => {
      setShowEventCard(true);
    };
  }, [height]);

  const handleReloadEvents = () => {
    dispatch(getClosestEvents());
  };

  return loading_sidebar_right ? (
    <SidebarRightLoading />
  ) : (
    <GridItem
      pl="2"
      area={area}
      display={{ base: "none", lg: "inherit" }}
      mr="6"
      py="5"
    >
      <Grid
        templateRows={showEventCard ? "1fr 1fr" : "95vh"}
        templateColumns="1fr"
        flexDirection="column"
        justifyContent="space-around"
        width="100%"
        height="100%"
        gap="5"
      >
        {showEventCard && (
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            boxShadow="card"
            borderRadius="10px"
            p="5"
          >
            <Box>
              <TextContent content="Evento próximo" gray small />
              <Image
                width="100%"
                height={{ lg: "150px", xl: "180px" }}
                objectFit="cover"
                borderRadius="10px"
                src={EventDefaultBaner}
                alt="Event baner"
                my="2"
                position="relative"
              />
              <Subtitle
                content={
                  closest_event ? closest_event.event_name : "Sin evento"
                }
              />

              <Tag
                size="md"
                bg="secondary.50"
                color="secondary.500"
                width="max-content"
                mb="3"
              >
                <Image src={ClockIcon} mr="1" />
                {diference_time ? diference_time : "Sin evento"}
              </Tag>
            </Box>
            <TextContent gray className="max-text-3" mb="3">
              {closest_event
                ? closest_event.event_description
                : "Sin descripción"}
            </TextContent>

            <Button
              text="Ver más"
              primary
              width="100%"
              disabled={!closest_event}
              onClick={() => {
                getEventDetail(closest_event.id);
                onOpenModalViewEvent();
              }}
            />
          </Flex>
        )}

        <Flex
          flexDirection="column"
          boxShadow="card"
          borderRadius="10px"
          px="5"
          pb="5"
          overflowY="auto"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb="5"
            position="sticky"
            top="0"
            bg="white"
            // zIndex="0"
            py="2"
          >
            <Flex alignContent="center" gap={2}>
              <Subtitle content="Eventos de hoy" />
              <Image
                src={ReloadIcon}
                mt="1"
                _hover={{ cursor: "pointer" }}
                onClick={handleReloadEvents}
              />
            </Flex>

            <TextContent content="Ver mas" gray small />
          </Flex>

          <Flex
            position="relative"
            // zIndex="-1"
          >
            {/*  line timeline */}
            <Box
              borderLeft="1px"
              borderLeftColor="brand.gray"
              position="absolute"
              height={showEventCard ? "78%" : "90%"}
              top={{ base: "30px", xl: "22px" }}
              left={{ base: "8px", xl: showEventCard ? "20px" : "12px" }}
              zIndex="-1"
            />
            {/* <div className="check-left-line"></div> */}
            <Box
              as="ul"
              color="brand.gray"
              listStyleType="none"
              paddingLeft="0"
              mr="auto"
              ml="auto"
            >
              {events.map((item, index) => {
                const { event_name, event_start_time, id } = item;

                // format event_start_time to 12 hours guatemala time
                const is_pm = +event_start_time.slice(0, 2) > 12;
                const is_am = +event_start_time.slice(0, 2) < 12;

                let time_format = "";

                if (is_pm) {
                  time_format = `${
                    +event_start_time.slice(0, 2) - 12
                  }:${event_start_time.slice(3, 5)}`;
                } else if (is_am) {
                  time_format = event_start_time;
                }

                return (
                  <Box
                    key={id}
                    as="li"
                    marginBottom="30px"
                    color={index === 0 ? "brand.warning" : "brand.gray"}
                    display="grid"
                    alignItems="center"
                    gridTemplateColumns="30px 80px 15px 1fr 1fr 1fr"
                    maxWidth="355px"
                    _before={{
                      content: `"⬤"`,
                      paddingRight: "15px",
                    }}
                  >
                    <Box as="span">
                      <Subtitle content={time_format} secondary />
                      <TextContent
                        content={is_pm ? "pm" : "am"}
                        gray
                        mt={-2}
                        ml={1}
                      />
                    </Box>
                    <Box
                      borderLeft="2px"
                      borderLeftColor="brand.gray"
                      height="30px"
                      mr={3}
                    />
                    <TextContent
                      content={event_name}
                      fontWeight="semibold"
                      gridColumn="4/6"
                      className="max-text-1"
                    />
                    <Button
                      text="Ver"
                      outline
                      width="100%"
                      height="30px"
                      onClick={() => {
                        getEventDetail(id);
                        onOpenModalViewEvent();
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Flex>
        </Flex>
      </Grid>
    </GridItem>
  );
};

export default SidebarRight;
