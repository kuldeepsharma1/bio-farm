import { POST } from '@/app/api/[...nextAurh]/route';
import { CheckCheck, LucideTimerReset, TimerReset } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function ForgotPassword() {
  const [email, setEmail] = useState("")

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();

    const load =  toast.loading("Processing");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: POST,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email}),
      });

      const data = await res.json();
      toast.dismiss(load);

     if (res.ok) {
      toast.success(
        data.success || "Password reset link sent successfully.",
        {
          icon: <CheckCheck className="text-green-500" />,
        }
       );
     } else {
       toast.error(data.error || "Something went wrong", {
          icon: <LucideTimerReset className="text-red-500" />,
        });
     }
    } catch (err:unknown) {
       console.error("Error in forgot password submission:", err);
      toast.dismiss(load);
      toast.error("Network error. Please try again later.", {
        icon: <TimerReset className="text-red-500" />,
      });
    }
  }
  return (
    <div>
      
    </div>
  )
}
