import generatePDF from "../../utils/generatePDF";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { certname, title, message, image } = body;

    // Assuming generatePDF returns a Buffer or Uint8Array
    const pdf = await generatePDF(certname, title, message, image);

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=certificate.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
