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
import React, { useEffect, useState } from "react";
import { send } from "process";

export default function Component() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [pdf, setPDF] = useState<Promise<string>>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setImage(event.target.result.toString());
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(pdf);
  }, [pdf]);

  async function sendCertificateData(
    certname: string,
    title: string,
    message: string,
    image: string
  ) {
    const response = await fetch("/api/returnPDF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certname: certname,
        title: title,
        message: message,
        image: image,
      }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      return url;
    } else {
      const errorText = await response.text();
      console.error("Error details:", errorText);
      throw new Error("Failed to generate PDF");
    }
  }

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
            <Input id="image" type="file" onChange={handleImageChange} />
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
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter a message"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              onClick={() => sendCertificateData(name, title, message, image)}
            >
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
