'use client';
import Table from '@/components/ui/Table';
import React, { useRef, useState } from 'react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import UpdateJob from './UpdateCategory';
import Cookie from 'services/Cookie';
import Category from 'services/Category';

function CategoriesList({ data }: { data: ICategory[] }) {
  const [selectedId, setSelectedId] = useState<number>(1);
  const labelRef = useRef<HTMLLabelElement>(null);
  const columns = [
    {
      name: '#',
      selector: (row: ICategory, i: number) => (
        <span className="font-medium ">{++i}</span>
      ),
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row: ICategory) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.name}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row: ICategory) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.description}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: ICategory) => (
        <div className="flex items-center gap-2">
          <button
            onClick={async () =>
              Category.deleteCategory(
                row.id.toString(),
                Cookie.getClientCookie('token'),
              )
            }
            className="btn-error btn-xs btn space-x-1 rounded-md"
          >
            <AiFillDelete size={18} color={'#f9fafb'} />
          </button>
          <button
            onClick={() => {
              setSelectedId((prev: number) => {
                return row.id;
              });
              labelRef.current?.click();
            }}
            className="btn-secondary btn-xs btn space-x-1 rounded-md"
          >
            <AiOutlineEdit size={18} color={'#f9fafb'} />
          </button>
          )
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      minWidth: '200px',
    },
  ];
  return (
    <>
      <UpdateJob id={selectedId} />
      <label htmlFor="update-category" ref={labelRef} className=""></label>
      <Table data={data} columns={columns} />
    </>
  );
}

export default CategoriesList;
