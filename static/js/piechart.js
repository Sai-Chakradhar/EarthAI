var ctx = document.getElementById('myPieChart').getContext('2d');

var selectedSectors = []; // Array to hold selected sectors

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Material Loop', 'Product and Energy Loop', 'Biosphere Loop', 'Social Loop'], // Labels for sectors
        datasets: [{
            data: [20, 20, 20, 20], // Data values for each sector
            backgroundColor: [ 
                'rgba(255, 99, 132, 1)',   // red
                'rgba(54, 162, 235, 1)',   // blue
                'rgba(255, 206, 86, 1)',   // yellow
                'rgba(75, 192, 192, 1)'    // green] // Colors for each sector
        ]}]
    },
    options: {
        onClick: function(evt, item) {
            if (item.length) {
                var index = item[0].index;
                if (selectedSectors.includes(index)) {
                    selectedSectors = selectedSectors.filter(i => i !== index); // Remove selection
                } else {
                    selectedSectors.push(index); // Add selection
                }
                updateSectorStyle(this, selectedSectors); // Update chart style
            }
        }
    }
});

function updateSectorStyle(chart, selectedSectors) {
    const defaultOpacity = 1;
    const selectedOpacity = 0.5; // Change this value as needed
    const data = chart.data.datasets[0].data;
    const backgroundColors = chart.data.datasets[0].backgroundColor;

    let newBackgroundColors = backgroundColors.map((color, index) => {
        let opacity = selectedSectors.includes(index) ? selectedOpacity : defaultOpacity;
        // Assuming the color is in the format 'rgba(x, y, z, a)', replace the alpha value
        return color.replace(/[\d\.]+\)$/g, `${opacity})`);
    });

    chart.data.datasets[0].backgroundColor = newBackgroundColors;
    chart.update();
}

document.getElementById('rightArrow').addEventListener('click', function() {
    if (selectedSectors.length > 0) {
        // Example of redirection. Modify as per your requirement.
        window.location.href = 'page.html?selected=' + selectedSectors.join(',');
    } else {
        alert('Please select at least one sector.');
    }
});




