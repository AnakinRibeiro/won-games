import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  img: 'https://source.unplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i }))

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
