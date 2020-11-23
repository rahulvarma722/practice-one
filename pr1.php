<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>testing</title>
    <link rel="stylesheet" href="style1.css">
    <style>
        .svg-2 {
            height: 600px;
            width: 600px;
            margin: 30px auto;
            background-color: #f3f3f3;
        }

        .svg-21 {
            /* border: 1px solid red;
            height: 600px;
            width: 600px; */
            /* transform: rotate(-90deg); */
        }

        .svg-21 circle {}
    </style>
</head>

<body>
<h1>dsfhiafhifh first commit </h1>
    <section class="svg-2">

        <svg class="svg-21" height="80" width="80">
            <!-- <circle r="250" cx="250" cy="250" fill="grey" stroke-dasharray="calc(100 * (3.141592653589793
 * 500)/100) calc(3.141592653589793
 * 500)" /> -->
            <circle fill="grey" r="30" cx="40" cy="40" stroke-width="5" fill="none" stroke="red" stroke-dasharray="calc(50 * (3.141592653589793
 * 60)/100) calc(3.141592653589793
 * 60)" />
        </svg>
    </section>

    <!-- <div class="box">
        <div class="percent">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
                <h2>87<span>%</span></h2>
            </div>
        </div>
    </div>
    <h2 class="text">Progress</h2> -->



    <!-- <section style="border:1px solid black;">

        <canvas id="my_canvas2">

        </canvas>
        <span class="canvas-space">80%</span>
    </section> -->

</body>
<script>
    // let can2 = document.getElementById("my_canvas2");
    // let c = can2.getContext('2d');
    // can2.getContext('2d').scale(2,2);


    // let percentTo = 80;
    // can2.width = 150;
    // can2.height = 150;
    // c.lineCap = "round";
    // // let startAng = 0;

    // c.arc(75, 75, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + (360 / 100 * 100)));
    // c.stroke();
    // c.fillStyle = "red";
    // c.fill();

    // let startAng = 80;
    // c.beginPath();
    // c.shadowColor = "green";
    // c.shadowBlur = 8;



    // c.lineWidth = 10;
    // c.strokeStyle = "grey";
    // c.arc(75, 75, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + (360 / 100 * 100)));
    // c.stroke();
    // c.beginPath();
    // c.shadowBlur = 8;
    // c.shadowColor = "red";
    // c.arc(75, 75, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + (360 / 100 * startAng)));
    // c.strokeStyle = "pink";
    // c.lineWidth = 10;
    // c.stroke();

    // let startInt = setInterval(function() {
    //     c.beginPath();
    //     c.strokeStyle = "grey";
    //     c.arc(75, 75, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + (360 / 100 * 100)));
    //     c.stroke();

    //     c.beginPath();
    //     c.arc(75, 75, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + (360 / 100 * startAng)));
    //     c.strokeStyle = "pink";
    //     c.lineWidth = 10;
    //     c.stroke();
    //     if (startAng >= percentTo) clearInterval(startInt);
    //     startAng++;
    // }, 10);
</script>

</html>