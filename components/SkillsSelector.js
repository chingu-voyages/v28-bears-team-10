import React, { useState } from 'react';
import { FormLabel, Checkbox, CheckboxGroup, Grid, GridItem, HStack } from '@chakra-ui/react';

export default function SkillsSelector({ onChange }) {
    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" columnGap={10}>
                <CheckboxGroup colorScheme="green">
                    <Checkbox name="skills" value="Javascript" onChange={onChange}>
                        Javascript
                    </Checkbox>
                    <Checkbox name="skills" value="HTML" onChange={onChange}>
                        HTML
                    </Checkbox>
                    <Checkbox name="skills" value="React" onChange={onChange}>
                        React
                    </Checkbox>
                    <Checkbox name="skills" value="Node" onChange={onChange}>
                        Node
                    </Checkbox>
                    <Checkbox name="skills" value="Vue" onChange={onChange}>
                        Vue
                    </Checkbox>
                    <Checkbox name="skills" value="Typescript" onChange={onChange}>
                        Typescript
                    </Checkbox>
                    <Checkbox name="skills" value="PHP" onChange={onChange}>
                        PHP
                    </Checkbox>
                    <Checkbox name="skills" value=".NET" onChange={onChange}>
                        .NET
                    </Checkbox>
                    <Checkbox name="skills" value="CSS" onChange={onChange}>
                        CSS
                    </Checkbox>
                    <Checkbox name="skills" value="Graphql" onChange={onChange}>
                        Graphql
                    </Checkbox>
                    <Checkbox name="skills" value="Frontend" onChange={onChange}>
                        Frontend
                    </Checkbox>
                    <Checkbox name="skills" value="Backend" onChange={onChange}>
                        Backend
                    </Checkbox>
                    <Checkbox name="skills" value="Full Stack" onChange={onChange}>
                        Full Stack
                    </Checkbox>
                    <Checkbox name="skills" value="UX/UI" onChange={onChange}>
                        UX/UI
                    </Checkbox>
                </CheckboxGroup>
            </Grid>
        </>
    );
}
