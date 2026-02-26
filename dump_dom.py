from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/")
        page.wait_for_timeout(2000)
        
        # Get the outer HTML
        content = page.content()
        with open("dump.html", "w", encoding="utf-8") as f:
            f.write(content)
            
        print("DOM dumped to dump.html")
        browser.close()

if __name__ == "__main__":
    run()
