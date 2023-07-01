import axios from 'axios';
export default class CategoriesApi {
  async searchAllCategories() {
    const { data } = await axios.get('/categories/');
    return data;
  }
  async addCategory(category) {
    const { data } = await axios.post('/categories/', category);
    return data;
  }
  async updateCategory(category) {
    const { data } = await axios.put(`/categories/${categories.id}/`, category);
    return data;
  }
  async deleteCategory(id) {
    const { data } = await axios.delete(`/categories/${id}/`);
    return data;
  }
}
