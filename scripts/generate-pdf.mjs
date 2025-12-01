import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const imagePath = path.join(process.cwd(), 'public', 'images', 'marketing-onepager.png');
const base64Image = fs.readFileSync(imagePath).toString('base64');
const imgSrc = `data:image/png;base64,${base64Image}`;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vital Enterprises - One Pager</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            color: #2F4F4F;
            margin: 0;
            padding: 0;
            background: #F8FAFC;
        }
        .container {
            width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #708090;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            font-family: 'Montserrat', sans-serif;
            color: #2F4F4F;
            font-size: 28px;
            text-transform: uppercase;
            margin: 0;
        }
        .hero-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .content {
            display: flex;
            gap: 40px;
        }
        .left-col {
            flex: 2;
        }
        .right-col {
            flex: 1;
            background: #f0fdf4;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #bbf7d0;
        }
        h2 {
            font-family: 'Montserrat', sans-serif;
            color: #708090;
            font-size: 18px;
            margin-top: 0;
        }
        .problem {
            font-style: italic;
            color: #ef4444;
            margin-bottom: 20px;
        }
        .solution {
            font-weight: 600;
            margin-bottom: 20px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 12px;
            padding-left: 24px;
            position: relative;
        }
        ul li:before {
            content: "✓";
            color: #FFBF00;
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        .offer-box {
            background: #2F4F4F;
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin-top: 20px;
        }
        .offer-box h3 {
            color: #FFBF00;
            margin: 0 0 10px 0;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 14px;
            color: #708090;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Vital Enterprises</h1>
            <p style="margin-top: 5px; color: #708090;">2026: The Year of AI. Don't Get Left Behind.</p>
        </div>

        <img src="${imgSrc}" alt="Consulting Scene" class="hero-img">

        <div class="content">
            <div class="left-col">
                <div class="problem">
                    "Your competitors are using AI to answer calls, write emails, and optimize routes. Are you?"
                </div>
                <div class="solution">
                    Vital Enterprises provides the hardware, software, and training to modernize your business without the headache.
                </div>
                
                <h2>Key Offerings</h2>
                <ul>
                    <li><strong>AI Web Redesign:</strong> A modern site in days, not weeks.</li>
                    <li><strong>Air-Gapped Privacy:</strong> Enterprise AI that stays in your building (Nvidia DGX Spark).</li>
                    <li><strong>AEO Analysis:</strong> Be found on ChatGPT and Claude.</li>
                    <li><strong>Employee Training:</strong> Turn your staff into AI operators.</li>
                </ul>
            </div>

            <div class="right-col">
                <div class="offer-box">
                    <h3>December 2025 Exclusive</h3>
                    <p>Free AI Readiness Audit</p>
                    <p style="font-size: 0.9em; opacity: 0.8;">(Value $500)</p>
                </div>
                
                <div style="margin-top: 30px; text-align: center;">
                    <p><strong>Ready to start?</strong></p>
                    <p>Visit AISupportPDX.com</p>
                    <p>or call (503) 555-0123</p>
                </div>
            </div>
        </div>

        <div class="footer">
            Vital Enterprises | Made in Portland, OR | gemini-only.aireadypdx.com
        </div>
    </div>
</body>
</html>
`;

async function generatePDF() {
    console.log("Generating PDF...");
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();
    
    // Set content
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(process.cwd(), 'marketing-onepager.pdf');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20px',
            bottom: '20px',
            left: '20px',
            right: '20px'
        }
    });

    console.log(`✅ PDF saved to ${pdfPath}`);
    await browser.close();
}

generatePDF();
