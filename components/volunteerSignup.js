import Head from 'next/head';
import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Form,
    Button,
    Grid,
    GridItem
} from '@chakra-ui/react';
import Link from 'next/link';
import CountrySelector from './SelectCountryInput';
import SkillsSelector from './SkillsSelector';

export default function VolunteerSignupForm() {
    const [form, setForm] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: 'New',
        location: '',
        website: '',
        github: '',
        linkedIn: '',
        twitter: '',
        skills: [],
        description: ''
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // create();
        console.log(form);
    }

    async function create() {
        try {
            const res = await fetch(`http://localhost:3000/api/devs`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            //TODO - decide on where to redirect to an update below
            //   router.push(`/project/${currentProject.id}/taskview`);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid templateColumns="1fr 1fr 1fr" columnGap={20}>
                    <GridItem mx={2}>
                        <FormControl id="username" isRequired my={2}>
                            <FormLabel>User name</FormLabel>
                            <Input
                                placeholder="choose username "
                                name="username"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="first_name" isRequired my={2}>
                            <FormLabel>First name</FormLabel>
                            <Input
                                placeholder="Enter first name"
                                name="first_name"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="last_name" isRequired my={2}>
                            <FormLabel>First name</FormLabel>
                            <Input
                                placeholder="enter last name"
                                name="last_name"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="email" isRequired my={2}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="country" my={2}>
                            <FormLabel>Country</FormLabel>
                            <CountrySelector onChange={handleChange} />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl id="website" my={2}>
                            <FormLabel>Website</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your portfolio or website url"
                                name="website"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="github" my={2}>
                            <FormLabel>Github</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your Github"
                                name="github"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="linkedin" my={2}>
                            <FormLabel>Linkedin</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your linkedin"
                                name="linkedin"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="twitter" my={2}>
                            <FormLabel>Twitter</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your twitter handle"
                                name="twitter"
                                onChange={handleChange}
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem>
                        <FormControl id="skills" my={2}>
                            <FormLabel>Skills</FormLabel>
                            <SkillsSelector onChange={handleChange} />
                        </FormControl>
                        <FormControl id="description" my={2}>
                            <FormLabel>Description</FormLabel>
                            <Input
                                type="text"
                                placeholder="Write a sentance or two about yourself "
                                name="description"
                                onChange={handleChange}
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button mt={4} colorScheme="teal" type="submit">
                            Submit
                        </Button>
                    </GridItem>
                </Grid>
            </form>
        </>
    );
}
