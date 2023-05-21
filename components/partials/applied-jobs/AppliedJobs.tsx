'use client';
import Table from '@/components/ui/Table';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import Cookie from 'services/Cookie';
import Job from 'services/Job';
import User from 'services/User';
function AppliedList({ data }: { data: Apply[] }) {
  console.log(data);
  const columns = [
    {
      name: '#',
      selector: (row: IJob, i: number) => (
        <span className="font-medium ">{++i}</span>
      ),
      sortable: true,
    },
    {
      name: 'Thumbnail',
      selector: (row: IJob) => (
        <div className="avatar">
          <div className="w-10 rounded">
            <Image
              src={row.jobImageURL}
              alt="Job thumbnail"
              width={50}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
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
      name: 'Description',
      selector: (row: IJob) => (
        <span className="block text-sm font-medium leading-6 text-gray-900">
          {row.jobDescription.slice(0, 35).concat('...')}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: IJob) => (
        <div className="flex items-center gap-2">
          <button
            onClick={async () => {
              if (confirm('Are you sure you want cancel applying?')) {
                User.cancelApplying(
                  row.jobId.toString(),
                  Cookie.getClientCookie('token'),
                );
              }
            }}
            className="btn-error btn-xs btn space-x-1 rounded-md"
          >
            Cancel
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

export default AppliedList;
