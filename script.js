function calculate(){
    const height = document.getElementById('height').value;
    
    const weight = document.getElementById('weight').value;

    let calculateValue = weight / (height * height);

    let final = Math.round(calculateValue);

    document.getElementById('bmi-point').innerHTML = final;

    if( final < 18.5){
        document.getElementById('bmi-point').style.backgroundColor = 'rgb(188, 188, 11)';
    }

    else if( final > 18.5 && final < 25){
        document.getElementById('bmi-point').style.backgroundColor = 'green';
    }

    else if( final > 25 && final < 30){
        document.getElementById('bmi-point').style.backgroundColor = 'orangered';
    }

    else if( final > 30 ){
        document.getElementById('bmi-point').style.backgroundColor = 'red';
    }
}