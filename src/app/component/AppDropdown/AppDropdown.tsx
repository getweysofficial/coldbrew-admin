import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

interface DropdownMenuItem {
  key: string;
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface DynamicDropdownProps {
  menuItems: DropdownMenuItem[];
  buttonText: string;
  placement?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight";
  buttonClassName?: string;
  arrow?: boolean;
}

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({
  menuItems,
  buttonText,
  placement = "bottomCenter",
  buttonClassName = "",
  arrow = true,
}) => {
  const items: MenuProps["items"] = menuItems.map((item) => ({
    key: item.key,
    label: item.href ? (
      <a target="_blank" rel="noopener noreferrer" href={item.href}>
        {item.label}
      </a>
    ) : (
      <span onClick={item.onClick}>{item.label}</span>
    ),
    disabled: item.disabled,
  }));

  return (
    <>
      <style>{`
        .custom-dropdown .ant-dropdown-menu-item {
          padding: 10px 16px;
        }

        .custom-dropdown .ant-dropdown-menu-item:hover {
          background-color: #BD4E05 !important;
          color: white !important;
        }

        .ant-btn {
        //   border: 1px solid green;
          padding: 18px 16px; /* Add padding */
        //   color: green;
        //   transition: all 0.3s ease;
        color: #BD4E05 !important;
          border-color: #BD4E05 !important;
        }

         .ant-btn:hover {
          color: #BD4E05 !important;
          border-color: #BD4E05 !important;
        }
      `}</style>

      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            menu={{ items }}
            placement={placement}
            arrow={arrow ? { pointAtCenter: true } : undefined}
            overlayClassName="custom-dropdown"
          >
            <Button className={buttonClassName}>{buttonText}</Button>
          </Dropdown>
        </Space>
      </Space>
    </>
  );
};

export default DynamicDropdown;
