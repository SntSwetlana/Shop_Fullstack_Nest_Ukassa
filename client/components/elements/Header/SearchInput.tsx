import { useStore } from 'effector-react'
import { useState } from 'react'
import Select from 'react-select'
//import { defaultStyles } from 'react-select'
import { $mode } from '@/context/mode'
import { SelectOptionType } from '@/types/common'
import {
  controlStyles,
  inputStyles,
  menuStyles,
  optionStyles,
} from '@/styles/searchInput'

const SearchInput = () => {
  const mode = useStore($mode)
  const [searchOption, setSearchOption] = useState<SelectOptionType>(null)

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption)
  }

  return (
    <Select
      placeholder="search..."
      value={searchOption}
      onChange={handleSearchOptionChange}
      styles={{
        ...inputStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles, mode),
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: mode === 'dark' ? '#f2f2f2' : '#222222',
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles, mode),
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state, mode),
        }),
      }}
      isClearable={true}
      openMenuOnClick={false}
      options={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 88, 43, 11].map((item) => ({
        value: item,
        label: item,
      }))}
    />
  )
}

export default SearchInput
