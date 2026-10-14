"""Browser regression checks. Requires Python Playwright and Chromium."""
import argparse
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

parser = argparse.ArgumentParser()
parser.add_argument('--base-url', default='http://localhost:4173')
parser.add_argument('--screenshots', default='/tmp/portafolio-verification')
args = parser.parse_args()
base = args.base_url.rstrip('/')
shots = Path(args.screenshots)
shots.mkdir(parents=True, exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, locale='es-MX')
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(base, wait_until='domcontentloaded')
    expect(page.locator('h1')).to_have_count(1)
    expect(page.locator('.page-loader')).to_have_class('page-loader fade-out')
    expect(page.locator('.hero__role')).to_contain_text('Python')
    assert page.locator('.hero .solar-cta').evaluate("e => getComputedStyle(e).backgroundImage !== 'none'"), 'Hero button lost its styles'
    page.get_by_role('link', name='Ver proyectos', exact=True).click()
    expect(page).to_have_url(base + '/proyectos')
    expect(page.locator('.content-layer')).to_have_css('opacity', '1')
    expect(page.locator('.planet-list__item')).to_have_count(9)
    expect(page.locator('.project-detail__features li')).not_to_have_count(0)
    page.get_by_role('button', name='Python', exact=True).click()
    expect(page.locator('.planet-list__item')).to_have_count(2)
    page.get_by_role('button', name='PyPrimes 3D', exact=True).click()
    expect(page.locator('.project-detail__title')).to_have_text('PyPrimes 3D')
    page.get_by_role('link', name='Menú Principal', exact=True).click()
    expect(page.locator('.hero__role')).to_be_visible()
    expect(page.locator('.content-layer')).to_have_css('opacity', '1')
    page.locator('.site-footer__nav a[href="/proyectos"]').click()
    expect(page.locator('.project-detail__title')).to_be_visible()
    page.screenshot(path=str(shots / 'desktop-projects.png'))
    cv = context.request.get(base + '/CV-actualizado.pdf')
    assert cv.ok and cv.body().startswith(b'%PDF'), 'Updated CV is missing'
    assert not errors, errors
    context.close()

    context = browser.new_context(viewport={'width': 390, 'height': 844}, locale='en-US')
    page = context.new_page()
    page.goto(base + '/#contacto', wait_until='domcontentloaded')
    expect(page.locator('#contacto form')).to_be_visible(timeout=15000)
    expect(page.locator('#contacto a[href="https://www.linkedin.com/in/omar-gadiel-bg"]')).to_be_visible()
    expect(page.locator('#contacto a[href="mailto:omarbolanos198@gmail.com"]')).to_be_visible()
    expect(page.locator('.contact__heading').first).to_be_in_viewport(timeout=15000)
    context.close()

    for locale in ['en-US', 'en-GB', 'es-MX']:
        context = browser.new_context(locale=locale, reduced_motion='reduce')
        page = context.new_page()
        page.goto(base + '/proyectos', wait_until='domcontentloaded')
        english = locale.startswith('en')
        expect(page.locator('html')).to_have_attribute('lang', 'en' if english else 'es')
        expect(page.locator('h1')).to_have_text('Projects' if english else 'Proyectos')
        expect(page.locator('.project-detail__title')).to_have_text('La Flor Bakery' if english else 'Panadería La Flor')
        page.locator('.bb8-toggle__checkbox').focus()
        page.keyboard.press('Space')
        expect(page.locator('h1')).to_have_text('Proyectos' if english else 'Projects')
        expect(page.locator('.project-detail__title')).to_have_text('Panadería La Flor' if english else 'La Flor Bakery')
        context.close()

    for width in [320, 360, 390, 768, 1280]:
        context = browser.new_context(viewport={'width': width, 'height': 844}, locale='es-MX', reduced_motion='reduce')
        page = context.new_page()
        page.goto(base, wait_until='domcontentloaded')
        menu = page.locator('.navbar__hamburger')
        expect(menu).to_be_visible()
        rect = menu.bounding_box()
        assert rect['x'] >= 0 and rect['x'] + rect['width'] <= width, (width, rect)
        menu.click()
        expect(menu).to_have_attribute('aria-expanded', 'true')
        page.get_by_role('navigation').first.get_by_role('link', name='Proyectos', exact=True).click()
        expect(page.locator('.project-detail__title')).to_be_visible()
        expect(menu).to_have_attribute('aria-expanded', 'false')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}px'
        assert page.locator('.projects-explorer').bounding_box()['y'] < 750, 'Projects are too far below the fold'
        page.get_by_role('button', name='Hardware', exact=True).click()
        page.get_by_role('button', name='S.R.A.S.C.', exact=True).click()
        expect(page.locator('.project-detail__actions a[href="https://github.com/Shinra3245/SRASC_ESP32"]')).to_be_visible()
        if width == 390:
            page.screenshot(path=str(shots / 'mobile-projects.png'))
        context.close()
    browser.close()

print('PASS: navigation, 9 projects, filters, features, repository links, CV, regional languages, keyboard toggle, and 5 viewport widths.')
