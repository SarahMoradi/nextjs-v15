/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Config } from "tailwindcss";
import {colord, extend} from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])

const generateDarkenColorFrom = (input: string, percentage= 0.07) :string => 
  colord(input).darken(percentage).toHex()

const generateForgroundColorFrom = (input: string, percentage= 0.08) :string => 
  colord(input).mix(colord(input).isDark() ? "white" : "black", percentage).toHex()

export const tailwindColors: {[key: string]: string} = {
  "primary-bg": "blue",
  "secondary-bg": "green",
  "light-bg": "white"
  //  import colors from github
}

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: tailwindColors,
    extend: {
    },
  },
  plugins: [],
} satisfies Config;
