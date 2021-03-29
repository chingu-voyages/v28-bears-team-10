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
                    <Checkbox name="skills" value="HTML" onChange={onChange} colorScheme="green">
                        HTML
                    </Checkbox>
                    <Checkbox name="skills" value="React" onChange={onChange} colorScheme="green">
                        React
                    </Checkbox>
                    <Checkbox name="skills" value="Node" onChange={onChange} colorScheme="green">
                        Node
                    </Checkbox>
                    <Checkbox name="skills" value="Vue" onChange={onChange} colorScheme="green">
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
                </CheckboxGroup>
            </Grid>
        </>
    );
}
