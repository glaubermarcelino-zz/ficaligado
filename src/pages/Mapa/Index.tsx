import React from 'react';
import Maps from '../../components/Maps/Index';
import HeaderUser from '../../components/HeaderUser/Index';

const Localizacao: React.FC = () => {
  return (
    <>
      <HeaderUser
          titulo={'Danilo Nunes'}
          ImgSource={'../../assets/images/user-rounded.png'}
        />
      <Maps />
    </>
  );
};

export default Localizacao;
