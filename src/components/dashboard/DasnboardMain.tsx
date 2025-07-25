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
    AlertDialogHeader, AlertDialogTitle
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
        <header className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 sticky top-0 z-40 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                <p className="text-sm text-slate-500 mt-1">
                    {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/notifications" className="relative text-slate-500 hover:text-blue-600 p-2 rounded-full hover:bg-slate-100">
                    <Bell size={24} />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </Link>
                <Link href={'/profile'} className="flex items-center gap-3">

                    <Image
                        src={user?.image || "https://placehold.co/40x40/3b82f6/ffffff?text=U"}
                        alt={user?.name || "User"}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="hidden sm:block">

                        <p className="text-sm font-semibold text-slate-800">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>


                    </div>

                    <div className="hidden sm:block text-slate-500 hover:text-slate-800">
                        <ChevronRight size={20} />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${color}1A` }}>
                    <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? "text-emerald-500" : "text-red-500"}`}>
                    {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    <span>{change}</span>
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-slate-500">{title}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                    <CountUp end={parseFloat(value.replace(/[^0-9.]/g, ""))} separator="," prefix={value.includes("$") ? "$" : ""} duration={2.5} />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Sales Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "6px", color: "#fff" }} />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2.5} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

const SectionCard: React.FC<SectionCardProps> = ({ title, value }) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
        <h4 className="text-sm text-slate-500 mb-1">{title}</h4>
        <p className="text-xl font-semibold text-slate-800">{value}</p>
    </div>
);

const ExtraInfoSection = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
        <SectionCard title="Total Visits" value="18,400" />
        <SectionCard title="Bounce Rate" value="47.6%" />
        <SectionCard title="Avg. Session" value="03m 24s" />
        <SectionCard title="Conversions" value="4.2%" />
        <SectionCard title="Returns" value="8.1%" />
        <SectionCard title="Revenue Per User" value="$12.33" />
    </div>
);

const RecentOrders = () => {
    const orders: Order[] = [
        {
            id: "#876364",
            img: "https://placehold.co/40x40/f87171/ffffff?text=J",
            customer: "John Doe",
            date: "Jun 23, 2025",
            amount: "$120.50",
            status: "Delivered",
            statusColor: "bg-emerald-100 text-emerald-700",
        },
        {
            id: "#876365",
            img: "https://placehold.co/40x40/fbbf24/ffffff?text=S",
            customer: "Jane Smith",
            date: "Jun 23, 2025",
            amount: "$75.00",
            status: "Pending",
            statusColor: "bg-amber-100 text-amber-700",
        },
        {
            id: "#876366",
            img: "https://placehold.co/40x40/60a5fa/ffffff?text=M",
            customer: "Mike Johnson",
            date: "Jun 22, 2025",
            amount: "$250.00",
            status: "Processing",
            statusColor: "bg-blue-100 text-blue-700",
        },
        {
            id: "#876367",
            img: "https://placehold.co/40x40/34d399/ffffff?text=E",
            customer: "Emily White",
            date: "Jun 21, 2025",
            amount: "$45.80",
            status: "Cancelled",
            statusColor: "bg-red-100 text-red-700",
        },
        {
            id: "#876368",
            img: "https://placehold.co/40x40/9333ea/ffffff?text=D",
            customer: "David Lee",
            date: "Jun 20, 2025",
            amount: "$300.00",
            status: "Delivered",
            statusColor: "bg-emerald-100 text-emerald-700",
        },
        {
            id: "#876369",
            img: "https://placehold.co/40x40/ec4899/ffffff?text=A",
            customer: "Anna Brown",
            date: "Jun 19, 2025",
            amount: "$99.99",
            status: "Pending",
            statusColor: "bg-amber-100 text-amber-700",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 font-medium rounded-l-lg">Customer</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Amount</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium rounded-r-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="bg-white border-b border-slate-100 hover:bg-slate-50">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Image src={order.img} alt={order.customer} className="w-10 h-10 rounded-full" width={40} height={40} />
                                    <div>
                                        <div className="font-semibold text-slate-800">{order.customer}</div>
                                        <div className="text-xs text-slate-500">{order.id}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{order.date}</td>
                                <td className="px-6 py-4 font-semibold text-slate-800">{order.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    const COLORS = ["#3b82f6", "#f472b6", "#a855f7"];

    const ageData = [
        { group: "18-24", users: 250 },
        { group: "25-34", users: 400 },
        { group: "35-44", users: 300 },
        { group: "45-54", users: 150 },
        { group: "55+", users: 100 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-1 md:col-span-2"
        >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Customer Demographics</h3>
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                <div className="flex-1 min-w-[250px]">
                    <h4 className="text-md font-medium text-slate-700 mb-2">Users by Gender</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={genderData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {genderData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "6px", color: "#fff" }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1 min-w-[250px]">
                    <h4 className="text-md font-medium text-slate-700 mb-2">Users by Age Group</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={ageData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="group" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "6px", color: "#fff" }} />
                            <Bar dataKey="users" fill="#34d399" />
                        </BarChart>
                    </ResponsiveContainer>
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
    const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#10b981", "#a855f7"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue by Channel</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="revenue"
                    >
                        {channelData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} contentStyle={{ backgroundColor: "#1e293b", borderRadius: "6px", color: "#fff" }} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
            <ul className="divide-y divide-slate-100">
                {activities.map((activity) => (
                    <li key={activity.id} className="flex items-start gap-3 py-3">
                        <div className="p-2 rounded-full" style={{ backgroundColor: `${activity.iconColor}1A` }}>
                            <activity.icon size={20} style={{ color: activity.iconColor }} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-slate-800">{activity.description}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Blog Management</h3>
                <Link href="/admin/blogs/create">
                    <Button className="bg-blue-600 hover:bg-blue-700">Create Blog</Button>
                </Link>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                </div>
            ) : blogs.length === 0 ? (
                <p className="text-center text-slate-600">No blogs found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blogs.map((blog) => (
                        <Card key={blog._id} className="shadow-sm border-0 bg-white/80 hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={blog.featuredImage}
                                        alt={blog.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg font-semibold line-clamp-2">
                                        <Link href={`/blogs/${blog.slug}`} className="hover:text-blue-600">
                                            {blog.title}
                                        </Link>
                                    </CardTitle>
                                    <Badge variant={blog.status === "publish" ? "default" : "secondary"}>
                                        {blog.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-2">{blog.excerpt}</p>
                                <div className="flex flex-wrap gap-2">
                                    {blog.categories.map((category) => (
                                        <Badge key={category._id} variant="outline" className="bg-blue-50 text-blue-700">
                                            {category.name}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="text-sm text-slate-500">
                                    <span>{blog.author.name || "Unknown Author"}</span> •{" "}
                                    <span>{blog.readTime} min read</span> •{" "}
                                    <span>
                                        {blog.publishedAt
                                            ? new Date(blog.publishedAt).toLocaleDateString()
                                            : "Not published"}
                                    </span>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => router.push(`/admin/blogs/edit/${blog.slug}`)}
                                    >
                                        <Pencil className="w-4 h-4 mr-2" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => setDeleteBlogId(blog._id)}
                                        disabled={isPending}
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
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
                        <AlertDialogAction onClick={handleDelete} disabled={isPending}>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center min-h-[150px]"
    >
        <Clock size={48} className="text-slate-400 mb-4" />
        <h3 className="text-lg font-semibold text-slate-800 mb-2">More Insights Coming Soon!</h3>
        <p className="text-sm text-slate-500 max-w-sm">We&apos;re constantly working to bring you more valuable data and features.</p>
    </motion.div>
);

const Dashboard = ({ user }: { user: User }) => (
    <div className="flex-1 flex flex-col">
        <DashboardHeader user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Revenue" value="$45231" change="+20.1%" changeType="positive" icon={DollarSign} color="#10b981" />
                <StatCard title="Total Orders" value="2340" change="+15.5%" changeType="positive" icon={ShoppingCart} color="#3b82f6" />
                <StatCard title="New Customers" value="1210" change="+5.2%" changeType="positive" icon={Users} color="#f97316" />
                <StatCard title="Activity Rate" value="78.2" change="-1.9%" changeType="negative" icon={Activity} color="#ef4444" />
            </div>
            <ExtraInfoSection />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <CustomSalesLineChart />
                </div>
                <div>
                    <RevenueByChannel />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <RecentOrders />
                </div>
                <div>
                    <ActivityFeed />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
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