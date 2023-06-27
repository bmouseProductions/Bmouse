import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const ListBlog = async (values) => {
  return await api.get("/blog", values);
};

export const ListBlogId = async (values) => {
  const response = await api.get(`/blog/${values}`);
  const photoUrl = `https://bmouse.herokuapp.com/uploads/${response.data.photo}`;
  return { ...response.data, photoUrl };
};

export const enviarEmail = async ({
  nome,
  telefone,
  email,
  modalidade,
  especialidade,
  mensagem,
  curriculoFile,
  curriculoName,
}) => {
  return await api.post("/send-email", {
    nome,
    telefone,
    email,
    modalidade,
    especialidade,
    mensagem,
    curriculoFile,
    curriculoName,
  });
};
