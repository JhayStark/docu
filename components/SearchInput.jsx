import { useState, useEffect, useRef } from 'react';
import api from '@/utils/axiosInstance';
import useSwr from 'swr';

const patientFetcher = url => api.get(url).then(res => res.data.results);

const SearchInput = ({ setSelectedOption, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onSearch, setOnSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  const { data: patients } = useSwr(
    `/api/interventions/all_patients/?limit=5&search=${onSearch}`,
    patientFetcher
  );

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOnSearch(searchText);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText, 500]);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleOptionClick = option => {
    setSearchText(`${option['first_name']} ${option['last_name']}`);
    setSelectedOption(option.id);
    setIsOpen(false);
  };

  const handleInputChange = event => {
    const inputText = event.target.value;
    setSearchText(inputText);
    setSelectedOption(null);
    setIsOpen(true);
  };

  return (
    <div className='relative w-full' ref={dropDownRef}>
      <input
        type='text'
        value={searchText}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        placeholder='Patient Name'
        className='px-5 focus:outline-none bg-inherit'
      />
      {isOpen && (
        <ul className='absolute w-full mt-1 bg-white border border-t-0 rounded-b'>
          {patients?.map(option => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`p-2 cursor-pointer ${
                selectedOption === option ? 'bg-gray-100' : ''
              }`}
            >
              {`${option['first_name']} ${option['last_name']}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
