"use client"

import * as React from "react"
import { Button, Typography, Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Select, Checkbox } from "@/components/ui"

export default function DesignSystemPage() {
    return (
        <Container className="py-10 space-y-12">
            <div className="space-y-4">
                <Typography variant="h1">Design System</Typography>
                <Typography variant="lead">
                    A collection of base components and design tokens for the application.
                </Typography>
            </div>

            {/* Typography Section */}
            <section className="space-y-6">
                <div className="border-b pb-2">
                    <Typography variant="h2">Typography</Typography>
                </div>
                <div className="space-y-4">
                    <Typography variant="h1">Heading 1</Typography>
                    <Typography variant="h2">Heading 2</Typography>
                    <Typography variant="h3">Heading 3</Typography>
                    <Typography variant="h4">Heading 4</Typography>
                    <Typography variant="p">Body text: The quick brown fox jumps over the lazy dog.</Typography>
                    <Typography variant="small">Small text: Fine print and secondary information.</Typography>
                    <Typography variant="muted">Muted text: Less important information.</Typography>
                </div>
            </section>

            {/* Buttons Section */}
            <section className="space-y-6">
                <div className="border-b pb-2">
                    <Typography variant="h2">Buttons</Typography>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <Typography variant="h4">Variants</Typography>
                        <div className="flex flex-col gap-2">
                            <Button>Default (Primary)</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Typography variant="h4">Sizes</Typography>
                        <div className="flex flex-col gap-2 items-start">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Typography variant="h4">States</Typography>
                        <div className="flex flex-col gap-2">
                            <Button isLoading>Loading</Button>
                            <Button disabled>Disabled</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="space-y-6">
                <div className="border-b pb-2">
                    <Typography variant="h2">Cards</Typography>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default Card</CardTitle>
                            <CardDescription>This is a standard card.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Typography>Card content goes here.</Typography>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm">Action</Button>
                        </CardFooter>
                    </Card>

                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle>Elevated Card</CardTitle>
                            <CardDescription>This card has more shadow.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Typography>Content...</Typography>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-primary/20">
                        <CardHeader>
                            <CardTitle>Bordered Card</CardTitle>
                            <CardDescription>Custom border style.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Typography>Content...</Typography>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Form Components Section */}
            <section className="space-y-6">
                <div className="border-b pb-2">
                    <Typography variant="h2">Form Components</Typography>
                </div>
                <div className="grid gap-8 max-w-xl">
                    <div className="space-y-4">
                        <Typography variant="h4">Inputs</Typography>
                        <Input label="Email Address" placeholder="hello@example.com" type="email" />
                        <Input label="With Helper Text" placeholder="Enter value" helperText="This is a helper message." />
                        <Input label="Error State" value="Invalid" error="This field is required" />
                        <Input label="Disabled" disabled placeholder="Cannot type here" />
                    </div>

                    <div className="space-y-4">
                        <Typography variant="h4">Select</Typography>
                        <Select label="Role" options={[
                            { label: 'Admin', value: 'admin' },
                            { label: 'User', value: 'user' },
                            { label: 'Guest', value: 'guest' }
                        ]} />
                        <Select label="Error State" error="Please select an option" />
                    </div>

                    <div className="space-y-4">
                        <Typography variant="h4">Checkbox</Typography>
                        <Checkbox label="Accept terms and conditions" />
                        <Checkbox label="Subscribe to newsletter" defaultChecked />
                        <Checkbox label="Disabled option" disabled />
                    </div>
                </div>
            </section>

        </Container>
    )
}
