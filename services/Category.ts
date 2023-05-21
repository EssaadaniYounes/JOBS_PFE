import Fetch from '@/lib/fetch';

class Category {
  static async getAll(): Promise<ICategory[]> {
    const data = await Fetch.getAllAxios('categories');
    return data;
  }
  static async getCategoryById(id: string): Promise<ICategory> {
    const data = await Fetch.getAllAxios(`categories/${id}`);
    return data;
  }
  static async createCategory(payload: any, token: string): Promise<ICategory> {
    const data = await Fetch.post('categories', payload, {
      Authorization: token,
    });
    return data;
  }
  static async updateCategory(
    id: string,
    payload: any,
    token: string,
  ): Promise<void> {
    const data = await Fetch.put('categories/' + id, payload, {
      Authorization: token,
    });
  }

  static async deleteCategory(id: string, token: string): Promise<void> {
    const data = await Fetch.delete('categories/' + id, {
      Authorization: token,
    });
  }
}
export default Category;
