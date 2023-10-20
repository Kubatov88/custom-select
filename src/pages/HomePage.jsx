import React, { useState } from 'react';
import SelectBox from '../components/SelectBox';

const HomePage = () => {
  const options1 = ['Алкольные', 'Не алкольные', 'Сырые'];
  const options2 = ['Норма', 'Брак', 'Прос-ка'];

  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);

  return (
    <div className="container">
      <SelectBox
        options={options1}
        label={selectedOption1}
        onSelect={setSelectedOption1}
      />
      <SelectBox
        options={options2}
        label={selectedOption2}
        onSelect={setSelectedOption2}
      />
    </div>
  );
}

export default HomePage;
