import React from 'react';

import { LPSelect, LPSelectItem } from '../atoms/LPSelect';
import { useForm, FormProvider } from 'react-hook-form';

const StateSelect = () => {
  const form = useForm();


  return (

    <FormProvider {...form}>
      <form>
        <LPSelect
          elemeneName='state-select-example'
          elementId='state-select-example'
          placeholder='Select a state…' 
          label='state'>
          
          <LPSelectItem  value="Alabama">Alabama</LPSelectItem>
          <LPSelectItem value="Alaska">Alaska</LPSelectItem>
          <LPSelectItem value="Arizona">Arizona</LPSelectItem>
          <LPSelectItem value="Arkansas">Arkansas</LPSelectItem>
          <LPSelectItem value="California">California</LPSelectItem>
          <LPSelectItem value="Colorado">Colorado</LPSelectItem>
          <LPSelectItem value="Connecticut">Connecticut</LPSelectItem>
          <LPSelectItem value="Delaware">Delaware</LPSelectItem>
          <LPSelectItem value="District Of Columbia">District Of Columbia</LPSelectItem>
          <LPSelectItem value="Florida">Florida</LPSelectItem>
          <LPSelectItem value="Georgia">Georgia</LPSelectItem>
          <LPSelectItem value="Hawaii">Hawaii</LPSelectItem>
          <LPSelectItem value="Idaho">Idaho</LPSelectItem>
          <LPSelectItem value="Illinois">Illinois</LPSelectItem>
          <LPSelectItem value="Indiana">Indiana</LPSelectItem>
          <LPSelectItem value="Iowa">Iowa</LPSelectItem>
          <LPSelectItem value="Kansas">Kansas</LPSelectItem>
          <LPSelectItem value="Kentucky">Kentucky</LPSelectItem>
          <LPSelectItem value="Louisiana">Louisiana</LPSelectItem>
          <LPSelectItem value="Maine">Maine</LPSelectItem>
          <LPSelectItem value="Maryland">Maryland</LPSelectItem>
          <LPSelectItem value="Massachusetts">Massachusetts</LPSelectItem>
          <LPSelectItem value="Michigan">Michigan</LPSelectItem>
          <LPSelectItem value="Minnesota">Minnesota</LPSelectItem>
          <LPSelectItem value="Mississippi">Mississippi</LPSelectItem>
          <LPSelectItem value="Missouri">Missouri</LPSelectItem>
          <LPSelectItem value="Montana">Montana</LPSelectItem>
          <LPSelectItem value="Nebraska">Nebraska</LPSelectItem>
          <LPSelectItem value="Nevada">Nevada</LPSelectItem>
          <LPSelectItem value="New Hampshire">New Hampshire</LPSelectItem>
          <LPSelectItem value="New Jersey">New Jersey</LPSelectItem>
          <LPSelectItem value="New Mexico">New Mexico</LPSelectItem>
          <LPSelectItem value="New York">New York</LPSelectItem>
          <LPSelectItem value="North Carolina">North Carolina</LPSelectItem>
          <LPSelectItem value="North Dakota">North Dakota</LPSelectItem>
          <LPSelectItem value="Ohio">Ohio</LPSelectItem>
          <LPSelectItem value="Oklahoma">Oklahoma</LPSelectItem>
          <LPSelectItem value="Oregon">Oregon</LPSelectItem>
          <LPSelectItem value="Pennsylvania">Pennsylvania</LPSelectItem>
          <LPSelectItem value="Rhode Island">Rhode Island</LPSelectItem>
          <LPSelectItem value="South Carolina">South Carolina</LPSelectItem>
          <LPSelectItem value="South Dakota">South Dakota</LPSelectItem>
          <LPSelectItem value="Tennessee">Tennessee</LPSelectItem>
          <LPSelectItem value="Texas">Texas</LPSelectItem>
          <LPSelectItem value="Utah">Utah</LPSelectItem>
          <LPSelectItem value="Vermont">Vermont</LPSelectItem>
          <LPSelectItem value="Virginia">Virginia</LPSelectItem>
          <LPSelectItem value="Washington">Washington</LPSelectItem>
          <LPSelectItem value="West Virginia">West Virginia</LPSelectItem>
          <LPSelectItem value="Wisconsin">Wisconsin</LPSelectItem>
          <LPSelectItem value="Wyoming">Wyoming</LPSelectItem>
        </LPSelect>
    
      </form>
    </FormProvider>


  )
}

export default StateSelect;
