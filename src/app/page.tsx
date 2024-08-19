/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7noNTPqwCxV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import generatePDF from "./utils/generatePDF";
import React, { useState } from "react";

export default function Component() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-2xl p-8">
        <CardHeader>
          <CardTitle>Certificate Generator</CardTitle>
          <CardDescription>
            Create a custom certificate for your recipient.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input id="image" type="file" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excel">Upload Excel Spreadsheet</Label>
            <Input id="excel" type="file" accept=".xlsx, .xls" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="recipient-name">Recipient Name</Label>
              <Input
                id="recipient-name"
                placeholder="Enter recipient's name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certificate-title">Certificate Title</Label>
              <Input
                id="certificate-title"
                placeholder="Enter certificate title"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter a message" rows={4} />
          </div>
          <div className="flex justify-end">
            <Button type="submit" onClick={() => generatePDF(name, "h", "h")}>
              Generate Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8">
        <Button variant="outline">Download Certificate</Button>
      </div>
    </div>
  );
}
