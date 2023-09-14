 function updateWindowSize() {
            const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            // Update the text content of the elements
            document.getElementById("windowWidth").textContent = windowWidth + "px";
            document.getElementById("windowHeight").textContent = windowHeight + "px";
        }

        // Initial call to set the initial window size
        updateWindowSize();

        // Add a resize event listener to update the values when the window is resized
        window.addEventListener("resize", updateWindowSize);