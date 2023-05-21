'use client';
import React, { useRef, useState } from 'react';
import useSWR from 'swr';
import Category from 'services/Category';
import Job from 'services/Job';
import Cookie from 'services/Cookie';
const fetcher = async (...args: any[]) => await Category.getAll();
function CreateJob({updateState, data}) {
  const { data:categories, isLoading } = useSWR('categories', fetcher);
  const [payload, setPayload] = useState<JobPayload>({
    jobDescription: '',
    categoryId: '',
    jobImage: '',
    jobTitle: '',
  });
  const labelRef = useRef<HTMLLabelElement>(null);
  const handleChange = ({
    target: { value, name, files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (name != 'jobImage') {
      return setPayload({ ...payload, [name]: value });
    }
    setPayload({ ...payload, jobImage: files[0] });
  };
  const submit = async () => {
    const job = await Job.createJob(payload, Cookie.getClientCookie('token'));
    updateState([...data,job]);
    labelRef.current?.click();
  };
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
          ref={labelRef}
            htmlFor="my-modal-4"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">Create new job</h3>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="jobTitle"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                onChange={handleChange}
                value={payload.jobTitle}
                type="text"
                name="jobTitle"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Developer"
                required
              />
            </div>
            <div>
              <label
                htmlFor="jobDescription"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Description
              </label>
              <input
                onChange={handleChange}
                value={payload.jobDescription}
                type="text"
                multiple
                name="jobDescription"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="jobImage"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Job image
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="jobImage"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="categoryId"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                value={payload.categoryId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPayload({ ...payload, categoryId: e.target.value });
                }}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Choose category</option>
                {!isLoading &&
                  categories?.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
            <button
              onClick={submit}
              className="btn-primary btn mx-auto block w-fit"
            >
              Publish
            </button>
          </div>
        </label>
      </label>
    </>
  );
}

export default CreateJob;
