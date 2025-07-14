import { useState } from "react";

import diploma from "../../assets/Certificates/Diploma.jpg";
import jblTec from "../../assets/Certificates/JBLTec.png";
import desafioTec from "../../assets/Certificates/DesafioTec.jpg";
import hackerCidadao from "../../assets/Certificates/HackerCidadao.jpeg";
import sistemaBibliotecario from "../../assets/Certificates/sistema bibliotecario (1).png";
import linkedinComunicacao from "../../assets/Certificates/LinkedinComunicacao.jpeg";
import dioJS from "../../assets/Certificates/DioJS.jpeg";
import dioHTMLCSS from "../../assets/Certificates/DioHTMLeCSS.jpeg";
import dioModuloJS from "../../assets/Certificates/DioModuloJS.jpeg";
import dioProgramacao from "../../assets/Certificates/DioProgramacao.jpeg";
import linkedinGestaoTempo from "../../assets/Certificates/LinkedinGestaoTempo.jpeg";
import impulso from "../../assets/Certificates/Impulso.jpeg";

type Certificado = {
  titulo: string;
  data: string;
  imagem: string;
};

const certificados: Certificado[] = [
  { titulo: "Diploma Técnico em ADS – ETE JBL", data: "Dezembro 2023", imagem: diploma },
  { titulo: "Palestrante – Biblioteca Inteligente", data: "Outubro 2024", imagem: jblTec },
  { titulo: "Desafío Tec – Participação no Evento", data: "Novembro 2023", imagem: desafioTec },
  { titulo: "Hacker Cidadão – Participação no Evento", data: "Abril 2023", imagem: hackerCidadao },
  { titulo: "Microsoft Power BI - Bradesco", data: "Maio 2022", imagem: sistemaBibliotecario },
  { titulo: "Fundamentos de Comunicação - LinkedIn", data: "Junho 2023", imagem: linkedinComunicacao },
  { titulo: "Sintaxe e Operadores JS - DIO", data: "Março 2023", imagem: dioJS },
  { titulo: "HTML e CSS - DIO", data: "Maio 2022", imagem: dioHTMLCSS },
  { titulo: "Módulos JavaScript - DIO", data: "Março 2023", imagem: dioModuloJS },
  { titulo: "Programação com JS (DIO)", data: "Julho 2022", imagem: dioProgramacao },
  { titulo: "Gestão do Tempo - LinkedIn", data: "Junho 2023", imagem: linkedinGestaoTempo },
  { titulo: "Impulso React - DIO", data: "Abril 2023", imagem: impulso },
];

const CertificateSection = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
  const [tituloSelecionado, setTituloSelecionado] = useState<string>("");

  const abrirModal = (imagem: string, titulo: string) => {
    setImagemSelecionada(imagem);
    setTituloSelecionado(titulo);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setImagemSelecionada(null);
    setTituloSelecionado("");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        {certificados.map((cert, index) => (
          <div
            key={index}
            onClick={() => abrirModal(cert.imagem, cert.titulo)}
            className="cursor-pointer w-full h-auto bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md backdrop-blur-md hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="w-full relative">
              <img
                src={cert.imagem}
                alt={cert.titulo}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="py-4 px-3 flex-grow">
              <h3 className="text-lg font-semibold text-white">{cert.titulo}</h3>
              <p className="text-sm text-gray-300 mt-1">{cert.data}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={fecharModal}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-white text-2xl"
              onClick={fecharModal}
            >
              &times;
            </button>
            <h2 className="text-white text-center text-xl mb-4">{tituloSelecionado}</h2>
            <img
              src={imagemSelecionada ?? ""}
              alt="Certificado"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateSection;
