import { SideBar } from "../Components/SideBar";

export default function RootLayout({children}: { children: React.ReactNode }){
    return (
        <div>
            <div>
                <SideBar/>
            </div>
            <div></div>
        </div>
    )
}