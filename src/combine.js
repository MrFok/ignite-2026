const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../output/pdfs');
const combinedOutputPath = path.join(outputDir, 'IGNITE_2026_Workbook_Combined.pdf');

// List of worksheets in order
const worksheetFiles = [
  '00_title.pdf',
  '01_wins.pdf',
  '02_challenges.pdf',
  '03_what_worked.pdf',
  '04_annual_theme.pdf',
  '05_quarterly_quests.pdf',
  '06_core_themes.pdf',
  '07_vision_areas.pdf',
  '08_celebration.pdf',
  '09_vision_board.pdf',
  '10_dopamine_habits.pdf',
  '11_dopamine_audit.pdf',
  '12_dose_framework.pdf',
  '13_dopamine_intention.pdf',
  '14_day1_checkpoint.pdf',
  '15_action_intro.pdf',
  '16_tiny_experiments.pdf',
  '17_limiting_beliefs.pdf',
  '18_three_powers.pdf',
  '19_lifeos_structure.pdf',
  '20_weekly_rhythm.pdf',
  '21_reviews.pdf',
  '22_operating_system.pdf',
  '23_first_week.pdf',
  '24_completion.pdf',
];

async function combinePDFs() {
  console.log('');
  console.log('='.repeat(60));
  console.log('  COMBINING PDF WORKSHEETS');
  console.log('='.repeat(60));
  console.log('');
  
  const mergedPdf = await PDFDocument.create();
  
  // Embed a standard font for page numbers
  const font = await mergedPdf.embedFont(StandardFonts.Courier);
  
  let totalPages = 0;
  let processed = 0;
  let failed = 0;
  
  for (const fileName of worksheetFiles) {
    const filePath = path.join(outputDir, fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`[SKIP] ${fileName} - File not found`);
      failed++;
      continue;
    }
    
    try {
      const pdfBytes = fs.readFileSync(filePath);
      const pdf = await PDFDocument.load(pdfBytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      
      pages.forEach((page) => {
        mergedPdf.addPage(page);
        totalPages++;
      });
      
      processed++;
      console.log(`[${processed}/${worksheetFiles.length}] Added ${fileName} (${pdf.getPageCount()} page(s))`);
    } catch (error) {
      console.error(`[ERR] ${fileName} - ${error.message}`);
      failed++;
    }
  }
  
  console.log('');
  console.log(`Adding continuous page numbers to ${totalPages} pages...`);
  
  // Add continuous page numbers to all pages (skip title page which is page 0)
  const allPages = mergedPdf.getPages();
  for (let i = 0; i < allPages.length; i++) {
    const page = allPages[i];
    const { width, height } = page.getSize();
    
    // Skip page numbering on the title page (first page)
    if (i === 0) {
      continue;
    }
    
    // Draw white rectangle to cover old page number (bottom RIGHT area)
    // Page numbers are on the right side of the footer
    page.drawRectangle({
      x: width - 50,
      y: 6,
      width: 40,
      height: 12,
      color: rgb(1, 1, 1), // white
    });
    
    // Draw new continuous page number (right-aligned)
    // Page numbers start from 1 (title page is page 0, so content pages are 1-51)
    const contentPages = totalPages - 1; // Exclude title page from count
    const pageNumText = `${i}/${contentPages}`;
    const textWidth = font.widthOfTextAtSize(pageNumText, 6);
    page.drawText(pageNumText, {
      x: width - 28 - textWidth / 2,
      y: 9,
      size: 6,
      font: font,
      color: rgb(0.5, 0.5, 0.5), // gray
    });
  }
  
  const mergedPdfBytes = await mergedPdf.save();
  fs.writeFileSync(combinedOutputPath, mergedPdfBytes);
  
  console.log('');
  console.log('-'.repeat(60));
  console.log(`Successfully combined ${processed} PDF files`);
  console.log(`Total pages: ${totalPages}`);
  if (failed > 0) {
    console.log(`Failed: ${failed}`);
  }
  console.log(`Output: ${combinedOutputPath}`);
  console.log('-'.repeat(60));
  console.log('');
}

combinePDFs().catch((error) => {
  console.error('Error combining PDFs:', error);
  process.exit(1);
});
