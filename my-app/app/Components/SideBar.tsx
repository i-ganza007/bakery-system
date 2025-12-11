"use client"
import { Plus } from "lucide-react"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupAction, 
  SidebarGroupContent, 
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "../../components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from '../../public/whitebakerylogo.webp'

export function AppSidebar() {
    const projects = [
        {name:'Dashboard',url:'/projects/chocolate-cake',icon:<svg width="40" height="40" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5372 0C9.0626 0 5.94621 1.43282 3.68951 3.68951L14.3282 14.3282V0.107462C13.7551 0.0358205 13.1461 0 12.5372 0ZM17.9103 3.79698V16.0118L8.16708 25.755C10.3521 27.546 13.0745 28.6564 16.1192 28.6564C23.0326 28.6564 28.6564 23.0326 28.6564 16.1192C28.6564 9.81483 23.9639 4.69249 17.9103 3.79698ZM3.25967 8.48947C1.25372 10.4238 0 13.1103 0 16.1192C0 19.558 1.64774 22.5311 4.15518 24.5012L11.785 16.8715L3.25967 8.48947Z" fill="white"/>
</svg>
},
        {name:'Customer',url:'/projects/croissants',icon:<svg width="40" height="40" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3282 0C10.388 0 7.16411 4.0119 7.16411 8.95513C7.16411 13.8984 10.388 17.9103 14.3282 17.9103C18.2685 17.9103 21.4923 13.8984 21.4923 8.95513C21.4923 4.0119 18.2685 0 14.3282 0ZM6.84172 17.9103C3.04475 18.0894 0 21.2058 0 25.0744V28.6564H28.6564V25.0744C28.6564 21.2058 25.6475 18.0894 21.8147 17.9103C19.8804 20.0953 17.2297 21.4923 14.3282 21.4923C11.4268 21.4923 8.77603 20.0953 6.84172 17.9103Z" fill="#F7E9B2"/>
</svg>
},
        {name:'Products',url:'/projects/sourdough-bread',icon:<svg width="35" height="40" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1875 7.8125V6.25C17.1875 2.80371 14.3837 0 10.9375 0C7.49121 0 4.6875 2.80371 4.6875 6.25V7.8125H0V21.0938C0 23.2511 1.74888 25 3.90625 25H17.9688C20.1261 25 21.875 23.2511 21.875 21.0938V7.8125H17.1875ZM7.8125 6.25C7.8125 4.52686 9.21436 3.125 10.9375 3.125C12.6606 3.125 14.0625 4.52686 14.0625 6.25V7.8125H7.8125V6.25ZM15.625 12.1094C14.9778 12.1094 14.4531 11.5847 14.4531 10.9375C14.4531 10.2903 14.9778 9.76562 15.625 9.76562C16.2722 9.76562 16.7969 10.2903 16.7969 10.9375C16.7969 11.5847 16.2722 12.1094 15.625 12.1094ZM6.25 12.1094C5.60278 12.1094 5.07812 11.5847 5.07812 10.9375C5.07812 10.2903 5.60278 9.76562 6.25 9.76562C6.89722 9.76562 7.42188 10.2903 7.42188 10.9375C7.42188 11.5847 6.89722 12.1094 6.25 12.1094Z" fill="#F7E9B2"/>
</svg>
},
        {name:'Orders',url:'/projects/pastry-collection',icon:<svg width="40" height="40" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3282 0C6.41188 0 0 6.41188 0 14.3282C0 22.2446 6.41188 28.6564 14.3282 28.6564C22.2446 28.6564 28.6564 22.2446 28.6564 14.3282C28.6564 6.41188 22.2446 0 14.3282 0ZM21.4923 6.37605L24.0714 8.95513L12.5372 20.4893L6.37605 14.3282L8.95513 11.7491L12.5372 15.3312L21.4923 6.37605Z" fill="#F7E9B2"/>
</svg>
},
        {name:'Reports',url:'/projects/custom-orders',icon:<svg width="40" height="40" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3282 0C10.388 0 7.16411 3.22385 7.16411 7.16411C7.16411 10.8894 5.30144 14.2566 2.36416 16.6924C0.895513 17.9103 0 19.6297 0 21.4923H28.6564C28.6564 19.6297 27.7967 17.9103 26.2923 16.6924C23.355 14.2566 21.4923 10.8894 21.4923 7.16411C21.4923 3.22385 18.3043 0 14.3282 0ZM10.7462 25.0744C10.7462 27.0445 12.3581 28.6564 14.3282 28.6564C16.2983 28.6564 17.9103 27.0445 17.9103 25.0744H10.7462Z" fill="#F7E9B2"/>
</svg>
},
        {name:'Manage Staff',url:'/projects/custom-orders',icon:<svg width="35" height="40" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3036 8.4375C25.6866 8.4375 26 8.15273 26 7.80469V5.69531C26 5.34727 25.6866 5.0625 25.3036 5.0625H24.1429V2.53125C24.1429 1.13379 22.8951 0 21.3571 0H2.78571C1.24777 0 0 1.13379 0 2.53125V24.4688C0 25.8662 1.24777 27 2.78571 27H21.3571C22.8951 27 24.1429 25.8662 24.1429 24.4688V21.9375H25.3036C25.6866 21.9375 26 21.6527 26 21.3047V19.1953C26 18.8473 25.6866 18.5625 25.3036 18.5625H24.1429V15.1875H25.3036C25.6866 15.1875 26 14.9027 26 14.5547V12.4453C26 12.0973 25.6866 11.8125 25.3036 11.8125H24.1429V8.4375H25.3036ZM12.0714 6.75C14.1201 6.75 15.7857 8.26348 15.7857 10.125C15.7857 11.9865 14.1201 13.5 12.0714 13.5C10.0228 13.5 8.35714 11.9865 8.35714 10.125C8.35714 8.26348 10.0228 6.75 12.0714 6.75ZM18.5714 19.2375C18.5714 19.7965 17.9911 20.25 17.2714 20.25H6.87143C6.15179 20.25 5.57143 19.7965 5.57143 19.2375V18.225C5.57143 16.548 7.3183 15.1875 9.47143 15.1875H9.76161C10.4754 15.4564 11.2531 15.6094 12.0714 15.6094C12.8897 15.6094 13.6732 15.4564 14.3812 15.1875H14.6714C16.8246 15.1875 18.5714 16.548 18.5714 18.225V19.2375Z" fill="#F7E9B2"/>
</svg>
}
    ]
  return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent className="bg-[#6B3D24]">
                    <SidebarGroup className="flex flex-col gap-20 mt-25 justify-center items-center">
                        <SidebarGroupLabel><Image src={Logo} alt="image logo"/></SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="flex flex-col gap-5 items-center justify-center">
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                <SidebarMenuButton asChild className="flex items-center justify-center gap-5 p-8">
                                    <a href={project.url}>
                                    <span className="w-8 flex items-center justify-center shrink-0">
                                    {project.icon}
                                    </span>
                                    <span className="text-[#F1EDDD] text-3xl">{project.name}</span>
                                    </a>
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                        <Button  size={"lg"} className="w-72 bg-[#F99333] text-white text-2xl p-8 flex justify-center items-center gap-5">
                            Logout
                            <span className="w-8 flex items-center justify-center shrink-0">
                                <svg width="40" height="40" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2676 10.2061L16.0645 18.4092C15.332 19.1417 14.0625 18.629 14.0625 17.5792V12.8917H7.42188C6.77246 12.8917 6.25 12.3692 6.25 11.7198V7.03229C6.25 6.38287 6.77246 5.86041 7.42188 5.86041H14.0625V1.17291C14.0625 0.127992 15.3271 -0.389587 16.0645 0.342835L24.2676 8.54596C24.7217 9.00494 24.7217 9.74713 24.2676 10.2061ZM9.375 18.1651V16.212C9.375 15.8897 9.11133 15.626 8.78906 15.626H4.6875C3.82324 15.626 3.125 14.9278 3.125 14.0635V4.68854C3.125 3.82428 3.82324 3.12604 4.6875 3.12604H8.78906C9.11133 3.12604 9.375 2.86237 9.375 2.5401V0.586976C9.375 0.26471 9.11133 0.0010385 8.78906 0.0010385H4.6875C2.09961 0.0010385 0 2.10065 0 4.68854V14.0635C0 16.6514 2.09961 18.751 4.6875 18.751H8.78906C9.11133 18.751 9.375 18.4874 9.375 18.1651Z" fill="#F7E9B2"/>
                                </svg>
                            </span>
                        </Button>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
  )
}