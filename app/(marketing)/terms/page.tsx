import { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal"

export const metadata: Metadata = {
    title: "Terms of Service | BookkeeperPro",
    description: "Terms and conditions for using our services.",
    robots: {
        index: false,
        follow: true,
    }
}

export default function TermsPage() {
    return (
        <LegalPageLayout title="Terms of Service" lastUpdated="October 27, 2025">
            <section className="space-y-4">
                <h3>1. Service Description</h3>
                <p>
                    BookkeeperPro provides bookkeeping, payroll coordination, and financial reporting services.
                    We are not a public accounting firm and do not provide attest services or file income tax returns directly,
                    though we support the process by preparing your books for your CPA.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>2. User Obligations</h3>
                <p>
                    By using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete financial information.</li>
                    <li>Maintain the confidentiality of any account credentials provided.</li>
                    <li>Promptly respond to inquiries regarding transaction categorization.</li>
                </ul>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>3. Limitation of Liability</h3>
                <p>
                    To the fullest extent permitted by law, BookkeeperPro shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability
                    shall not exceed the amount paid by you for the services during the three months prior to the claim.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>4. Dispute Resolution</h3>
                <p>
                    Any dispute arising from these Terms shall be resolved through binding arbitration in the state of
                    Texas, rather than in court. You waive any right to a jury trial or to participate in a class action.
                </p>
            </section>

            <hr className="my-8 border-slate-800" />

            <section className="space-y-4">
                <h3>5. Modification of Terms</h3>
                <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of significant changes
                    by posting the new Terms on our site and updating the "Last Updated" date at the top of this page.
                </p>
            </section>
        </LegalPageLayout>
    )
}
