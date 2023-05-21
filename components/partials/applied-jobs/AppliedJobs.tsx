'use client';
import Table from '@/components/ui/Table';
import Link from 'next/link';
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
function AppliedList({ data }: { data: Apply[] }) {
  const columns = [
    {
      name: '#',
      selector: (row: Apply, i: number) => (
        <span className="font-medium ">{++i}</span>
      ),
      sortable: true,
    },
    {
      name: 'Full name',
      selector: (row: Apply) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.firstName.concat(' ', row.lastName)}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: Apply) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.email}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Apply date',
      selector: (row: Apply) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.applyDate}
        </span>
      ),
      sortable: true,
    },
  ];
  return <Table data={data} columns={columns} />;
}

export default AppliedList;
