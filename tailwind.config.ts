import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			/* Legacy Battle Typography System */
			fontFamily: {
				'legacy': ['"Cinzel"', '"Orbitron"', 'serif'],
				'display': ['"Orbitron"', '"Inter"', '"SF Pro"', 'sans-serif'],
				'body': ['"Inter"', '"SF Pro"', 'sans-serif'],
			},
			
			/* Typography variants for precise control */
			fontSize: {
				'heading-xl': ['4rem', { lineHeight: '110%', letterSpacing: '0.05em' }],
				'heading-lg': ['3rem', { lineHeight: '110%', letterSpacing: '0.05em' }],
				'heading-md': ['2.25rem', { lineHeight: '110%', letterSpacing: '0.05em' }],
				'heading-sm': ['1.5rem', { lineHeight: '110%', letterSpacing: '0.05em' }],
				'subheading-lg': ['1.25rem', { lineHeight: '115%', letterSpacing: '0.04em' }],
				'subheading-md': ['1.125rem', { lineHeight: '115%', letterSpacing: '0.04em' }],
				'subheading-sm': ['1rem', { lineHeight: '115%', letterSpacing: '0.04em' }],
				'body-lg': ['1.125rem', { lineHeight: '140%', letterSpacing: '0em' }],
				'body-md': ['1rem', { lineHeight: '140%', letterSpacing: '0em' }],
				'body-sm': ['0.875rem', { lineHeight: '140%', letterSpacing: '0em' }],
			},
			
			/* Legacy Battle Spacing System */
			spacing: {
				'4': '4px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'24': '24px',
			},

			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Legacy Battle Brand Colors */
				'brand-red': {
					DEFAULT: 'hsl(var(--brand-red))',
					light: 'hsl(var(--brand-red-light))',
					dark: 'hsl(var(--brand-red-dark))',
				},
				
				/* Text Colors */
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-disabled': 'hsl(var(--text-disabled))',
				
				/* Status Colors */
				'status-halt': 'hsl(var(--status-halt))',
				'status-gated': 'hsl(var(--status-gated))',
				'status-success': 'hsl(var(--status-success))',
				'status-warning': 'hsl(var(--status-warning))',
				
				/* Elevation Layers */
				'elevation-1': 'hsl(var(--elevation-1))',
				'elevation-2': 'hsl(var(--elevation-2))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			
			/* Legacy Battle Border Radius - 12px */
			borderRadius: {
				'lg': 'var(--radius)',
				'md': 'calc(var(--radius) - 2px)',
				'sm': 'calc(var(--radius) - 4px)',
				'legacy': '12px'
			},
			
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)',
				'focus': 'var(--focus-ring)',
			},
			
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.2',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.4',
						transform: 'scale(1.1)'
					}
				},
				'battle-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 20px hsl(var(--brand-red) / 0.4)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 40px hsl(var(--brand-red) / 0.7)'
					}
				},
				'fadeIn': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideUp': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'scaleHover': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				}
			},
			
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'battle-pulse': 'battle-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
