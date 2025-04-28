import React from "react";

const NavigationMenu = () => {
  return (
    <nav className="flex gap-10 ml-2.5 max-w-full text-xl leading-tight text-black w-[790px] mt-10">
      <a href="#" className="cursor-pointer">
        Início
      </a>
      <a href="#" className="grow shrink w-[91px] cursor-pointer">
        Presentes
      </a>
      <a href="#" className="grow shrink w-[90px] cursor-pointer">
        Sobre nós
      </a>
      <a href="#" className="cursor-pointer">
        Local
      </a>
      <a href="#" className="grow shrink w-[171px] cursor-pointer">
        Dicas e Instruções
      </a>
      <a href="#" className="cursor-pointer">
        Fotos
      </a>
    </nav>
  );
};

export default NavigationMenu;
