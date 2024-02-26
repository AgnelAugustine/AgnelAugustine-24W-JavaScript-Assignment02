document.addEventListener('DOMContentLoaded', () => {
    // Function to display the student ID and change the background color based on user input
    function changeCustomColor() {
        document.getElementById('myStudentId').textContent = '200555888';
        const customNumber = parseInt(document.getElementById('customNumber').value, 10); // Parse input as integer

        let color;
        if (customNumber < 0 || customNumber > 100) {
            color = 'red'; // Less than 0 or more than 100
        } else if (customNumber <= 20) {
            color = 'green'; // Between 0 and 20
        } else if (customNumber <= 40) {
            color = 'blue'; // Between 21 and 40
        } else if (customNumber <= 60) {
            color = 'orange'; // Between 41 and 60
        } else if (customNumber <= 80) {
            color = 'purple'; // Between 61 and 80
        } else if (customNumber <= 100) {
            color = 'yellow'; // Between 81 and 100
        }

        document.body.style.backgroundColor = color; // Set the background color
    }

    // Function to change the background color randomly
    function changeRandomColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`;
    }

    // Function to generate options for the select list
    function addList() {
        const imageSelect = document.getElementById('imageSelect');
        const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
        if(imageSelect.options.length <= 1) { // To ensure the list is populated only once
            images.forEach((imageName) => {
                let option = new Option(imageName, imageName);
                imageSelect.add(option);
            });
        }
    }

    // Function to change the image displayed based on selection
    function changeImage() {
        const selectedImage = document.getElementById('imageSelect').value;
        document.getElementById('images').src = `./img/${selectedImage}`; 
    }

    // Adding event listeners for buttons and select
    document.querySelector('.custColor').addEventListener('click', changeCustomColor);
    document.querySelector('.randColor').addEventListener('click', changeRandomColor);
    document.getElementById('imageSelect').addEventListener('change', changeImage);

    // Populate image select list on load
    addList();
});
