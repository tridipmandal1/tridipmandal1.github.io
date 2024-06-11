// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {
  // Get reference to download button
  var downloadButton = document.getElementById('download-button');

  // Add click event listener to download button
  downloadButton.addEventListener('click', function() {
      // Replace 'path_to_your_pdf_file.pdf' with the actual path of your PDF file
      var pdfPath = 'resources/updated cv me.pdf';
      
      // Create an anchor element
      var anchor = document.createElement('a');
      anchor.href = pdfPath;
      
      // Set the download attribute to force download
      anchor.download = 'Tridip Mandal.pdf'; // You can set any filename you want here
      
      // Append the anchor to the body and trigger a click event
      document.body.appendChild(anchor);
      anchor.click();
      
      // Clean up by removing the anchor from the body
      document.body.removeChild(anchor);
  });

  // Get reference to view button
  var viewButton = document.getElementById('view-button');

  // Add click event listener to view button
  viewButton.addEventListener('click', function() {
      // Replace 'path_to_your_pdf_file.pdf' with the actual path of your PDF file
      var pdfPath = 'resources/updated cv me.pdf';
      
      // Open PDF file in a new tab
      window.open(pdfPath, '_blank');
  });
});
