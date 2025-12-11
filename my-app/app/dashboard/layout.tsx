import { AppSidebar } from "../Components/SideBar";
import { SidebarInset } from "../../components/ui/sidebar";

export default function RootLayout({children}: { children: React.ReactNode }){
    return (
        <div className="flex">
            <AppSidebar/>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}