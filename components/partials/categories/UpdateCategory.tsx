'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import Category from 'services/Category';
import Cookie from 'services/Cookie';
function updateCategory({ id }: { id: number }) {
  const { data: category } = useSWR('categories' + id, async () =>
    Category.getCategoryById(id.toString()),
  );
  const [payload, setPayload] = useState<CategoryPayload>({
    name: category?.name,
    description: category?.description,
  });

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    return setPayload({ ...payload, [name]: value });
  };
  const submit = async () => {
    await Category.updateCategory(
      id.toString(),
      payload,
      Cookie.getClientCookie('token'),
    );
  };
  return (
    <>
      <input type="checkbox" id="update-category" className="modal-toggle" />
      <label htmlFor="update-category" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="update-category"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Update Category</h3>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                value={payload.name}
                type="text"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Developer"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                onChange={handleChange}
                value={payload.description}
                type="text"
                multiple
                name="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="..."
                required
              />
            </div>
            <button
              onClick={submit}
              className="btn-primary btn mx-auto block w-fit"
            >
              Save
            </button>
          </div>
        </label>
      </label>
    </>
  );
}

export default updateCategory;
