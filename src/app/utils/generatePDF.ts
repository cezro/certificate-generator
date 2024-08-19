"use server";
const fs = require("fs");
const moment = require("moment");
import PDFDocument from "pdfkit";

export default async function generatePDF(
  certname: string,
  title: string,
  message: string
) {
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
  });

  doc.pipe(fs.createWriteStream(`${certname}.pdf`));
  doc.image("image/certificate.png", 0, 0, { width: 842 });
  doc.font("fonts/OpenSans-Regular.ttf");
  doc.fontSize(60).text(certname, 20, 265, { align: "center" });
  doc.end();

  return doc;
}
