"use client";
import { z } from "zod";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page({ className, ...props }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const rule = z.object({
    username: z.string().min(5).max(25),
    email: z.string().email(),
  });

  function handleSubmit(e) {
    e.preventDefault();
    const hasil = rule.safeParse({ username, email });
    console.log(hasil);

    if (hasil.success) {
      alert("Data valid!");
      console.log("Username:", username);
      console.log("Email:", email);
    } else {
      alert("Data tidak valid!");
      console.error(hasil.error);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-500", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Form Validasi Zod</CardTitle>
          <CardDescription>
            Masukkan username dan email untuk validasi menggunakan Zod
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Username */}
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Button */}
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}