"use server";
import blobStream from "blob-stream";
import PDFDocument from "pdfkit";
import Helvetica from "pdfkit";

export default async function generatePDF(
  certname: string,
  title: string,
  message: string,
  image: string
) {
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
  });

  const stream = doc.pipe(blobStream());
  doc.image(image, 0, 0, { width: 842 });
  doc.font("./src/app/utils/fonts/OpenSans-Regular.ttf");
  doc.fontSize(60).text(certname, 20, 265, { align: "center" });
  doc.end();

  return new Promise<string>((resolve, reject) => {
    stream.on("finish", () => {
      const blobURL = stream.toBlobURL("application/pdf");
      resolve(blobURL);
    });
    stream.on("error", (error) => {
      reject(error);
    });
  });
}
