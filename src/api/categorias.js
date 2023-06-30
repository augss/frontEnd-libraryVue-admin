import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get('/categories/');
    return data;
  }
  async adicionarCategoria(category) {
    const { data } = await axios.post('/categories/', category);
    return data;
  }
  async atualizarCategoria(category) {
    const { data } = await axios.put(`/categories/${categories.id}/`, category);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`/categories/${id}/`);
    return data;
  }
}
