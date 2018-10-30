function loadDocument(fileName)
{
  var docObj;

  // Load the PDF file to the PDDocument object
  docObj = JavaClasses.org_apache_pdfbox_pdmodel.PDDocument.load_3(fileName);

  // Return the resulting PDDocument object
  return docObj;
}

function findText(docObj, string)
{
  var textStripperObj, text;

  // Create the PDFTextStripper object
  textStripperObj = JavaClasses.org_apache_pdfbox_util.PDFTextStripper.newInstance();

  // Get the document text
  text = textStripperObj.getText_2(docObj);

  // Search for the specified string in the text
  if (aqString.Find(text, string)> -1)
  {
    Log.Message("The document contains the specified string.");
  } else
  {
    Log.Warning("The document does not contain the specified string.");
  }
}
