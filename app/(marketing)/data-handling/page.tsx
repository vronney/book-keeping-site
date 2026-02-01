import { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal"

export const metadata: Metadata = {
    title: "Data Handling | BookkeeperPro",
    description: "Our security practices and data protection commitments.",
    robots: {
        index: false,
        follow: true,
    }
}

export default function DataHandlingPage() {
    return (
        <LegalPageLayout title="Data Handling & Security" lastUpdated="October 27, 2025">
            <section className="space-y-4">
                <h3>Our Commitment to Security</h3>
                <p>
                    We understand that financial data is sensitive. We treat your data with the highest level of care
                    and employ industry-standard security measures to protect it.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>Encryption</h3>
                <p>
                    We use robust encryption to ensure your data stays private:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>In Transit:</strong> All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher.</li>
                    <li><strong>At Rest:</strong> Data stored in our databases is encrypted using AES-256 standards.</li>
                </ul>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>Access Controls</h3>
                <p>
                    Internal access to your data is strictly limited to employees who need it to perform their job functions
                    (e.g., your assigned bookkeeper). We use multi-factor authentication (MFA) for all internal systems
                    and perform regular background checks on staff.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>Bank Connections</h3>
                <p>
                    We use Plaid and other secure third-party providers to connect to your financial institutions.
                    <strong>We do not store your bank login credentials</strong> on our servers. Tokens are used to securely
                    fetch read-only transaction data.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>Data Deletion</h3>
                <p>
                    If you choose to leave our service, you can request a full export of your data. Upon request,
                    we will permanently delete your data from our active systems within 30 days, retaining only what
                    is legally required for tax compliance.
                </p>
            </section>
        </LegalPageLayout>
    )
}
