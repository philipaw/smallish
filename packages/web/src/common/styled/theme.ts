import styled, { createGlobalStyle } from 'styled-components'

export const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; }
`

export const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

export const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
