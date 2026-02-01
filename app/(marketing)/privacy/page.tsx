import { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal"

export const metadata: Metadata = {
    title: "Privacy Policy | BookkeeperPro",
    description: "How we collect, use, and protect your data.",
    robots: {
        index: false,
        follow: true,
    }
}

export default function PrivacyPage() {
    return (
        <LegalPageLayout title="Privacy Policy" lastUpdated="October 27, 2025">
            <section className="space-y-4">
                <h3>1. Information We Collect</h3>
                <p>
                    We collect information you provide directly to us when you fill out our intake forms,
                    schedule a consultation, or communicate with us. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact information:</strong> Name, email address, phone number.</li>
                    <li><strong>Business details:</strong> Entity type, estimated revenue, industry, employee count.</li>
                    <li><strong>Financial overviews:</strong> Current accounting software, bank connection status, historical data availability.</li>
                </ul>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>2. How We Use Information</h3>
                <p>
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our bookkeeping and advisory services.</li>
                    <li>Process your requests, transactions, and schedule meetings.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Communicate with you about products, services, offers, and events.</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                </ul>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>3. Information Sharing</h3>
                <p>
                    <strong>We do not sell your personal information.</strong> We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Vendors who need access to such information to carry out work on our behalf (e.g., hosting, email delivery, CRM).</li>
                    <li><strong>Legal Compliance:</strong> If required by law or to protect the rights and safety of BookkeeperPro or others.</li>
                </ul>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>4. Data Retention</h3>
                <p>
                    We retain your personal information only for as long as is necessary for the purposes set out
                    in this Privacy Policy. You may request deletion of your data at any time by contacting us.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>5. Your Rights (California / GDPR)</h3>
                <p>
                    Depending on your location, you may have rights to access, correct, delete, or restrict use of
                    your personal information. We respect these rights for all users regardless of location.
                    Contact us to exercise these rights.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>6. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@bookkeeperpro.com.
                </p>
            </section>
        </LegalPageLayout>
    )
}
