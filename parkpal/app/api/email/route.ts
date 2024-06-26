"use server"
import { Resend} from 'resend';
import Emails from "@/app/emails/Emails";
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, senderEmail, message } = await req.json();

        const emailData = {
            from: 'ParkPal Test <onboarding@resend.dev>',
            to: 'polina18102001@outlook.com',
            subject: 'New message',
            reply_to: senderEmail,
            react: Emails({ firstName, lastName, senderEmail, message }),
        };

        const { data, error } = await resend.emails.send(emailData);
    
        if (error) {
          return NextResponse.json({ error }, { status: 500 });
        }
    
        return NextResponse.json(data);
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
