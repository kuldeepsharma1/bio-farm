"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
    Bell, ArrowUpRight, ArrowDownRight, DollarSign,
    ShoppingCart, Users, Activity, MoreHorizontal, Package, Clock, Pencil, Trash2,
    Loader2,
    ChevronRight
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    PieChart, Pie, Cell, BarChart, Bar
} from "recharts";
import Image from "next/image";
import Link from "next/link";
import { getBlogs, deleteBlog } from "@/actions/blog";
import {
    AlertDialog, AlertDialogAction,
    AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Types ---
interface User {
    name: string;
    email: string;
    image: string;
    role: string;
}

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    changeType: "positive" | "negative";
    icon: React.ElementType;
    color: string;
}

interface SectionCardProps {
    title: string;
    value: string;
}

interface SalesData {
    label: string;
    sales: number;
}

interface Order {
    id: string;
    img: string;
    customer: string;
    date: string;
    amount: string;
    status: string;
    statusColor: string;
}

interface ChannelData {
    name: string;
    revenue: number;
}

interface ActivityItem {
    id: string;
    type: "order" | "refund" | "login" | "product_update";
    description: string;
    time: string;
    icon: React.ElementType;
    iconColor: string;
}

interface Blog {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: string;
    readTime: number;
    publishedAt: string | null;
    status: "draft" | "publish";
    categories: { _id: string; name: string }[];
    tags: string[];
    author: { _id: string; name: string | null };
}

const DashboardHeader = ({ user }: { user: User }) => {
    return (
        <header className="bg-white/80 backdrop-blur-md px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 sticky top-0 z-40 gap-4 shadow-2xs">
            <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                <Link href="/notifications" className="relative text-slate-500 hover:text-blue-600 p-2.5 rounded-full hover:bg-slate-100 transition-colors">
                    <Bell size={20} className="w-5 h-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </Link>
                <Link href={'/profile'} className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-100/80 transition-colors border border-transparent hover:border-slate-200">
                    <Image
                        src={user?.image || "https://placehold.co/40x40/3b82f6/ffffff?text=U"}
                        alt={user?.name || "User"}
                        width={38}
                        height={38}
                        className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                    />
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-semibold text-slate-800 leading-tight">{user?.name}</p>
                        <p className="text-xs text-slate-500">{user?.email}</p>
                    </div>
                    <div className="hidden md:block text-slate-400 pl-1">
                        <ChevronRight size={16} />
                    </div>
                </Link>
            </div>
        </header>
    );
};

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon, color }) => {
    const isPositive = changeType === "positive";
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color }} />
                </div>
                <div className={`flex items-center gap-1 text-xs sm:text-sm font-semibold px-2 py-1 rounded-full ${isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    <span>{change}</span>
                </div>
            </div>
            <div>
                <p className="text-xs sm:text-sm font-medium text-slate-500">{title}</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    <CountUp end={parseFloat(value.replace(/[^0-9.]/g, ""))} separator="," prefix={value.includes("$") ? "$" : ""} duration={2} />
                </p>
            </div>
        </motion.div>
    );
};

const generateSalesData = (): SalesData[] => {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
        label: day,
        sales: Math.floor(30000 + Math.random() * 40000),
    }));
};

const CustomSalesLineChart = () => {
    const [data, setData] = useState<SalesData[]>([]);
    useEffect(() => setData(generateSalesData()), []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">Sales Trend</h3>
                <span className="text-xs text-slate-400 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">Weekly Performance</span>
            </div>
            <div className="flex-1 w-full h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                        <XAxis dataKey="label" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: "10px", color: "#fff", fontSize: "12px", border: "none", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }} />
                        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "15px" }} />
                        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 3, fill: "#3b82f6" }} activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

const SectionCard: React.FC<SectionCardProps> = ({ title, value }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs text-center flex flex-col justify-center hover:border-slate-300 transition-all">
        <h4 className="text-xs text-slate-500 mb-1 font-medium">{title}</h4>
        <p className="text-base sm:text-lg font-bold text-slate-800">{value}</p>
    </div>
);

const ExtraInfoSection = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <SectionCard title="Total Visits" value="18,400" />
        <SectionCard title="Bounce Rate" value="47.6%" />
        <SectionCard title="Avg. Session" value="03m 24s" />
        <SectionCard title="Conversions" value="4.2%" />
        <SectionCard title="Returns" value="8.1%" />
        <SectionCard title="Revenue / User" value="$12.33" />
    </div>
);

const RecentOrders = () => {
    const orders: Order[] = [
        { id: "#876364", img: "https://placehold.co/40x40/f87171/ffffff?text=J", customer: "John Doe", date: "Jun 23, 2025", amount: "$120.50", status: "Delivered", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/50" },
        { id: "#876365", img: "https://placehold.co/40x40/fbbf24/ffffff?text=S", customer: "Jane Smith", date: "Jun 23, 2025", amount: "$75.00", status: "Pending", statusColor: "bg-amber-50 text-amber-700 border border-amber-200/50" },
        { id: "#876366", img: "https://placehold.co/40x40/60a5fa/ffffff?text=M", customer: "Mike Johnson", date: "Jun 22, 2025", amount: "$250.00", status: "Processing", statusColor: "bg-blue-50 text-blue-700 border border-blue-200/50" },
        { id: "#876367", img: "https://placehold.co/40x40/34d399/ffffff?text=E", customer: "Emily White", date: "Jun 21, 2025", amount: "$45.80", status: "Cancelled", statusColor: "bg-red-50 text-red-700 border border-red-200/50" },
        { id: "#876368", img: "https://placehold.co/40x40/9333ea/ffffff?text=D", customer: "David Lee", date: "Jun 20, 2025", amount: "$300.00", status: "Delivered", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/50" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">Recent Transactions</h3>
                <Link href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All</Link>
            </div>
            <div className="overflow-x-auto -mx-5 sm:mx-0 flex-1">
                <div className="inline-block min-w-full align-middle px-5 sm:px-0">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-400 uppercase bg-slate-50/70 border-b border-slate-100">
                            <tr>
                                <th className="px-3 sm:px-4 py-3 font-medium rounded-l-xl">Customer</th>
                                <th className="px-3 sm:px-4 py-3 font-medium">Date</th>
                                <th className="px-3 sm:px-4 py-3 font-medium">Amount</th>
                                <th className="px-3 sm:px-4 py-3 font-medium">Status</th>
                                <th className="px-3 sm:px-4 py-3 font-medium rounded-r-xl text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/60 transition-colors">
                                    <td className="px-3 sm:px-4 py-3.5 flex items-center gap-3">
                                        <Image src={order.img} alt={order.customer} className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-slate-200" width={36} height={36} />
                                        <div className="truncate">
                                            <div className="font-semibold text-slate-800 text-xs sm:text-sm truncate">{order.customer}</div>
                                            <div className="text-[11px] text-slate-400">{order.id}</div>
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-4 py-3.5 text-slate-600 text-xs sm:text-sm whitespace-nowrap">{order.date}</td>
                                    <td className="px-3 sm:px-4 py-3.5 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">{order.amount}</td>
                                    <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${order.statusColor}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-3 sm:px-4 py-3.5 text-right whitespace-nowrap">
                                        <button className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

const CustomerDemographics = () => {
    const genderData = [
        { name: "Male", value: 400 },
        { name: "Female", value: 300 },
        { name: "Other", value: 150 },
    ];
    const COLORS = ["#3b82f6", "#ec4899", "#8b5cf6"];

    const ageData = [
        { group: "18-24", users: 250 },
        { group: "25-34", users: 400 },
        { group: "35-44", users: 300 },
        { group: "45-54", users: 150 },
        { group: "55+", users: 100 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">Customer Demographics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-center">
                <div className="w-full flex flex-col items-center">
                    <h4 className="text-xs sm:text-sm font-medium text-slate-500 mb-2">Users by Gender</h4>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={genderData} cx="50%" cy="50%" innerRadius={45} outerRadius={65} paddingAngle={4} dataKey="value">
                                    {genderData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: "8px", color: "#fff", fontSize: "12px", border: "none" }} />
                                <Legend wrapperStyle={{ fontSize: "11px" }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <h4 className="text-xs sm:text-sm font-medium text-slate-500 mb-2">Users by Age Group</h4>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ageData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis dataKey="group" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: "8px", color: "#fff", fontSize: "12px", border: "none" }} />
                                <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const RevenueByChannel = () => {
    const channelData: ChannelData[] = [
        { name: "Organic Search", revenue: 60000 },
        { name: "Direct", revenue: 45000 },
        { name: "Social Media", revenue: 30000 },
        { name: "Email Marketing", revenue: 25000 },
        { name: "Paid Ads", revenue: 50000 },
    ];
    const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#10b981", "#8b5cf6"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">Revenue by Channel</h3>
            <div className="flex-1 h-72 sm:h-80 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={channelData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="revenue">
                            {channelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} contentStyle={{ backgroundColor: "#0f172a", borderRadius: "8px", color: "#fff", fontSize: "12px", border: "none" }} />
                        <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

const ActivityFeed = () => {
    const activities: ActivityItem[] = [
        { id: "act001", type: "order", description: "New order #876370 placed by David S.", time: "5 min ago", icon: ShoppingCart, iconColor: "#3b82f6" },
        { id: "act002", type: "product_update", description: "Product 'Smartwatch Pro' stock updated.", time: "1 hour ago", icon: Package, iconColor: "#f97316" },
        { id: "act003", type: "refund", description: "Refund processed for order #876355.", time: "3 hours ago", icon: DollarSign, iconColor: "#ef4444" },
        { id: "act004", type: "login", description: "Admin user logged in from new device.", time: "Yesterday", icon: Users, iconColor: "#10b981" },
        { id: "act005", type: "order", description: "Order #876368 marked as delivered.", time: "Yesterday", icon: ShoppingCart, iconColor: "#3b82f6" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
            <ul className="divide-y divide-slate-100 flex-1">
                {activities.map((activity) => (
                    <li key={activity.id} className="flex items-start gap-3.5 py-3 first:pt-0 last:pb-0">
                        <div className="p-2.5 rounded-xl shrink-0" style={{ backgroundColor: `${activity.iconColor}15` }}>
                            <activity.icon size={16} style={{ color: activity.iconColor }} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">{activity.description}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{activity.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const BlogManagement = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isPending, startTransition] = useTransition();
    const [deleteBlogId, setDeleteBlogId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const fetchedBlogs = await getBlogs();
                setBlogs(fetchedBlogs);
            } catch (error) {
                toast.error("Failed to load blogs");
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const handleDelete = async () => {
        if (!deleteBlogId) return;

        startTransition(async () => {
            try {
                const formData = new FormData();
                formData.append("id", deleteBlogId);
                const result = await deleteBlog(formData);

                if (result.success) {
                    setBlogs(blogs.filter((blog) => blog._id !== deleteBlogId));
                    toast.success("Blog deleted successfully");
                } else {
                    toast.error(result.error || "Failed to delete blog");
                }
            } catch (error) {
                toast.error("An error occurred while deleting the blog");
                console.error("Delete error:", error);
            } finally {
                setDeleteBlogId(null);
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs h-full flex flex-col"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">Blog Management</h3>
                <Link href="/admin/blogs/create">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto shadow-2xs">Create Blog</Button>
                </Link>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center h-48 flex-1">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                </div>
            ) : blogs.length === 0 ? (
                <p className="text-center text-slate-500 py-12 text-sm">No blogs found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-95 pr-1">
                    {blogs.map((blog) => (
                        <Card key={blog._id} className="shadow-none border border-slate-200/80 bg-white hover:border-slate-300 transition-all flex flex-col rounded-xl overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="relative h-28 w-full bg-slate-100">
                                    <Image
                                        src={blog.featuredImage}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-start gap-2">
                                        <CardTitle className="text-sm font-semibold line-clamp-1 leading-snug">
                                            <Link href={`/blogs/${blog.slug}`} className="hover:text-blue-600">
                                                {blog.title}
                                            </Link>
                                        </CardTitle>
                                        <Badge variant={blog.status === "publish" ? "default" : "secondary"} className="text-[10px] px-2 py-0">
                                            {blog.status}
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-slate-500 line-clamp-2">{blog.excerpt}</p>
                                </div>
                                <div className="pt-3 flex justify-end gap-1.5 border-t border-slate-100">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 text-xs px-2.5"
                                        onClick={() => router.push(`/admin/blogs/edit/${blog.slug}`)}
                                    >
                                        <Pencil className="w-3 h-3 mr-1" /> Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="h-7 text-xs px-2.5 bg-red-50 text-red-600 hover:bg-red-100 border-red-200 shadow-none"
                                        onClick={() => setDeleteBlogId(blog._id)}
                                        disabled={isPending}
                                    >
                                        <Trash2 className="w-3 h-3 mr-1" /> Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
            <AlertDialog open={!!deleteBlogId} onOpenChange={() => setDeleteBlogId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this blog post? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={isPending} className="bg-red-600 hover:bg-red-700">
                            {isPending ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                "Delete"
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </motion.div>
    );
};

const ComingSoon = () => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-center py-12"
    >
        <div className="p-3 bg-slate-50 rounded-full mb-3 border border-slate-100">
            <Clock size={32} className="text-slate-400" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">More Insights Coming Soon!</h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm">We&apos;re constantly working to bring you more valuable data and features.</p>
    </motion.div>
);

const Dashboard = ({ user }: { user: User }) => (
    <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader user={user} />
        <main className="flex-1 bg-slate-50/50 p-4 sm:p-8 space-y-6 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard title="Total Revenue" value="$45231" change="+20.1%" changeType="positive" icon={DollarSign} color="#10b981" />
                <StatCard title="Total Orders" value="2340" change="+15.5%" changeType="positive" icon={ShoppingCart} color="#3b82f6" />
                <StatCard title="New Customers" value="1210" change="+5.2%" changeType="positive" icon={Users} color="#f97316" />
                <StatCard title="Activity Rate" value="78.2" change="-1.9%" changeType="negative" icon={Activity} color="#ef4444" />
            </div>

            <ExtraInfoSection />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <CustomSalesLineChart />
                </div>
                <div>
                    <RevenueByChannel />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <RecentOrders />
                </div>
                <div>
                    <ActivityFeed />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <CustomerDemographics />
                </div>
                <div>
                    <BlogManagement />
                </div>
            </div>

            <ComingSoon />
        </main>
    </div>
);

export default function DashboardMain({ user }: { user: User }) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
            <Dashboard user={user} />
        </div>
    );
}