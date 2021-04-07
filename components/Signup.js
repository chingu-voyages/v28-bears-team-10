import React, { useState } from 'react';
import { Text, Select } from '@chakra-ui/react';
import VolunteerForm from './VolunteerForm';
import CharityForm from './CharityForm';

export default function Signup() {
    const [userType, setUserType] = useState('unknown');
    const [form, setForm] = useState({
        username: '',
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
        const checkedArr = [];
        if (e.target.type !== 'checkbox') {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        } else {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedArr.push(checkeds[i].value);
                }
            }
            setForm({
                ...form,
                skills: checkedArr
            });
        }
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

    function handleSubmit(e) {
        e.preventDefault();
        create();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Text color="black">What type of profile would you like to set up?</Text>
                <Select
                    placeholder="User type"
                    name="location"
                    onChange={(e) => setUserType(e.target.value)}>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Charity">Charity</option>
                </Select>
            </form>
            {userType === 'Charity' && <CharityForm handleChange={handleChange} />}
            {userType === 'Volunteer' && <VolunteerForm handleChange={handleChange} />}
        </>
    );
}
