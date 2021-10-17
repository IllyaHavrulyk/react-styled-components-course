import styled, { css } from "styled-components";

const Button = styled.button`
      color: white;
      background: ${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
      font-weight: bold;
      ${p => p.large ? css`
            padding: 10px;
            font-size: 1.5em;
            border-radius: 5px;
      ` : css`
            padding: 8px;
            font-size: 1em;
            border-radius: 4px;
      `}
      box-shadow: none;
      border: none;
      width: 100%;
      display:block;
      white-space: none;
      &:disabled{
            background: #eee;
            color: #666;
      }
`

export { Button };