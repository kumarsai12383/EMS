import { LayoutDashboard, Wallet, Landmark, ChartColumn ,UserRound,Settings} from "lucide-react";
export const MainNavs = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/app/dashboard",
    },
    {
      icon: Wallet,
      label: "Employees",
      path: "/app/employees",
    },
    {
      icon: Landmark,
      label: "Departments",
      path: "/app/departments",
    },
    {
      icon: ChartColumn,
      label: "Analytics",
      path: "/app/analytics",
    },
  ];

  export const AccountNavs = [
    {
      icon: UserRound,
      label: "Profile",
      path: "/app/profile",
    },
    {
        icon: Settings,
        label:"Settings",
        path:"/app/settings"
    }
  ];