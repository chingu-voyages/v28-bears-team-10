import React from 'react';
import { Box, Center, Container, Flex, Text, Spacer, Grid, GridItem } from '@chakra-ui/layout';
import { Tooltip, Image, Button, Avatar } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from './VolunteerProfile.module.css';

const testVolProfile = {
    id: 1,
    username: 'gmcdaid0',
    first_name: 'Grissel',
    last_name: 'McDaid',
    email: 'gmcdaid0@yellowpages.com',
    gender: 'Male',
    location: 'Orange',
    skills: ['HTML', 'CSS', 'JS', 'NodeJS'],
    description:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. ',
    avatar: 'https://robohash.org/etomnisnam.jpg?size=80x80&set=set1',
    website:
        'http://addtoany.com/tellus/semper.json?mattis=quam&egestas=nec&metus=dui&aenean=luctus&fermentum=rutrum&donec=nulla&ut=tellus&mauris=in&eget=sagittis&massa=dui&tempor=vel&convallis=nisl&nulla=duis&neque=ac&libero=nibh&convallis=fusce&eget=lacus&eleifend=purus&luctus=aliquet&ultricies=at&eu=feugiat&nibh=non',
    twitter:
        'https://google.com/vitae/nisl/aenean/lectus/pellentesque.js?in=vitae&faucibus=mattis&orci=nibh&luctus=ligula&et=nec&ultrices=sem&posuere=duis&cubilia=aliquam&curae=convallis&mauris=nunc&viverra=proin&diam=at&vitae=turpis&quam=a&suspendisse=pede&potenti=posuere&nullam=nonummy&porttitor=integer&lacus=non&at=velit&turpis=donec&donec=diam&posuere=neque&metus=vestibulum&vitae=eget&ipsum=vulputate&aliquam=ut&non=ultrices&mauris=vel&morbi=augue&non=vestibulum&lectus=ante&aliquam=ipsum&sit=primis&amet=in&diam=faucibus&in=orci&magna=luctus&bibendum=et&imperdiet=ultrices&nullam=posuere&orci=cubilia&pede=curae&venenatis=donec&non=pharetra&sodales=magna&sed=vestibulum&tincidunt=aliquet&eu=ultrices&felis=erat&fusce=tortor&posuere=sollicitudin&felis=mi&sed=sit&lacus=amet&morbi=lobortis&sem=sapien&mauris=sapien&laoreet=non&ut=mi&rhoncus=integer&aliquet=ac&pulvinar=neque&sed=duis&nisl=bibendum&nunc=morbi&rhoncus=non&dui=quam&vel=nec&sem=dui&sed=luctus&sagittis=rutrum&nam=nulla&congue=tellus&risus=in&semper=sagittis&porta=dui&volutpat=vel&quam=nisl&pede=duis&lobortis=ac&ligula=nibh&sit=fusce&amet=lacus&eleifend=purus&pede=aliquet&libero=at&quis=feugiat&orci=non&nullam=pretium&molestie=quis&nibh=lectus&in=suspendisse&lectus=potenti&pellentesque=in&at=eleifend&nulla=quam&suspendisse=a&potenti=odio&cras=in',
    linkedin:
        'http://walmart.com/leo.html?rhoncus=mollis&aliquam=molestie&lacus=lorem&morbi=quisque&quis=ut&tortor=erat&id=curabitur&nulla=gravida&ultrices=nisi&aliquet=at&maecenas=nibh&leo=in&odio=hac&condimentum=habitasse&id=platea&luctus=dictumst&nec=aliquam&molestie=augue&sed=quam&justo=sollicitudin&pellentesque=vitae&viverra=consectetuer&pede=eget&ac=rutrum&diam=at&cras=lorem&pellentesque=integer&volutpat=tincidunt&dui=ante&maecenas=vel&tristique=ipsum&est=praesent&et=blandit&tempus=lacinia&semper=erat&est=vestibulum&quam=sed&pharetra=magna&magna=at&ac=nunc&consequat=commodo&metus=placerat&sapien=praesent&ut=blandit&nunc=nam&vestibulum=nulla&ante=integer&ipsum=pede&primis=justo&in=lacinia&faucibus=eget&orci=tincidunt&luctus=eget&et=tempus&ultrices=vel&posuere=pede&cubilia=morbi&curae=porttitor&mauris=lorem&viverra=id&diam=ligula&vitae=suspendisse&quam=ornare&suspendisse=consequat&potenti=lectus&nullam=in&porttitor=est&lacus=risus&at=auctor&turpis=sed&donec=tristique&posuere=in&metus=tempus&vitae=sit&ipsum=amet&aliquam=sem&non=fusce&mauris=consequat&morbi=nulla&non=nisl&lectus=nunc&aliquam=nisl&sit=duis&amet=bibendum&diam=felis&in=sed&magna=interdum&bibendum=venenatis&imperdiet=turpis&nullam=enim&orci=blandit&pede=mi&venenatis=in&non=porttitor&sodales=pede&sed=justo&tincidunt=eu&eu=massa&felis=donec',
    github:
        'https://epa.gov/sit/amet/eleifend/pede/libero/quis.html?ipsum=aenean&integer=sit&a=amet&nibh=justo&in=morbi&quis=ut&justo=odio&maecenas=cras&rhoncus=mi&aliquam=pede&lacus=malesuada&morbi=in&quis=imperdiet&tortor=et&id=commodo&nulla=vulputate&ultrices=justo&aliquet=in&maecenas=blandit&leo=ultrices&odio=enim',
    date: '7/26/2020'
};
export default function VolunteerProfile() {
    const [turned, setTurned] = React.useState(false);

    const { flipcard, cardFront, cardBack, flip } = styles;

    function handleClick() {
        setTurned(!turned);
        console.log(turned);
    }

    return (
        <>
            <Flex bg="blue" direction="column" w="300px" height="400px" borderRadius="10px">
                <Flex direction="column" align="center" w="100%" height="150px">
                    <Avatar
                        border="solid 1px orange"
                        mt={2}
                        w="90px"
                        h="90px"
                        mx="auto"
                        src={testVolProfile.avatar}
                    />
                    {/* </Box> */}
                    <Text> {testVolProfile.first_name}</Text>
                    <Text> {testVolProfile.location}</Text>
                </Flex>
                <Flex
                    className={turned ? `${flip} ${flipcard}` : flipcard}
                    direction="column"
                    align="center"
                    justify="space-between"
                    p={2}
                    w="100%"
                    height="250px"
                    borderTop="orange 1px solid">
                    <Flex className={cardFront}>
                        cardFront
                        <Grid pt={2} w="50%" templateColumns="1fr 1fr">
                            {testVolProfile.skills.map((skill) => (
                                <Text key={skill}>{skill}</Text>
                            ))}
                        </Grid>
                        <Text py={2}>{testVolProfile.description}</Text>
                    </Flex>
                    <Flex
                        className={cardBack}
                        direction="column"
                        align="center"
                        justify="space-between"
                        p={2}>
                        cardback
                        <Text>{testVolProfile.website.substr(0, 20)}</Text>
                        <Text py={2}>{testVolProfile.github.substr(0, 20)}</Text>
                    </Flex>
                </Flex>
                <Button
                    onClick={handleClick}
                    bottom={2}
                    mt={2}
                    bg="orange"
                    color="white"
                    borderRadius="20px">
                    MORE INFO
                </Button>
            </Flex>
        </>
    );
}
