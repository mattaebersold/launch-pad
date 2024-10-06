import React from 'react';

import { LPSelectItem } from '../atoms/LPSelect';
import { useForm, FormProvider } from 'react-hook-form';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const StateSelect = () => {
  const form = useForm();

  return (

    <FormProvider {...form}>
      <form>

      <Select.Root name='state'>
          <Select.Trigger className="
            SelectTrigger 
            border-[1px]
            text-black
            border-black 
            focus:border-purple 
            focus:border-purple 
            inline-flex 
            items-center 
            justify-center 
            rounded-lg 
            px-4 
            gap-1 
            leading-none 
            h-9 
            bg-white
            shadow-md 
            hover:bg-mauve-3 
            focus:shadow-outline 
            focus:outline-none" aria-label='state'>
            <Select.Value placeholder='state select' />
            <Select.Icon className="SelectIcon">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="SelectContent overflow-hidden bg-white rounded-xl shadow-xl">
              <Select.ScrollUpButton className="SelectScrollButton flex items-center justify-center h-9 bg-white  cursor-default">
                <ChevronUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport className="SelectViewport p-1">
                <Select.Group>
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
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className="SelectScrollButton">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

      
      </form>
    </FormProvider>


  )
}

export default StateSelect;
