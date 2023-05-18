'use client';
import Table from '@/components/ui/Table';
import Link from 'next/link';
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
function JobsList({ data }: { data: IJob[] }) {
  const columns = [
    {
      name: '#',
      selector: (row: IJob, i: number) => (
        <span className="font-medium ">{++i}</span>
      ),
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row: IJob) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.jobTitle.slice(0, 20)}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row: IJob) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.categoryName}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: IJob) => (
        <div className="flex items-center gap-2">
          <Link  href={`/admin/jobs/job/${row.jobId}`} className="btn-info btn-xs btn space-x-1 rounded-md">
            <AiFillEye size={18} color={'#f9fafb'} />
          </Link>
          <button className="btn-error btn-xs btn space-x-1 rounded-md">
            <AiFillDelete size={18} color={'#f9fafb'} />
          </button>
          <button className="btn-secondary btn-xs btn space-x-1 rounded-md">
            <AiFillDelete size={18} color={'#f9fafb'} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      minWidth: '200px',
    },
  ];
  return <Table data={data} columns={columns} />;
}

export default JobsList;
