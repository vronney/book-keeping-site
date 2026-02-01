import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string
    error?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, error, id, ...props }, ref) => {
        const generatedId = React.useId()
        const checkboxId = id || generatedId

        return (
            <div className="flex items-start space-x-2">
                <div className="flex items-center h-5">
                    <input
                        type="checkbox"
                        className={cn(
                            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 accent-primary",
                            className
                        )}
                        ref={ref}
                        id={checkboxId}
                        {...props}
                    />
                </div>
                <div className="grid gap-1.5 leading-none">
                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            {label}
                        </label>
                    )}
                    {error && (
                        <p className="text-xs font-medium text-destructive">{error}</p>
                    )}
                </div>
            </div>
        )
    }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
