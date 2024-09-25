// Ensure the script runs after the page has fully loaded
window.addEventListener('load', function() {
    console.log('Page fully loaded, waiting for 3 seconds...');

    setTimeout(function() {
        console.log('Running the script now...');

        // Select all anchor tags with href attributes
        const links = document.querySelectorAll('a[href]');

        // Iterate through each link
        links.forEach(link => {
            // Get the current href value
            let href = link.getAttribute('href');

            // Find the position of the last slash (/) to get the filename
            const lastSlashIndex = href.lastIndexOf('/');
            const filename = href.substring(lastSlashIndex + 1);

            // Find the position of the last dot (.) to get the file extension or query parameters
            const lastDotIndex = filename.lastIndexOf('.');
            
            // If there's a dot, remove the last character from the file name portion before the dot
            if (lastDotIndex > 0) {
                const newFilename = filename.substring(0, lastDotIndex - 1) + filename.substring(lastDotIndex);
                // Replace the filename in the href
                href = href.substring(0, lastSlashIndex + 1) + newFilename;
            } else {
                // If there's no dot, just remove the last character of the filename
                href = href.substring(0, href.length - 1);
            }

            // Update the href attribute with the modified link
            link.setAttribute('href', href);
        });

        console.log('Links have been modified.');
    }, 300);
});
