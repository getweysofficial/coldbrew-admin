"use client";
import React from "react";
import { Table, TableProps } from "antd";
import type { TableColumnsType } from "antd";

const tableStyles = `
  .custom-table .ant-table-thead > tr > th {
    background-color: #BE5103 !important; /* Custom orange background */
    color: #ffffff !important; /* White text color */
    font-family: 'hero', sans-serif; /* Fallback to sans-serif */
    font-size: 14px; /* Default font size */
    padding: 12px !important; /* Consistent padding */
  }

  .custom-table .ant-table-tbody > tr > td {
    font-size: 14px; /* Slightly smaller font for body */
  }

  /* Ensure table is scrollable horizontally on small screens */
  .custom-table {
    width: 100%;
    overflow-x: auto;
    box-shadow: 
  }

  /* Sticky headers for vertical scrolling */
  .custom-table .ant-table-thead > tr > th {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 640px) {
    .custom-table .ant-table-thead > tr > th,
    .custom-table .ant-table-tbody > tr > td {
      font-size: 12px; /* Smaller font size on mobile */
      padding: 8px !important; /* Reduced padding */
    }

    /* Optionally hide less critical columns (example: hide columns with 'hide-on-mobile' class) */
    .custom-table .hide-on-mobile {
      display: none;
    }
  }
`;

interface DynamicTableProps<T> {
  columns: TableColumnsType<T>;
  data: T[];
  rowSelection?: TableProps<T>["rowSelection"];
  className?: string;
}

function DynamicTable<T>({
  columns,
  data,
  rowSelection,
  className = "",
}: DynamicTableProps<T>) {
  return (
    <div className="w-full">
      <style>{tableStyles}</style>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        className={`custom-table ${className}`}
        pagination={{
          pageSize: 10,
          responsive: true,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
        }}
        rowKey={(record: any) => record.key}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

export default DynamicTable;
