import React, { useEffect } from 'react';

function Resume() {
    useEffect(() => {
        const downloadButton = document.getElementById('downloadButton');
    
        if (downloadButton) {
          downloadButton.addEventListener('click', function () {
            var pdfPath = './Resume/resume.pdf';
            var downloadLink = document.createElement('a');
            downloadLink.download = 'Athul-resume.pdf';
            downloadLink.href = pdfPath;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          });
        }
      }, []); const handleDownload = () => {
        // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
        var pdfPath = './Resume/resume.pdf';
        // Create a download link
        var downloadLink = document.createElement('a');
        // Set the download link properties
        downloadLink.download = 'Athul-resume.pdf'; // Set the file name
        downloadLink.href = pdfPath; // Set the path to the PDF file
        // Append the download link to the document
        document.body.appendChild(downloadLink);
        // Trigger a click event on the download link
        downloadLink.click();
        // Remove the download link from the document
        document.body.removeChild(downloadLink);
      };

  return (
    <>
    <section id="resume">
        <div className="container-fluid my-5" style={{ backgroundColor: '#000000' }}>
        <div className="row">
      {/* Resume Section */}
      <div className="col-md-8 col-sm-12 mb-4">
        <h2 style={{ overflowY: 'hidden', color: 'white' }} className="fs-1 my-3">
          <span style={{ color: '#4285f4' }}>My</span> Resume
        </h2>
        <h3 style={{ color: '#f4b400', overflowY: 'hidden' }}>Ready for a Professional Tango?</h3>
        <p style={{ color: 'white' }}>
          Peek behind the curtain of my professional shenanigans! My resume isn't just a list; it's the backstage pass to the
          extravaganza that is my career. Click on it – it's like the "Play" button for my life's greatest hits. Spoiler alert:
          there might be a dance move or two (professionally speaking, of course). Let’s tango!
        </p>
       <button onClick={handleDownload} type="button" className="btn btn-primary fs-6">Resume <i className="ms-2 fa-solid fa-download" style={{ color: '#ffffff' }}></i></button>
      </div>

      {/* Contact Section */}
      <div className="mb-3 col-md-4 col-sm-12">
        <h3 style={{ color: 'white', overflowY: 'hidden' }} className="fs-1 my-3">
          Contact
        </h3>
        <p style={{ overflowY: 'hidden', color: 'white' }} className="my-3">
          Email: <a style={{ textDecoration: 'none', color: '#3a03ff' }} href="mailto:athulsn32@gmail.com">athulsn32@gmail.com</a>
        </p>
        <a href="https://github.com/Athulsn10" target="_blank">
          <i className="fs-2 fa-brands fa-github" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://www.instagram.com/_athul.exe/" target="_blank" rel="noreferrer">
          <i className="fs-2 ps-2 fa-brands fa-instagram" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://linktr.ee/Athul.S.Nair" target="_blank">
          <i className="ps-2 fs-2 fa-solid fa-link" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/athul-nair123/" target="_blank">
          <i className="ps-2 fs-2 fa-brands fa-linkedin" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://www.behance.net/thulir" target="_blank">
          <i className="ps-2 fs-2 fa-brands fa-square-behance" style={{ color: '#ffffff' }}></i>
        </a>
      </div>
    </div>
        </div>
      </section>
    </>
  )
}

export default Resume