import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        default:
          'border border-primary/50 bg-primary text-[#06080d] shadow-[0_12px_36px_rgba(212,175,94,0.18)] hover:bg-primary/90 hover:shadow-[0_16px_48px_rgba(212,175,94,0.26)]',
        outline:
          'border border-primary/18 bg-[#0a0c12] text-foreground shadow-[0_12px_34px_rgba(0,0,0,0.24)] hover:border-primary/35 hover:bg-[#0e1018]',
        ghost: 'text-foreground/75 hover:bg-background/50 hover:text-foreground',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
)
Button.displayName = 'Button'

export { Button }
