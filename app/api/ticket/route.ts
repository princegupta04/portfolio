import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("🔹 Received Request Data:", body);

        const { issue_summary, issue_details, issue_priority, myfile } = body;

        // Validate required fields
        if (!issue_summary || !issue_details) {
            console.error("❌ Validation Error: Missing fields");
            return NextResponse.json({ error: "Issue summary and details are required" }, { status: 400 });
        }

        // Construct payload for osTicket
        let payload = {
            alert: "1",
            autorespond: "1",
            source: "API",
            name: "User Name",  // Update dynamically if needed
            email: "user@example.com",  // Update dynamically if needed
            subject: issue_summary,
            message: issue_details,
            priority: issue_priority || "Normal",  // Default priority if none provided
        };

        // Handle file attachment
        if (myfile?.base64 && myfile?.mimeType) {
            console.log("📂 Processing File Attachment:", myfile.name);
            
            // Attach file in the expected format (key is the filename, value is the base64 string)
            payload.attachments = [{
                [myfile.name]: `data:${myfile.mimeType};base64,${myfile.base64}`
            }];
        }

        // Ensure proper URL and API key for osTicket API
        const osticketUrl = `${process.env.OSTICKET_URL}/api/http.php/tickets.json`;
        const apiKey = process.env.OSTICKET_API_KEY;

        if (!osticketUrl || !apiKey) {
            console.error("❌ Missing osTicket API URL or API Key");
            return NextResponse.json({ error: "Server misconfiguration. Contact support." }, { status: 500 });
        }

        console.log("🔹 Sending Payload to osTicket:", JSON.stringify(payload, null, 2));
        console.log("🌍 API Endpoint:", osticketUrl);

        // Send request to osTicket API (ensure the payload is wrapped inside `{ post: payload }`)
        const response = await axios.post(osticketUrl, payload, {
            headers: {
                "X-API-Key": apiKey,
                "Content-Type": "application/json",
            },
        });

        console.log("✅ osTicket Response:", response.data);

        // Check if ticket creation was successful (check for ticket_id in response)
        if (response.data.status === 'success' && response.data.data.id) {
            // Successfully created a ticket
            return NextResponse.json({
                success: true,
                ticket_id: response.data.data.id,
                subject: response.data.data.subject,
            }, { status: 200 });
        } else {
            // If there's an issue, handle it gracefully
            console.error("❌ osTicket API returned unexpected response:", response.data);
            return NextResponse.json({ error: "Failed to create ticket", details: response.data }, { status: 500 });
        }
    } catch (error) {
        // Catch any other errors and log them
        console.error("❌ Internal Server Error:", error.message || error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message || error }, { status: 500 });
    }
}
