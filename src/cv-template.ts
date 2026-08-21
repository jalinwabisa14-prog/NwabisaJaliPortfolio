export function buildCvHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nwabisa Queen Jali - CV</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a202c; background: #f7fafc; line-height: 1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { max-width: 800px; margin: 32px auto; background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; }
  .header { background: linear-gradient(135deg, #002845, #003a57); color: #fff; padding: 40px 48px; }
  .header h1 { font-size: 30px; font-weight: 700; margin-bottom: 6px; }
  .header .role { font-size: 16px; color: #66ccff; font-weight: 600; margin-bottom: 14px; }
  .header .contact { display: flex; flex-wrap: wrap; gap: 18px; font-size: 13px; color: #cceeff; }
  .header .contact a { color: #cceeff; text-decoration: none; }
  .body { padding: 36px 48px; }
  .section { margin-bottom: 28px; }
  .section:last-child { margin-bottom: 0; }
  .section h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #003a57; border-bottom: 2px solid #66ccff; padding-bottom: 6px; margin-bottom: 14px; }
  .item { margin-bottom: 16px; }
  .item:last-child { margin-bottom: 0; }
  .item-header { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; }
  .item-header h3 { font-size: 15px; font-weight: 700; color: #1a202c; }
  .item-header .period { font-size: 12px; color: #718096; background: #edf2f7; padding: 3px 10px; border-radius: 12px; }
  .item .org { font-size: 13px; color: #0099e6; font-weight: 600; margin-bottom: 4px; }
  .item p { font-size: 13px; color: #4a5568; margin-bottom: 6px; }
  .item ul { list-style: none; padding-left: 0; }
  .item ul li { font-size: 13px; color: #4a5568; padding-left: 16px; position: relative; margin-bottom: 3px; }
  .item ul li::before { content: '+ '; position: absolute; left: 0; color: #0099e6; font-weight: 700; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
  .tag { font-size: 11px; padding: 3px 10px; border-radius: 6px; background: #e6f7ff; color: #003a57; border: 1px solid #cceeff; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .info-line { font-size: 13px; color: #4a5568; margin-bottom: 4px; }
  .info-line strong { color: #1a202c; }
  @media print { body { background: #fff; } .page { box-shadow: none; margin: 0; max-width: 100%; border-radius: 0; } }
  @media (max-width: 600px) { .header { padding: 28px 24px; } .body { padding: 24px; } .two-col { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <h1>Nwabisa Queen Jali</h1>
    <p class="role">Brand &amp; Campaign Specialist &middot; BCom Marketing Management</p>
    <div class="contact">
      <span>jali.nwabisa14@gmail.com</span>
      <span>073 022 4379 &middot; 083 687 4565</span>
      <a href="https://linkedin.com/in/nwabisa-jali-136b67338">linkedin.com/in/nwabisa-jali</a>
      <a href="https://github.com/jalinwabisa14-prog">github.com/jalinwabisa14-prog</a>
      <span>Orlando East, Soweto, South Africa</span>
    </div>
  </div>
  <div class="body">
    <div class="section">
      <h2>Profile</h2>
      <p>A Marketing Management graduate from the University of Johannesburg with a practical foundation in brand support, campaign planning, market research, consumer behaviour, and retail merchandising. I bring initiative, clear communication, and a willingness to learn to every team.</p>
    </div>

    <div class="section">
      <h2>Work Experience</h2>
      <div class="item">
        <div class="item-header"><h3>Project Manager &amp; Co-Founder</h3><span class="period">1 Year Contract</span></div>
        <p class="org">School2gether &middot; EdTech project</p>
        <p>Conceptualised and led the development of a South African education technology platform connecting learners, tutors, and parents.</p>
        <ul>
          <li>Conducted market research and competitor analysis across the South African EdTech sector</li>
          <li>Developed the marketing strategy, including objectives, target segments, pricing, and promotions</li>
          <li>Designed the app concept, user experience flows, and functional framework with accessibility as a core principle</li>
          <li>Pitched the business to potential investors and education sector partners</li>
        </ul>
        <div class="tags"><span class="tag">Market research</span><span class="tag">Campaign planning</span><span class="tag">Product strategy</span><span class="tag">Stakeholder presentations</span></div>
      </div>
      <div class="item">
        <div class="item-header"><h3>Merchandiser</h3><span class="period">1 Year Contract</span></div>
        <p class="org">Shoprite P.F.M &middot; Retail marketing</p>
        <p>Supported in-store product visibility and category presentation through merchandising and cross-functional collaboration.</p>
        <ul>
          <li>Designed and executed in-store product displays that improved shelf visibility</li>
          <li>Collaborated with suppliers and store teams to maintain optimal stock levels</li>
          <li>Applied consumer buying behaviour insights to position products for engagement and conversion</li>
        </ul>
        <div class="tags"><span class="tag">Retail merchandising</span><span class="tag">Product placement</span><span class="tag">Consumer insight</span><span class="tag">Supplier collaboration</span></div>
      </div>
      <div class="item">
        <div class="item-header"><h3>Booking Clerk</h3><span class="period">2 Years</span></div>
        <p class="org">RSA Group &middot; Customer operations</p>
        <p>Managed booking administration and customer queries while maintaining accurate digital and paper records.</p>
        <ul>
          <li>Issued booking confirmations, tickets, and reference numbers</li>
          <li>Handled cash, invoices, and payment records related to bookings</li>
          <li>Answered customer queries in person, by phone, and via email</li>
          <li>Resolved booking conflicts, cancellations, and changes with care and accuracy</li>
        </ul>
        <div class="tags"><span class="tag">Customer service</span><span class="tag">Records management</span><span class="tag">Payment administration</span><span class="tag">Problem solving</span></div>
      </div>
    </div>

    <div class="section">
      <h2>Education</h2>
      <div class="item">
        <div class="item-header"><h3>BCom Marketing Management</h3><span class="period">Completed 2025</span></div>
        <p class="org">University of Johannesburg</p>
        <div class="tags"><span class="tag">Marketing Management</span><span class="tag">Business Management</span><span class="tag">Logistics Management</span><span class="tag">Financial Management</span><span class="tag">Accounting</span><span class="tag">Economics</span></div>
      </div>
      <div class="item">
        <div class="item-header"><h3>National Senior Certificate</h3><span class="period">Completed 2022</span></div>
        <p class="org">Thaba Jabula Secondary School</p>
        <div class="tags"><span class="tag">Mathematics</span><span class="tag">Geography</span><span class="tag">Physical &amp; Life Sciences</span><span class="tag">English (FAL)</span><span class="tag">IsiXhosa (HL)</span><span class="tag">Life Orientation</span></div>
      </div>
    </div>

    <div class="section">
      <h2>Certifications</h2>
      <div class="item">
        <div class="item-header"><h3>Bachelor of Commerce in Marketing Management</h3><span class="period">2025</span></div>
        <p class="org">University of Johannesburg</p>
      </div>
      <div class="item">
        <div class="item-header"><h3>Artificial Intelligence in the 4IR (SLP)</h3><span class="period">2024</span></div>
        <p class="org">Professional Development</p>
      </div>
      <div class="item">
        <div class="item-header"><h3>Advanced Information Technology</h3><span class="period">2024</span></div>
        <p class="org">Professional Development</p>
      </div>
    </div>

    <div class="section">
      <h2>Skills</h2>
      <div class="two-col">
        <div>
          <p class="info-line"><strong>Brand &amp; Campaigns:</strong> Brand strategy support, Campaign planning, Go-to-market thinking, Promotional campaigns</p>
          <p class="info-line"><strong>Research &amp; Insight:</strong> Consumer behaviour analysis, Market research, Competitor analysis, Target segments</p>
        </div>
        <div>
          <p class="info-line"><strong>Retail &amp; Digital:</strong> Retail merchandising, Product placement, Social media engagement, Digital marketing trends</p>
          <p class="info-line"><strong>Business:</strong> Business pitching, Stakeholder presentations, Excel reporting, Cross-functional teamwork</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Additional Information</h2>
      <div class="two-col">
        <div>
          <p class="info-line"><strong>Languages:</strong> IsiXhosa (Native), English (Fluent), Sepedi (Conversational)</p>
          <p class="info-line"><strong>Citizenship:</strong> South African</p>
        </div>
        <div>
          <p class="info-line"><strong>Availability:</strong> Immediately available for internships, part-time, or full-time roles</p>
          <p class="info-line"><strong>Location:</strong> Orlando East, Soweto, South Africa</p>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;
}
