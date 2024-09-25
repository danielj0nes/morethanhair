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

            // Check if 'termin-buchen' is in the href
            if (href.includes('termin-buchen')) {
                // Replace the entire link with the new URL
                link.setAttribute('href', 'https://salonkee.ch/salon/more-than-hair?modal=true');
                console.log(`Link containing 'termin-buchen' replaced with: ${link.getAttribute('href')}`);
            } else {
                // If 'termin-buchen' is not present, proceed with the original modification logic

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
                console.log(`Modified link: ${href}`);
            }
        });

        console.log('Links have been modified.');
    }, 300);
});
