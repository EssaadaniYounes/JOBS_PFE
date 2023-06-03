'use client';
import React, { useState, useRef } from 'react';
import Category from 'services/Category';
import Cookie from 'services/Cookie';
function CreateCategory({ updateState, data }) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [payload, setPayload] = useState<CategoryPayload>({
    name: '',
    description: '',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    return setPayload({ ...payload, [name]: value });
  };
  const submit = async () => {
    setLoading(true);
    const cat = await Category.createCategory(
      payload,
      Cookie.getClientCookie('token'),
    );
    alert('Category created ');
    updateState([...data, cat]);
    labelRef.current?.click();
    setLoading(false);
  };
  return (
    <>
      <input type="checkbox" id="create-category" className="modal-toggle" />
      <label htmlFor="create-category" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            ref={labelRef}
            htmlFor="create-category"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Create new Category</h3>
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
                Category Description
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
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </label>
      </label>
    </>
  );
}

export default CreateCategory;
