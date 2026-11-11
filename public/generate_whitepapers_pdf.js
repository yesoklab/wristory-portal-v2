import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function createBrahmsPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
  const margin = 45;
  const contentWidth = pageWidth - (margin * 2); // 505.28 pt

  const primaryNavy = [15, 23, 42];      // #0F172A
  const accentBlue = [37, 99, 235];      // #2563EB
  const accentCyan = [6, 182, 212];      // #06B6D4
  const accentAmber = [217, 119, 6];     // #D97706
  const textDark = [30, 41, 59];         // #1E293B
  const textMuted = [100, 116, 139];     // #64748B
  const borderLight = [226, 232, 240];   // #E2E8F0

  function addHeader(pageNum, totalPages) {
    // Header Bar
    doc.setFillColor(...primaryNavy);
    doc.rect(0, 0, pageWidth, 42, 'F');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text('YESOKLAB BLOCKCHAIN HERITAGE LAB', margin, 26);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...accentCyan);
    doc.text('BASE L2 SPECIFICATION | BASESCAN TICKET #878299', pageWidth - margin, 26, { align: 'right' });

    // Footer Bar
    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.5);
    doc.line(margin, pageHeight - 32, pageWidth - margin, pageHeight - 32);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...textMuted);
    doc.text('Official Domain: https://www.wristory.co.kr | Contact: yesoklab@gmail.com', margin, pageHeight - 18);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 18, { align: 'right' });
  }

  // ===================== PAGE 1 =====================
  // Cover Banner
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, 56, contentWidth, 122, 'F');
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1.5);
  doc.rect(margin, 56, contentWidth, 122, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...accentBlue);
  doc.text('OFFICIAL TECHNICAL WHITEPAPER v1.0 - BASE MAINNET', margin + 16, 78);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...textDark);
  doc.text('BRAHMS ($BRAHMS)', margin + 16, 106);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(...textMuted);
  doc.text('On-Chain Cultural Heritage Memorial, Digital Archive & Child Welfare Initiative', margin + 16, 124);

  // Key stats badge
  doc.setFillColor(...primaryNavy);
  doc.roundedRect(margin + 16, 138, contentWidth - 32, 26, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('CONTRACT: 0xE790C3D5e3381926c66416638Fd3e955e748Bb89', margin + 26, 154);
  doc.setTextColor(...accentCyan);
  doc.text('MAX SUPPLY: 193,906,150 BRAHMS (Capped)', contentWidth + margin - 26, 154, { align: 'right' });

  let yPos = 202;

  // Section 1: Executive Summary & Vision
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('1. Executive Summary & Vision', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 160, yPos);
  yPos += 16;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  
  const textWidth = contentWidth - 10;

  const p1 = doc.splitTextToSize(
    'BRAHMS ($BRAHMS) is a decentralized digital cultural heritage tribute and community initiative deployed on Coinbase Ethereum Layer-2 (Base Mainnet). The project is dedicated to permanently archiving the cultural contributions, humanist philosophy, and philanthropic service legacy of Choi Bool-am (National Cultural Icon and Philanthropist), one of the most beloved and celebrated cultural figures in modern Korean history.',
    textWidth
  );
  doc.text(p1, margin, yPos);
  yPos += p1.length * 12.5 + 8;

  const p2 = doc.splitTextToSize(
    'For over half a century, Mr. Choi warm and comforting presence has shaped Korean popular culture through timeless masterpieces such as Country Diaries (Jeon-won Il-gi, 1980-2002) and Chief Inspector (Susa Banjang, 1971-1989). Simultaneously, as the national honorary chairperson of ChildFund Korea for over four decades, he has tirelessly championed child welfare, social compassion, and youth protection.',
    textWidth
  );
  doc.text(p2, margin, yPos);
  yPos += p2.length * 12.5 + 8;

  const p3 = doc.splitTextToSize(
    'The BRAHMS project translates this enduring cultural and humanitarian legacy into an immutable on-chain record on Base, creating a sustainable, transparent vehicle for cultural preservation, youth artist empowerment, and social welfare support.',
    textWidth
  );
  doc.text(p3, margin, yPos);
  yPos += p3.length * 12.5 + 18;

  // Section 2: Token Technical Specifications
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('2. Token Technical Specifications', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 160, yPos);
  yPos += 15;

  const specs = [
    ['Token Name', 'BRAHMS (Bul-am-se)'],
    ['Token Symbol', 'BRAHMS'],
    ['Primary Network', 'Base Mainnet (Ethereum Layer-2, Chain ID: 8453)'],
    ['Token Standard', 'ERC-20 (Standard, OpenZeppelin-compatible)'],
    ['Contract Address', '0xE790C3D5e3381926c66416638Fd3e955e748Bb89'],
    ['BaseScan Explorer', 'https://basescan.org/token/0xE790C3D5e3381926c66416638Fd3e955e748Bb89'],
    ['Max Total Supply', '193,906,150 BRAHMS (Fixed Total Supply, Zero Inflation)'],
    ['Decimals', '18'],
    ['Token Logo (256x256 IPFS)', 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejr426cgatoqimlyposwzrvwm2kqoc6t3a6buq2jm24fgkslvujm'],
    ['Settlement Currency', 'ETH (Ethereum on Base Layer-2)']
  ];

  specs.forEach(([label, val], idx) => {
    const rowY = yPos + (idx * 18);
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, rowY, contentWidth, 18, 'F');
    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.5);
    doc.rect(margin, rowY, contentWidth, 18, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    doc.text(label, margin + 8, rowY + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(label.includes('Contract') ? 37 : 71, label.includes('Contract') ? 99 : 85, label.includes('Contract') ? 235 : 105);
    doc.text(val, margin + 145, rowY + 12);
  });

  addHeader(1, 3);

  // ===================== PAGE 2 =====================
  doc.addPage();
  yPos = 58;

  // Section 3: Tokenomics & Verified Distribution Model
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('3. Tokenomics & Verified Distribution Model', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 220, yPos);
  yPos += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  const tInfo = doc.splitTextToSize(
    'The maximum total supply is permanently hard-capped at 193,906,150 BRAHMS, precisely matching on-chain totalSupply() on Base Mainnet. No minting function or inflationary mechanism exists in the smart contract.',
    textWidth
  );
  doc.text(tInfo, margin, yPos);
  yPos += tInfo.length * 12.5 + 12;

  // Distribution Table
  const tableHeaders = ['Allocation Category', 'Ratio', 'Amount (BRAHMS)', 'Description & Dedicated Purpose'];
  const tableColWidths = [140, 45, 95, 225];

  doc.setFillColor(...primaryNavy);
  doc.rect(margin, yPos, contentWidth, 20, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  let curX = margin + 6;
  tableHeaders.forEach((th, i) => {
    doc.text(th, curX, yPos + 13);
    curX += tableColWidths[i];
  });
  yPos += 20;

  const distributionRows = [
    [
      'Cultural Heritage Memorial',
      '51.58%',
      '100,010,000',
      'Permanent digital archiving of cultural works, generative art curation, and memorial museum exhibitions.'
    ],
    [
      'Youth & Child Welfare',
      '25.00%',
      '48,476,537',
      'Charitable initiatives honoring Mr. Choi 40+ years of child advocacy; creative youth grants and scholarships.'
    ],
    [
      'Base Liquidity & Ops',
      '23.42%',
      '45,419,613',
      'Uniswap v4 decentralized exchange liquidity pool pairs (BRAHMS/ETH), automated market making, and security.'
    ],
    [
      'Total Verified Supply',
      '100.00%',
      '193,906,150',
      'Immutable hard cap; fixed supply with zero inflation on Base Mainnet (ERC-20 standard).'
    ]
  ];

  distributionRows.forEach((row, rIdx) => {
    const isTotal = rIdx === distributionRows.length - 1;
    const rHeight = isTotal ? 22 : 36;
    doc.setFillColor(isTotal ? 241 : (rIdx % 2 === 0 ? 255 : 248), isTotal ? 245 : 250, isTotal ? 249 : 252);
    doc.rect(margin, yPos, contentWidth, rHeight, 'F');
    doc.setDrawColor(...borderLight);
    doc.rect(margin, yPos, contentWidth, rHeight, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...(isTotal ? accentBlue : textDark));
    doc.text(row[0], margin + 6, yPos + 14);
    doc.text(row[1], margin + tableColWidths[0] + 6, yPos + 14);
    doc.text(row[2], margin + tableColWidths[0] + tableColWidths[1] + 6, yPos + 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...textDark);
    const descLines = doc.splitTextToSize(row[3], tableColWidths[3] - 10);
    doc.text(descLines, margin + tableColWidths[0] + tableColWidths[1] + tableColWidths[2] + 6, yPos + 12);

    yPos += rHeight;
  });

  yPos += 20;

  // Section 4: Brand & Non-Infringement Clarification
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('4. Brand, Trademark & Non-Infringement Statement', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 260, yPos);
  yPos += 15;

  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(...accentAmber);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPos, contentWidth, 115, 6, 6, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...accentAmber);
  doc.text('OFFICIAL LEGAL & ETHICAL STATEMENT (BASE SCAN COMPLIANCE)', margin + 12, yPos + 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const legalText = [
    '1. Non-Profit Cultural Tribute: BRAHMS is conceived and operates strictly as a community-driven digital cultural heritage memorial. It does not operate as an unregistered commercial vehicle.',
    '2. Zero Commercial Misrepresentation: The project does not claim corporate endorsement or representation of public broadcasting corporations (MBC/KBS) or commercial entities.',
    '3. Public Domain & Historical Honor: The initiative honors intangible national cultural heritage and channels community support into verified public welfare and next-generation art creation.',
    '4. Clear Distinctions: The token name, ticker ($BRAHMS), and associated smart contracts are registered transparently by YesOkLab as open-source cultural artifacts on Base L2.'
  ];

  let lY = yPos + 34;
  legalText.forEach(lt => {
    const lLines = doc.splitTextToSize(lt, contentWidth - 24);
    doc.text(lLines, margin + 12, lY);
    lY += lLines.length * 11 + 4;
  });

  yPos += 132;

  // Section 5: Technical Architecture on Base Mainnet
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('5. Base Layer-2 Technical Architecture', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 200, yPos);
  yPos += 15;

  const archPoints = [
    '* Sub-Cent Gas Efficiency: Built on Coinbase Base L2 to allow micro-donations and community transactions without exorbitant Ethereum Layer-1 gas fees.',
    '* Permanent On-Chain Immutability: Backed by Ethereum L1 optimistic rollup security, guaranteeing that cultural records cannot be altered or removed.',
    '* Interoperable Web3 Integration: Fully integrated with MetaMask (EIP-747 automatic token watch), Uniswap v4 liquidity pools, and decentralized Pinata/IPFS gateways.'
  ];

  archPoints.forEach(ap => {
    const lines = doc.splitTextToSize(ap, textWidth);
    doc.text(lines, margin, yPos);
    yPos += lines.length * 12 + 4;
  });

  addHeader(2, 3);

  // ===================== PAGE 3 =====================
  doc.addPage();
  yPos = 58;

  // Section 6: Project Leadership & Transparent Team Disclosure
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('6. Project Leadership & Transparent Team Disclosure', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 280, yPos);
  yPos += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  const teamIntro = doc.splitTextToSize(
    'In strict adherence to BaseScan verified information guidelines, the development, infrastructure, and smart contract administration of the BRAHMS token are managed by YesOkLab under the public leadership of its founder:',
    textWidth
  );
  doc.text(teamIntro, margin, yPos);
  yPos += teamIntro.length * 12.5 + 12;

  // Founder Profile Card
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPos, contentWidth, 140, 6, 6, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...textDark);
  doc.text('Kim Kyung-koo', margin + 16, yPos + 22);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...accentBlue);
  doc.text('Founder & Chief Technology Architect | YesOkLab (Seoul, Republic of Korea)', margin + 16, yPos + 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const fBio = [
    '* Professional Background: Blockchain cultural heritage architect and senior Web3 engineer specializing in smart contract deployment, Uniswap v4 custom liquidity hooks, and immutable generative art preservation.',
    '* Core Initiatives: Lead architect of WRISTORY ($WR) literary & historical digital preservation, BRAHMS ($BRAHMS) cultural tribute token, and the Tezos-to-Base 1:1 on-chain migration portal.',
    '* Public Verified Profiles & Channels (BaseScan Required):',
    '   - Medium (Official Tech Articles): https://medium.com/@wakk5252',
    '   - Naver Official Tech Blog: https://blog.naver.com/yesoklab',
    '   - X (Twitter Official): https://x.com/wakk5252',
    '   - GitHub (Open Source Codebase): https://github.com/yesoklab'
  ];

  let fY = yPos + 50;
  fBio.forEach(fb => {
    const fLines = doc.splitTextToSize(fb, contentWidth - 32);
    doc.text(fLines, margin + 16, fY);
    fY += fLines.length * 11 + 3;
  });

  yPos += 156;

  // Organization & Contact Card
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(...borderLight);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPos, contentWidth, 105, 6, 6, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...textDark);
  doc.text('Official Organization & Contact Channels', margin + 16, yPos + 20);

  const orgDetails = [
    ['Official Primary Website', 'https://www.wristory.co.kr/'],
    ['Mirror / Live Portal', 'https://wristory-portal-v2.vercel.app/'],
    ['Official Contact / Inquiries Email', 'yesoklab@gmail.com'],
    ['Open-Source Repository', 'https://github.com/yesoklab/wristory-portal-v2'],
    ['IPFS Token Logo Gateway', 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejr426cgatoqimlyposwzrvwm2kqoc6t3a6buq2jm24fgkslvujm'],
    ['BaseScan Support Ticket Reference', 'Ticket #878299 (Re: Update Token Information)']
  ];

  let orgY = yPos + 34;
  orgDetails.forEach(([k, v]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textMuted);
    doc.text(k + ':', margin + 16, orgY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...(k.includes('Email') || k.includes('Ticket') ? accentBlue : textDark));
    doc.text(v, margin + 175, orgY);
    orgY += 12;
  });

  yPos += 122;

  // Section 7: Legal Disclaimer
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...textDark);
  doc.text('7. Compliance & Legal Disclaimer', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 150, yPos);
  yPos += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...textMuted);
  const discLines = doc.splitTextToSize(
    'This whitepaper is prepared exclusively for informational, technical verification, and official token registry compliance (including BaseScan, CoinGecko, and CoinMarketCap perusal). It does not constitute investment advice, financial promotion, or an offer or solicitation of securities in any jurisdiction. All cryptographic transactions on Base Layer-2 are decentralized, immutable, and peer-to-peer. The YesOkLab team maintains full open-source governance and transparent disclosure for community benefit.',
    textWidth
  );
  doc.text(discLines, margin, yPos);

  addHeader(3, 3);

  const outputPath = path.resolve('public', 'BRAHMS_Whitepaper_v1.0.pdf');
  const pdfBytes = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log('Saved BRAHMS PDF to:', outputPath, 'Size:', fs.statSync(outputPath).size);
}

function createWristoryPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 45;
  const contentWidth = pageWidth - (margin * 2);

  const primaryNavy = [15, 23, 42];
  const accentBlue = [37, 99, 235];
  const accentCyan = [6, 182, 212];
  const textDark = [30, 41, 59];
  const textMuted = [100, 116, 139];
  const borderLight = [226, 232, 240];

  function addHeader(pageNum, totalPages) {
    doc.setFillColor(...primaryNavy);
    doc.rect(0, 0, pageWidth, 42, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text('WRISTORY HERITAGE ARCHIVE | YESOKLAB', margin, 26);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...accentCyan);
    doc.text('BASE L2 ERC-20 & UNISWAP V4 SPECIFICATION', pageWidth - margin, 26, { align: 'right' });

    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.5);
    doc.line(margin, pageHeight - 32, pageWidth - margin, pageHeight - 32);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...textMuted);
    doc.text('Official Domain: https://www.wristory.co.kr | Base Contract: 0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7', margin, pageHeight - 18);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 18, { align: 'right' });
  }

  // Cover Banner
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, 56, contentWidth, 122, 'F');
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1.5);
  doc.rect(margin, 56, contentWidth, 122, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...accentBlue);
  doc.text('OFFICIAL TECHNICAL WHITEPAPER v2.0 - BASE L2 & TEZOS', margin + 16, 78);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...textDark);
  doc.text('WRISTORY ($WR)', margin + 16, 106);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(...textMuted);
  doc.text('Decentralized Literary Heritage Archive & 1:1 Tezos-to-Base Cross-Chain Ecosystem', margin + 16, 124);

  doc.setFillColor(...primaryNavy);
  doc.roundedRect(margin + 16, 138, contentWidth - 32, 26, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('BASE CONTRACT: 0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7', margin + 26, 154);
  doc.setTextColor(...accentCyan);
  doc.text('MAX SUPPLY: 51,169,148 WR (Fixed)', contentWidth + margin - 26, 154, { align: 'right' });

  let yPos = 202;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('1. Project Vision & Literary Preservation', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 200, yPos);
  yPos += 15;

  const textWidth = contentWidth - 10;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  const wIntro = doc.splitTextToSize(
    'WRISTORY ($WR) is an on-chain cultural protocol dedicated to preserving historical literature, generative art, and intangible intellectual heritage. Originally launched on Tezos for fine-art NFT curation with over 1,063 active collectors, WRISTORY expanded to Ethereum Layer-2 (Base Mainnet) in 2026 to harness sub-cent transaction speeds, deep Uniswap v4 liquidity pools, and broad global interoperability.',
    textWidth
  );
  doc.text(wIntro, margin, yPos);
  yPos += wIntro.length * 12.5 + 15;

  // Specs
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('2. Token Specifications (Base & Tezos)', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 200, yPos);
  yPos += 15;

  const wSpecs = [
    ['Token Symbol', 'WR (WRISTORY)'],
    ['Base L2 Contract', '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7'],
    ['Tezos FA2 Contract', 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'],
    ['Max Total Supply', '51,169,148 WR (Exact 1:1 Parity Across Chains)'],
    ['Decimals', '18 (Base ERC-20) / 6 (Tezos FA2)'],
    ['Uniswap v4 Position', 'https://app.uniswap.org/positions/v4/base/2953119'],
    ['GeckoTerminal Pool', 'https://www.geckoterminal.com/ko/base/pools/0x637667a6d1aba931cb2c827645a5c5ee0af58a86df1c8bd28a467020a74b933a'],
    ['BaseScan Explorer', 'https://basescan.org/token/0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7'],
    ['Official Portal', 'https://www.wristory.co.kr/'],
    ['Contact & Verification', 'yesoklab@gmail.com']
  ];

  wSpecs.forEach(([k, v], idx) => {
    const rowY = yPos + (idx * 18);
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, rowY, contentWidth, 18, 'F');
    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.5);
    doc.rect(margin, rowY, contentWidth, 18, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    doc.text(k, margin + 8, rowY + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(k.includes('Contract') ? 37 : 71, k.includes('Contract') ? 99 : 85, k.includes('Contract') ? 235 : 105);
    doc.text(v, margin + 140, rowY + 12);
  });

  addHeader(1, 2);

  // Page 2
  doc.addPage();
  yPos = 58;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('3. Tokenomics & Uniswap v4 Liquidity Architecture', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 250, yPos);
  yPos += 15;

  const wAllocations = [
    ['Community & Ecosystem Heritage', '30%', '15,350,744', 'Cultural grants, author archives, and generative art commissions.'],
    ['Uniswap v4 Liquidity Pools', '20%', '10,233,829', 'Active locked LP pair on Base Mainnet paired with ETH.'],
    ['Treasury & Foundation Reserve', '20%', '10,233,829', 'Long-term preservation reserve and validator staking.'],
    ['Core Development & Protocols', '15%', '7,675,372', 'Smart contract infrastructure, cross-chain oracle maintenance.'],
    ['Tezos 1:1 Migration Escrow', '10%', '5,116,914', 'Dedicated escrow pool guaranteeing 1:1 exchange for Tezos holders.'],
    ['Advisors & Research Partners', '5%', '2,558,457', 'Legal compliance, Clarity Act academic research advisory.']
  ];

  doc.setFillColor(...primaryNavy);
  doc.rect(margin, yPos, contentWidth, 20, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('Category', margin + 6, yPos + 13);
  doc.text('Ratio', margin + 160, yPos + 13);
  doc.text('Amount (WR)', margin + 210, yPos + 13);
  doc.text('Purpose', margin + 300, yPos + 13);
  yPos += 20;

  wAllocations.forEach((row, i) => {
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, 22, 'F');
    doc.setDrawColor(...borderLight);
    doc.rect(margin, yPos, contentWidth, 22, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    doc.text(row[0], margin + 6, yPos + 14);
    doc.text(row[1], margin + 160, yPos + 14);
    doc.text(row[2], margin + 210, yPos + 14);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(row[3], margin + 300, yPos + 14);
    yPos += 22;
  });

  yPos += 20;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(...textDark);
  doc.text('4. Project Leadership & Transparency', margin, yPos);
  yPos += 5;
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.line(margin, yPos, margin + 200, yPos);
  yPos += 15;

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(...accentBlue);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPos, contentWidth, 125, 6, 6, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...textDark);
  doc.text('Kim Kyung-koo - Founder & Lead Web3 Architect', margin + 16, yPos + 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const wTeamLines = [
    '* Organization: YesOkLab (Seoul, Republic of Korea)',
    '* Expertise: Smart contract architecture, Uniswap v4 custom liquidity hooks, cross-chain token migration.',
    '* Verified Professional Profiles:',
    '   - Medium: https://medium.com/@wakk5252',
    '   - Naver Blog: https://blog.naver.com/yesoklab',
    '   - X (Twitter): https://x.com/wakk5252',
    '   - GitHub: https://github.com/yesoklab/wristory-portal-v2',
    '   - Email: yesoklab@gmail.com'
  ];

  let wY = yPos + 38;
  wTeamLines.forEach(wl => {
    doc.text(wl, margin + 16, wY);
    wY += 12;
  });

  addHeader(2, 2);

  const outputPath = path.resolve('public', 'WRISTORY_Whitepaper_v2.0_Base.pdf');
  const pdfBytes = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log('Saved WRISTORY PDF to:', outputPath, 'Size:', fs.statSync(outputPath).size);
}

createBrahmsPdf();
createWristoryPdf();
