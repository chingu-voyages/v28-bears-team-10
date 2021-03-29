import Head from 'next/head';
import react, {useState} from "react";
import { 
    Box, 
    SimpleGrid, 
    Center, 
    Text, 
    Container,   
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Form,  
    Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Formik, Field } from 'formik';
// import Layout from '../../components/Layout';

export default function VolunteerSignupForm() {

    const [form, setForm] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "New",
      });

      function handleChange(e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }
      function handleSubmit(e){
        e.preventDefault();
        create();
      }
    
      async function create() {
        try {
          const res = await fetch(`http://localhost:3000/api/devs`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
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

      <FormControl id="username" isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder="choose username " name="username"
   onChange={handleChange} />
</FormControl>
<FormControl id="first_name" isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder="Enter first name" name="first_name"
   onChange={handleChange} />
</FormControl>
<FormControl id="last_name" isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder="enter last name" name="last_name"
   onChange={handleChange} />
</FormControl>
<FormControl id="email" isRequired>
  <FormLabel>Email</FormLabel>
  <Input placeholder="Enter Email" name="email"  onChange={handleChange} />
</FormControl>
<Button
            mt={4}
            colorScheme="teal"
            
            type="submit"
            >
            Submit
          </Button>
  

              </form>
        </>
    );
}


