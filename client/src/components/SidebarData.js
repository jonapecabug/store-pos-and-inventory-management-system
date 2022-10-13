import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Shop",
    icon: <StorefrontIcon sx={{ fontSize: 50 }} />,
    link: "/",
  },
  {
    title: "Manage Products",
    icon: <ShoppingCartIcon sx={{ fontSize: 50 }} />,
    link: "/ManageProducts",
  },
  {
    title: "Customer",
    icon: <GroupIcon sx={{ fontSize: 50 }} />,
    link: "/Customer",
  },
  {
    title: "Manage Customer",
    icon: <ManageAccountsIcon sx={{ fontSize: 50 }} />,
    link: "/ManageCustomer",
  },
  {
    title: "Report",
    icon: <ReceiptLongIcon sx={{ fontSize: 50 }} />,
    link: "/Report",
  },
  {
    title: "Log-out",
    icon: <LogoutIcon sx={{ fontSize: 50 }} />,
    link: "/Customer",
  },
];
