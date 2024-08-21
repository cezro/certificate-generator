import { NextApiRequest, NextApiResponse } from "next";
import generatePDF from "../utils/generatePDF";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { certname, title, message, image } = req.body;

    // Assuming generatePDF returns a Buffer or Uint8Array
    const pdf = await generatePDF(certname, title, message, image);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=certificate.pdf"
    );
    res.status(200).end(pdf);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({ error: "Failed to generate PDF" });
  }
}
