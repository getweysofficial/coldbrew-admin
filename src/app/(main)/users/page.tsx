"use client";
import React, { useEffect, useState } from "react";
import type { TableColumnsType } from "antd";
import Image from "next/image";
import FormInput from "@/app/component/AppInput/AppInput";
import DynamicTable from "@/app/component/AppTable/AppTable";
import logo from "../../../../public/images/coldbrew-single.png";
import { supabase } from "@/utils/superbaseAdmin";
import { DataType } from "@/Types/types";
import DynamicDropdown from "@/app/component/AppDropdown/AppDropdown";
import { FaEye } from "react-icons/fa";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";

function Users() {
  const [data, setData] = useState<DataType[]>([]);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const columns: TableColumnsType<DataType> = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Country", dataIndex: "country" },
    { title: "City", dataIndex: "city" },
    {
      title: "Created At",
      dataIndex: "created_at",
      render: (text: string) =>
        text
          ? new Date(text).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          : "-",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: boolean) =>
        status ? (
          <p className="bg-green-50 text-green-600 rounded border text-center px-2 py-0.5 text-sm">
            Active
          </p>
        ) : (
          <p className="bg-red-50 text-red-500 rounded border text-center px-2 py-0.5 text-sm">
            Inactive
          </p>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: DataType) => (
        <div className="flex items-center gap-1 justify-center">
          <p className="border p-1 rounded hover:bg-amber-700 hover:text-white cursor-pointer">
            <FaEye onClick={() => handleView(record)} />
          </p>
          <p className="border p-1 rounded hover:bg-amber-700 hover:text-white cursor-pointer">
            <MdOutlineAirplanemodeInactive
              onClick={() => handleInactive(record)}
            />
          </p>
        </div>
      ),
    },
  ];

  const filterMenuItems = [
    {
      key: "active",
      label: "Active",
      onClick: () => setStatusFilter("active"),
    },
    {
      key: "inactive",
      label: "Inactive",
      onClick: () => setStatusFilter("inactive"),
    },
    {
      key: "reset",
      label: "Reset",
      onClick: () => setStatusFilter(null),
    },
  ];

  const handleView = (record: DataType) => {
    console.log("View user:", record);
  };

  const handleInactive = (record: DataType) => {
    console.log("Toggle inactive for user:", record);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        "selectedRowKeys:",
        selectedRowKeys,
        "selectedRows:",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data: users, error } = await supabase
          .from("users")
          .select("id, name, email, country, city, created_at, status");

        if (error) {
          console.error("Error fetching users:", error.message);
          return;
        }

        let formattedData: DataType[] | any = (users || []).map((user) => ({
          key: user.id,
          name: user.name,
          email: user.email,
          country: user.country,
          city: user.city,
          created_at: user.created_at,
          status: user.status === true || user.status === "true",
        }));

        // Search filter: name, email, country, city
        if (searchTerm) {
          const lower = searchTerm.toLowerCase();
          formattedData = formattedData.filter((user: any) =>
            [user.name, user.email, user.country, user.city].some((field) =>
              field?.toLowerCase().includes(lower)
            )
          );
        }

        // Status filter
        if (statusFilter === "active") {
          formattedData = formattedData.filter(
            (user: any) => user.status === true
          );
        } else if (statusFilter === "inactive") {
          formattedData = formattedData.filter(
            (user: any) => user.status === false
          );
        }

        setData(formattedData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm, statusFilter]);

  return (
    <>
      <div className="mb-6 mt-2 text-left">
        <h1 className="relative inline-block text-2xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
          Users
          <span className="block h-1 bg-[#BE5103] rounded mt-1 w-1/2 mx-auto" />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div className="w-full md:w-[400px]">
          <FormInput
            placeholder="Search Name, Email, Country, City"
            variant="rounded"
            wrapperClassName="w-full"
            leftIcon={<Image src={logo} alt="User" width={20} height={20} />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="w-full md:w-auto">
          <DynamicDropdown
            menuItems={filterMenuItems}
            buttonText="Filter User Status"
            placement="bottomRight"
            buttonClassName="py-10"
          />
        </div>
      </div>

      <div className="my-5">
        <DynamicTable
          columns={columns}
          data={data}
          rowSelection={rowSelection}
          className="w-full"
        />
      </div>
    </>
  );
}

export default Users;
