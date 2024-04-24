
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>American Red Cross</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <nav>
        <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#what-we-do">What We Do</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#news-updates">News & Updates</a></li>
            <li><a href="#resources">Resources</a></li>
        </ul>
    </nav>
</header>

<div class="hero">
    <h2>American Red Cross</h2>
    <p>Unite, Serve, Strengthen Together<br>You Can Make a Difference</p>
    <a href="#" class="donate-button">Donate Now</a>
</div>

</body>
</html>
header {
    background-color: #d32f2f;
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
}

nav ul li a {
    text-decoration: none;
    color: white;
    margin: 0 20px; /* Adjust spacing between header items */
}

.hero {
    background-image: url('C:/Users/brian/Downloads/RC.jpeg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
}

.donate-button {
    background-color: #d32f2f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.donate-button:hover {
    background-color: #b71c1c;
