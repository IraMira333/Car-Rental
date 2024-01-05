import Select from 'react-select';

const CustomSelect = ({ onChange, placeholder, options, value }) => {
  // const defaultValue = (options, value) => {
  //   return options ? options.find(option => option.value === value) : 'Full';
  // };

  return (
    <Select
      options={options}
      placeholder={placeholder}
      onChange={value => onChange(value)}
      // value={defaultValue(options, value)}
      styles={{
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: 'transform 0.5s',
          transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
        }),
        control: base => ({
          ...base,
          backgroundColor: '#f7f7fb',
          borderRadius: '14px',
          border: 'none',
          output: 'none',
          height: '48px',
          '@media only screen and (max-width: 424px)': {
            ...base['@media only screen and (max-width: 424px)'],
            height: '38px',
          },
        }),
        placeholder: base => ({
          ...base,
          color: '#121417',
          margin: '0',
        }),
        valueContainer: styles => ({
          ...styles,
          paddingLeft: '18px',
          '@media only screen and (max-width: 424px)': {
            ...styles['@media only screen and (max-width: 424px)'],
            paddingLeft: '12px',
          },
        }),
      }}
    />
  );
};

export default CustomSelect;
