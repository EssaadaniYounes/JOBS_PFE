import CategoriesList from '@/components/partials/categories/CategoriesList';
import CreateCategory from '@/components/partials/categories/CreateJob';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Category from 'services/Category';

async function pages() {
  const data = await Category.getAll();

  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h2 className="py-4 pl-2 text-3xl font-medium">Categories list</h2>
        <label htmlFor="create-category" className="btn">
          Create new category <AiOutlinePlus size={25} />
        </label>
      </div>
      <CreateCategory />
      <CategoriesList data={data} />
    </div>
  );
}

export default pages;
