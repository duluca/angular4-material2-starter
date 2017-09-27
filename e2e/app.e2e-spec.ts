import { AppPage } from './app.po'

describe('A4M2 App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Angular 4 Material 2 Starter')
  })
})
