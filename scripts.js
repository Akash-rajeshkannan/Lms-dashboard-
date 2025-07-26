// Chart 1: Student and Staff Pie Chart
new Chart(document.getElementById("chart1"), {
    type: 'doughnut',
    data: {
        labels: ["Students", "Staffs"],
        datasets: [{
            label: "Count",
            data: [0, 3],
            backgroundColor: ["#f56954", "#00a65a"],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        cutout: '70%'
    }
});

// Chart 2: Total Subjects in Each Course
new Chart(document.getElementById("chart2"), {
    type: 'doughnut',
    data: {
        labels: ["MCA", "BE CSE", "ECE", "MECH", "CIVIL", "EEE", "AI/IT/ML", "OTHERS"],
        datasets: [{
            data: [10, 8, 5, 3, 2, 4, 6, 1],
            backgroundColor: [
                "#f56954", "#00a65a", "#f39c12", "#00c0ef",
                "#3c8dbc", "#d2d6de", "#a0aec0", "#b8c2cc"
            ]
        }]
    },
    options: {
        responsive: true,
        cutout: '70%'
    }
});

// Chart 3: Total Student in Each Course
new Chart(document.getElementById("chart3"), {
    type: 'bar',
    data: {
        labels: ["MCA", "BE CSE", "ECE", "MECH", "CIVIL", "EEE", "AI/IT/ML", "OTHERS"],
        datasets: [{
            label: "Students",
            data: [20, 35, 25, 10, 15, 8, 12, 5],
            backgroundColor: [
                "#f56954", "#00a65a", "#f39c12", "#00c0ef",
                "#3c8dbc", "#d2d6de", "#a0aec0", "#b8c2cc"
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 4: Total Students in Each Subject
new Chart(document.getElementById("chart4"), {
    type: 'doughnut',
    data: {
        labels: ["Entrepreneurship", "Database Management System"],
        datasets: [{
            data: [15, 25],
            backgroundColor: ["#f56954", "#00a65a"]
        }]
    },
    options: {
        responsive: true,
        cutout: '70%'
    }
});
