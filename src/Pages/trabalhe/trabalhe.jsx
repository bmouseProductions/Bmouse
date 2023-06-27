import React, { useState } from "react";
import styles from "../../style";
import grupo2 from "../../assets/Prancheta1.png";
import { enviarEmail } from "../../api/api";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Trabalhe() {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    // Obtém os dados preenchidos pelo usuário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const modalidade = document.getElementById("modalidade").value;
    const especialidade = document.getElementById("especialidade").value;
    const mensagem = document.getElementById("mensagem").value;
    const curriculo = document.getElementById("curriculo").files[0];

    if (curriculo instanceof Blob) {
      // Converte o arquivo de currículo para base64
      const reader = new FileReader();
      reader.readAsDataURL(curriculo);
      reader.onload = function () {
        const curriculoFile = reader.result;

        // Atualiza o estado do componente para indicar que está carregando
        setLoading(true);

        // Faz a requisição HTTP para enviar o e-mail
        enviarEmail({
          nome,
          telefone,
          email,
          modalidade,
          especialidade,
          mensagem,
          curriculoFile,
          curriculoName: curriculo.name,
        })
          .then((response) => {
            console.log("E-mail enviado:", response);
            setEnviado(true);
          })
          .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            // Aqui você pode exibir uma mensagem de erro para o usuário
          })
          .finally(() => {
            // Atualiza o estado do componente para indicar que o carregamento acabou
            setLoading(false);
          });
      };
    } else {
      console.error("Valor de curriculo não é um objeto Blob");
    }
  }

  return (
    <div className="bg-black min-h-screen mb-44 mt-10 relative z-10">
      {/* Tela de carregamento */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 cont. 018-8V0a8 8 0 000 16h-4zm6-3.291A7.962 7.962 0 0120 12h-4c0 3.042-1.135 5.824-3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="text-gray-900">Carregando...</span>
            </div>
          </div>
        </div>
      )}
      <div className="text-center ">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">Junte-se à nossa equipe </span>{" "}
            {"  "}
          </h1>
        </div>
        <p className={`${styles.paragraph} text-center `}>
          Estamos sempre procurando por pessoas talentosas e motivadas para se
          juntar à nossa equipe e fazer parte do nosso sucesso.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start">
        <div className="lg:w-1/2">
          <img
            className="w-[500px] h-auto mx-auto"
            src={grupo2}
            alt="Equipe da nossa empresa"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trabalhe Conosco
          </h2>
          <p className="text-gray-300 mb-8">
            Preencha o formulário abaixo para se candidatar a uma das nossas
            vagas.
          </p>
          <form
            className="bg-gray-900 rounded-lg shadow-lg p-8 w-full"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-white font-bold mb-2"
                >
                  Nome
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-white font-bold mb-2"
                >
                  Telefone
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telefone"
                  type="text"
                  placeholder="(00) 0000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Seu email"
                />
              </div>
              <div>
                <label
                  htmlFor="modalidade"
                  className="block text-white font-bold mb-2"
                >
                  Modalidade de trabalho
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="modalidade"
                >
                  <option value="estagio">Estágio</option>
                  <option value="clt">CLT</option>
                  <option value="freelancer">Freelancer</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="especialidade"
                  className="block text-white font-bold mb-2"
                >
                  Especialidade
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="especialidade"
                >
                  <option value="designer">Designer</option>
                  <option value="ilustrador">Ilustrador</option>
                  <option value="redator">Redator</option>
                  <option value="editor-de-video">Editor de Vídeo</option>
                  <option value="desenvolvedor-web">Desenvolvedor WEB</option>
                  <option value="outra">Outra</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="mensagem"
                  className="block text-white font-bold mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mensagem"
                  rows="5"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="curriculo"
                  className="block text-white font-bold mb-2"
                >
                  Enviar currículo
                </label>
                <input type="file" id="curriculo" className="text-[#d3d3d3]" />
              </div>
            </div>
            <div className="mt-6">
              <button
                className={`bg-${enviado ? "green" : "blue"}-500 hover:bg-${
                  enviado ? "green" : "blue"
                }-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="submit"
              >
                {loading ? (
                  <span>
                    Enviando...{" "}
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <>
                    {enviado ? (
                      <>
                        Enviado{" "}
                        <FontAwesomeIcon icon={faCheck} className="ml-2" />
                      </>
                    ) : (
                      "Enviar"
                    )}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Trabalhe;
