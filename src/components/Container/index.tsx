import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-rigth: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
