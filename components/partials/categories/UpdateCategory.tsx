'use client';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Category from 'services/Category';
import Cookie from 'services/Cookie';
function updateCategory({ id, updateState, data }: { id: number }) {
  const [payload, setPayload] = useState<CategoryPayload>({
    name: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPayload({ name: '', description: '' });
    Category.getCategoryById(id.toString()).then((data) => {
      setPayload(data);
    });
  }, [id]);
  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    return setPayload({ ...payload, [name]: value });
  };
  const submit = async () => {
    setLoading(true);
    const resCat = await Category.updateCategory(
      id.toString(),
      payload,
      Cookie.getClientCookie('token'),
    );
    const newCategories = data.map((c) => {
      if (c.id == resCat.id) {
        return { ...resCat };
      }
      return c;
    });
    updateState(newCategories);
    setLoading(false);
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
              disabled={loading}
              onClick={submit}
              className="btn-primary btn mx-auto block w-fit"
            >
              {!loading ? 'Save' : 'Saving..'}
            </button>
          </div>
        </label>
      </label>
    </>
  );
}

export default updateCategory;
