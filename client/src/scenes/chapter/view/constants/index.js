import themeButton from './../components/font-button/theme-button';
import {FONT_SIZE_RANGE} from './../components/font-button/font-size';

const THEME_BUTTONS = [
  FONT_SIZE_RANGE,
  themeButton("Light", "light-theme"),
  themeButton("Sepia", "sepia-theme"),
  themeButton("Dark", "dark-theme")
]

export {
  THEME_BUTTONS
}